// podcast.js - Podcast RSS Parser and Audio Controller
// Handles fetching Episcopal podcasts from Megaphone and managing audio playback.

const FEEDS = {
  morning: 'https://feeds.megaphone.fm/FDMV8366345804',
  evening: 'https://feeds.megaphone.fm/FDMV2784874884',
  song: 'https://api.riverside.fm/hosting/TWlry4RJ.rss'
};


/* BEGIN PROXY ENGINE */
const CORS_PROXIES = [
  url => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`
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
 * Parses today's scripture readings from the podcast description.
 * @param {string} description - The podcast item description.
 * @returns {object|null} An object with ot, nt, gospel, and psalms references or null if not parsed.
 */
export function extractReadings(description) {
  if (!description) return null;
  
  const readings = {
    psalms: '',
    ot: '',
    nt: '',
    gospel: ''
  };
  
  // Clean sweep helper to remove trailing names or commas
  const clean = (str) => {
    if (!str) return '';
    return str
      .replace(/\s+/g, ' ')
      // Clean typical names or officiant trailing credits
      .replace(/(?:Fr\.|Mtr\.|The\s+Rev\.|the\s+Rev\.|James\s+Foster|Laura\s+Ammons|Caitlyn\s+Darnell|Elizabeth\s+Henry-McKeever|Noah\s+Stansbury|Ellen\s+Singer|Ian\s+Lasch|James\s+Foster|The\s+Rev\.\s+[a-zA-Z\s]+|Mtr\.\s+[a-zA-Z\s]+|Fr\.\s+[a-zA-Z\s]+)\s*$/gi, '')
      .trim()
      .replace(/,\s*$/, '') // clean trailing commas
      .replace(/\.$/, '')    // clean trailing periods
      .trim();
  };

  // 1. Parse Psalms
  const psalmsMatch = description.match(/Psalm\(s\):\s*(Psalm\s+[^,]+(?:,\s*\d+)*)/i);
  if (psalmsMatch) {
    readings.psalms = psalmsMatch[1];
  } else {
    // Alternate lookup
    const altPsalmsMatch = description.match(/Psalm\(s\):\s*([a-zA-Z0-9\s\:\-\,]+?)(?=(?:,\s*(?:Fr\.|Mtr\.|The\s+Rev\.|Laura|Old Testament:)))/i);
    if (altPsalmsMatch) readings.psalms = altPsalmsMatch[1];
  }

  // 2. Parse Old Testament
  const otMatch = description.match(/Old Testament:\s*([a-zA-Z0-9\s\:\-\,\(\)]+?)(?=(?:,\s*(?:Fr\.|Mtr\.|The\s+Rev\.|Laura|New Testament:|First Canticle:|Second Canticle:)))/i);
  if (otMatch) {
    readings.ot = otMatch[1];
  } else {
    const simpleOt = description.match(/Old Testament:\s*([^,]+)/i);
    if (simpleOt) readings.ot = simpleOt[1];
  }

  // 3. Parse New Testament
  const ntMatch = description.match(/New Testament:\s*([a-zA-Z0-9\s\:\-\,\(\)]+?)(?=(?:,\s*(?:Fr\.|Mtr\.|The\s+Rev\.|Gospel:|First Canticle:|Second Canticle:)))/i);
  if (ntMatch) {
    readings.nt = ntMatch[1];
  } else {
    const simpleNt = description.match(/New Testament:\s*([^,]+)/i);
    if (simpleNt) readings.nt = simpleNt[1];
  }

  // 4. Parse Gospel
  const gospelMatch = description.match(/Gospel:\s*([a-zA-Z0-9\s\:\-\,\(\)]+?)(?=(?:,\s*(?:Fr\.|Mtr\.|The\s+Rev\.|Logo|Logo image|\.)))/i);
  if (gospelMatch) {
    readings.gospel = gospelMatch[1];
  } else {
    const simpleGospel = description.match(/Gospel:\s*([^,\.]+)/i);
    if (simpleGospel) readings.gospel = simpleGospel[1];
  }

  // Apply cleaning to all parsed fields
  readings.psalms = clean(readings.psalms);
  readings.ot = clean(readings.ot);
  readings.nt = clean(readings.nt);
  readings.gospel = clean(readings.gospel);

  if (!readings.psalms && !readings.ot && !readings.nt && !readings.gospel) {
    return null;
  }
  
  return readings;
}

/**
 * Parses XML string into episode objects.
 * @param {string} rawXml - The raw feed XML.
 * @param {string} type - The podcast type.
 * @returns {Array<object>} A list of parsed episodes.
 */
function parseXmlEpisodes(rawXml, type) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(rawXml, 'text/xml');

  // Handle parsing errors
  const parseError = xmlDoc.querySelector('parsererror');
  if (parseError) throw new Error('XML parsing failed.');

  const items = xmlDoc.querySelectorAll('item');
  const episodes = [];

  items.forEach(item => {
    const title = item.querySelector('title')?.textContent || '';
    const description = item.querySelector('description')?.textContent || item.querySelector('summary')?.textContent || '';
    const pubDateStr = item.querySelector('pubDate')?.textContent || '';
    const pubDate = pubDateStr ? new Date(pubDateStr) : new Date();
    
    // Audio enclosure
    const enclosure = item.querySelector('enclosure');
    const audioUrl = enclosure ? enclosure.getAttribute('url') : '';
    
    // Duration (convert to seconds if format is hh:mm:ss or mm:ss)
    let durationSec = 0;
    const durationText = item.querySelector('duration')?.textContent || '';
    if (durationText) {
      if (durationText.includes(':')) {
        const parts = durationText.split(':').map(Number);
        if (parts.length === 3) {
          durationSec = parts[0] * 3600 + parts[1] * 60 + parts[2];
        } else if (parts.length === 2) {
          durationSec = parts[0] * 60 + parts[1];
        }
      } else {
        durationSec = Number(durationText);
      }
    }

    // Extract scripture readings from description
    const readings = extractReadings(description);

    episodes.push({
      title,
      description,
      pubDate,
      audioUrl,
      duration: durationSec,
      readings,
      feedType: type
    });
  });

  return episodes;
}

/**
 * Fetches and parses a podcast RSS feed.
 * @param {'morning'|'evening'|'song'} type - The podcast type.
 * @returns {Promise<Array<object>>} A list of episodes.
 */
export async function fetchPodcastEpisodes(type) {
  const feedUrl = FEEDS[type];
  if (!feedUrl) throw new Error(`Invalid feed type: ${type}`);

  // 1. Try direct fetch first (works if CORS is supported by feed server)
  try {
    const response = await fetch(feedUrl, { signal: AbortSignal.timeout(5000) });
    if (response.ok) {
      const rawXml = await response.text();
      return parseXmlEpisodes(rawXml, type);
    }
  } catch (e) {
    console.info(`Direct fetch failed for ${type}, attempting alternatives...`, e.message);
  }

  // 2. Try RSS2JSON API converter (highly reliable for non-CORS feeds protected by Cloudflare bot protection)
  try {
    const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
    const response = await fetch(rss2jsonUrl, { signal: AbortSignal.timeout(10000) });
    if (response.ok) {
      const data = await response.json();
      if (data.status === 'ok' && data.items) {
        console.log(`Successfully fetched episodes for ${type} via RSS2JSON converter`);
        return data.items.map(item => {
          const duration = item.enclosure ? Number(item.enclosure.duration || 0) : 0;
          return {
            title: item.title || '',
            description: item.description || item.content || '',
            pubDate: item.pubDate ? new Date(item.pubDate.replace(/-/g, '/')) : new Date(),
            audioUrl: item.enclosure ? item.enclosure.link : '',
            duration: duration,
            readings: extractReadings(item.description || item.content || ''),
            feedType: type
          };
        });
      }
    }
  } catch (err) {
    console.warn(`RSS2JSON converter failed for ${type}:`, err.message);
  }

  // 3. Fallback to original CORS proxy engines and raw XML parsing
  const rawXml = await fetchWithProxyFallback(feedUrl);
  return parseXmlEpisodes(rawXml, type);
}


// ==========================================
// AUDIO ENGINE MANAGER
// ==========================================
class PodcastAudioEngine {
  constructor() {
    this.audio = new Audio();
    this.currentEpisode = null;
    this.callbacks = {
      onTimeUpdate: null,
      onPlay: null,
      onPause: null,
      onEnded: null,
      onError: null,
      onLoadedMetadata: null
    };

    this.audio.addEventListener('timeupdate', () => {
      if (this.callbacks.onTimeUpdate) {
        this.callbacks.onTimeUpdate(this.audio.currentTime, this.audio.duration || 0);
      }
    });

    this.audio.addEventListener('play', () => {
      if (this.callbacks.onPlay) this.callbacks.onPlay(this.currentEpisode);
    });

    this.audio.addEventListener('pause', () => {
      if (this.callbacks.onPause) this.callbacks.onPause();
    });

    this.audio.addEventListener('ended', () => {
      if (this.callbacks.onEnded) this.callbacks.onEnded();
    });

    this.audio.addEventListener('loadedmetadata', () => {
      if (this.callbacks.onLoadedMetadata) {
        this.callbacks.onLoadedMetadata(this.audio.duration);
      }
    });

    this.audio.addEventListener('error', (e) => {
      console.error("Audio playback error:", e);
      if (this.callbacks.onError) this.callbacks.onError(e);
    });
  }

  playEpisode(episode) {
    if (!episode || !episode.audioUrl) return;

    if (this.currentEpisode && this.currentEpisode.audioUrl === episode.audioUrl) {
      this.audio.play();
    } else {
      this.audio.src = episode.audioUrl;
      this.currentEpisode = episode;
      this.audio.load();
      this.audio.play().catch(err => {
        console.warn("Autoplay block or playback interrupted:", err);
      });
    }
  }

  pause() {
    this.audio.pause();
  }

  toggle() {
    if (this.audio.paused) {
      this.audio.play().catch(err => console.warn(err));
    } else {
      this.audio.pause();
    }
  }

  seek(seconds) {
    if (this.audio.duration) {
      this.audio.currentTime = Math.max(0, Math.min(seconds, this.audio.duration));
    }
  }

  skip(seconds) {
    if (this.audio.duration) {
      this.seek(this.audio.currentTime + seconds);
    }
  }

  setSpeed(rate) {
    this.audio.playbackRate = rate;
  }

  getSpeed() {
    return this.audio.playbackRate;
  }

  setVolume(volume) {
    this.audio.volume = Math.max(0, Math.min(volume, 1));
  }

  isPlaying() {
    return !this.audio.paused;
  }

  getDuration() {
    return this.audio.duration || 0;
  }

  getCurrentTime() {
    return this.audio.currentTime || 0;
  }

  registerCallbacks(cbs) {
    this.callbacks = { ...this.callbacks, ...cbs };
  }
}

export const AudioEngine = new PodcastAudioEngine();
