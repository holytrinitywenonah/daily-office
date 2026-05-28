// bible.js - Scripture Reader Service
// Fetches scripture from Oremus Bible Browser (NRSV/NRSVAE), BibleGateway (ESV/RSV/NIV), or Bible-API (WEB/KJV fallback)

/* BEGIN PROXY ENGINE */
const CORS_PROXIES = [
  url => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`
];

export async function fetchWithProxyFallback(targetUrl) {
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
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      try { const json = JSON.parse(text); if (json.contents) return json.contents; } catch(_) {}
      return text;
    } catch(err) {
      lastError = err;
      console.warn('Proxy failed, trying next...', err.message);
    }
  }
  throw new Error(`All proxies failed: ${lastError?.message}`);
}
/* END PROXY ENGINE */

/**
 * Fetches scripture text for a given passage reference.
 */
export async function fetchScripture(passage, translation = 'NRSV') {
  const p = passage.trim();
  try {
    if (translation === 'WEB') return await fetchFromBibleApi(p, 'web');
    if (translation === 'KJV') return await fetchFromBibleApi(p, 'kjv');
    if (['ESV', 'RSV', 'NIV'].includes(translation)) return await fetchFromBibleGateway(p, translation);
    return await fetchFromOremus(p, translation);
  } catch(e) {
    console.warn(`Primary fetch failed for ${translation}, falling back to bible-api.com (WEB translation):`, e.message);
    return await fetchFromBibleApi(p, 'web');
  }
}

/**
 * Fetches and parses scripture from the Oremus Bible Browser.
 */
async function fetchFromOremus(passage, version) {
  const targetUrl = `https://bible.oremus.org/?version=${version}&passage=${encodeURIComponent(passage)}&vnum=YES&fnote=YES&headings=YES`;
  const rawHtml = await fetchWithProxyFallback(targetUrl);
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');
  const bibleTextDiv = doc.querySelector('.bibletext');
  if (!bibleTextDiv) throw new Error('Could not find .bibletext in Oremus response.');
  bibleTextDiv.querySelectorAll('form,.visbuttons,hr,.adj').forEach(el => el.remove());
  let contentHtml = bibleTextDiv.innerHTML.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,'');
  return { reference: passage, textHtml: contentHtml, source: `${version} (via oremus)` };
}

/**
 * Fetches and parses scripture from BibleGateway.
 */
async function fetchFromBibleGateway(passage, version) {
  const targetUrl = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(passage)}&version=${version}`;
  const rawHtml = await fetchWithProxyFallback(targetUrl);
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');
  const passageDivs = doc.querySelectorAll('.passage-text');
  if (passageDivs.length === 0) throw new Error(`Could not find passage text on BibleGateway for ${version}.`);
  const container = document.createElement('div');
  container.className = 'bible-gateway-text';
  passageDivs.forEach(div => {
    const cloned = div.cloneNode(true);
    cloned.querySelectorAll('.footnote, .footnotes, .crossreference, .crossrefs, .passage-other-trans, .share-options, .heading-num, .dropdowns').forEach(el => el.remove());
    container.appendChild(cloned);
  });
  return { reference: passage, textHtml: container.innerHTML, source: `${version} (via BibleGateway)` };
}

/**
 * Fetches scripture from the free, no-key bible-api.com.
 */
async function fetchFromBibleApi(passage, translation = 'web') {
  const url = `https://bible-api.com/${encodeURIComponent(passage)}?translation=${translation}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Bible-API failed: ${response.status}`);
  const data = await response.json();
  let html = `<div class="bible-api-text">`;
  data.verses.forEach(v => { html += `<p class="verse-para"><sup class="vnumVis">${v.verse}</sup> ${v.text.trim()}</p>`; });
  html += '</div>';
  return { reference: data.reference, textHtml: html, source: translation === 'kjv' ? 'King James Version (KJV)' : 'World English Bible (WEB)' };
}
