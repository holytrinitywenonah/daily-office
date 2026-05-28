const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

// 1. Read liturgy.js
let liturgyContent = fs.readFileSync(path.join(srcDir, 'liturgy.js'), 'utf8');
// Remove export statements
liturgyContent = liturgyContent.replace(/export\s+const\s+/g, 'const ');

// 2. Read bible.js
let bibleContent = fs.readFileSync(path.join(srcDir, 'bible.js'), 'utf8');
// Remove exports, duplicate CORS_PROXIES and fetchWithProxyFallback
bibleContent = bibleContent.replace(/export\s+async\s+function\s+/g, 'async function ');
bibleContent = bibleContent.replace(/export\s+function\s+/g, 'function ');
// Remove the marked proxy engine block
bibleContent = bibleContent.replace(/\/\* BEGIN PROXY ENGINE \*\/[\s\S]*?\/\* END PROXY ENGINE \*\//g, '');

// 3. Read podcast.js
let podcastContent = fs.readFileSync(path.join(srcDir, 'podcast.js'), 'utf8');
// Remove exports, duplicate CORS_PROXIES, FEEDS, and fetchWithProxyFallback
podcastContent = podcastContent.replace(/export\s+async\s+function\s+/g, 'async function ');
podcastContent = podcastContent.replace(/export\s+function\s+/g, 'function ');
podcastContent = podcastContent.replace(/export\s+const\s+/g, 'const ');
podcastContent = podcastContent.replace(/const\s+FEEDS\s*=\s*\{[\s\S]*?\};/g, '');
// Remove the marked proxy engine block
podcastContent = podcastContent.replace(/\/\* BEGIN PROXY ENGINE \*\/[\s\S]*?\/\* END PROXY ENGINE \*\//g, '');

// 4. Read app.js
let appContent = fs.readFileSync(path.join(srcDir, 'app.js'), 'utf8');
// Remove import statements from app.js
appContent = appContent.replace(/import\s+[\s\S]*?\s+from\s+['\"].*?['\"];/g, '');
// Replace fetch('./psalter.json') with return BcpPsalter directly
appContent = appContent.replace(
  /async\s+function\s+getBcpPsalter\(\)\s*\{[\s\S]*?\n\}/g,
  `async function getBcpPsalter() {\n  return BcpPsalter;\n}`
);
// Replace DOL_LOADERS block with direct returns of inlined databases
appContent = appContent.replace(
  /\/\* BEGIN DOL_LOADERS \*\/[\s\S]*?\/\* END DOL_LOADERS \*\//g,
  `async function getDolYearOne() { return DolYearOne; }
async function getDolYearTwo() { return DolYearTwo; }
async function getDolHolyDays() { return DolHolyDays; }`
);

// We need a unified CORS_PROXIES list at the beginning
const unifiedCorsProxies = `
const FEEDS = {
  morning: 'https://feeds.megaphone.fm/FDMV8366345804',
  evening: 'https://feeds.megaphone.fm/FDMV2784874884',
  song: 'https://api.riverside.fm/hosting/TWlry4RJ.rss'
};


const CORS_PROXIES = [
  url => \`https://api.codetabs.com/v1/proxy?quest=\${encodeURIComponent(url)}\`,
  url => \`https://api.allorigins.win/raw?url=\${encodeURIComponent(url)}\`,
  url => \`https://corsproxy.io/?\${encodeURIComponent(url)}\`
];

async function fetchWithProxyFallback(targetUrl) {
  let lastError;
  // Try direct fetch first for CORS-friendly APIs
  try {
    const response = await fetch(targetUrl, { signal: AbortSignal.timeout(5000) });
    if (response.ok) {
      const text = await response.text();
      try { const json = JSON.parse(text); if (json.contents) return json.contents; } catch(_) {}
      return text;
    }
  } catch(e) { console.info('Direct fetch failed, trying proxies...', e.message); }

  for (const proxyFn of CORS_PROXIES) {
    try {
      const proxyUrl = proxyFn(targetUrl);
      const response = await fetch(proxyUrl, { signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
      const text = await response.text();
      try {
        const json = JSON.parse(text);
        if (json.contents) return json.contents;
      } catch (_) {}
      return text;
    } catch(err) {
      lastError = err;
      console.warn('Proxy failed, trying next...', err.message);
    }
  }
  throw new Error(\`All proxies failed: \${lastError?.message}\`);
}
`;

// Concatenate all script contents
const finalScript = [
  liturgyContent,
  unifiedCorsProxies,
  bibleContent,
  podcastContent,
  appContent
].join('\n\n');

// Write out the merged JS file
fs.writeFileSync(path.join(__dirname, 'merged.js'), finalScript, 'utf8');
console.log('Successfully merged all JavaScript files into merged.js');
