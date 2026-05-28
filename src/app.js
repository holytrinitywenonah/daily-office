// app.js - Main Application Orchestrator
import { LiturgyData, FeastCalendar } from './liturgy.js';
import { fetchScripture, fetchWithProxyFallback } from './bible.js';
import { fetchPodcastEpisodes, AudioEngine } from './podcast.js';

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
const AppState = {
  currentDate: new Date(),
  activeOffice: 'morning', // 'morning', 'noonday', 'evening', 'compline'
  activeRite: 'rite2',    // 'rite1', 'rite2'
  activeShow: 'morning',   // 'morning', 'evening' (podcast side)
  theme: 'sepia',          // 'light', 'sepia', 'dark'
  fontSize: 'medium',      // 'small', 'medium', 'large'
  bibleVersion: 'NRSV',    // 'NRSV', 'NRSVAE', 'ESV', 'RSV', 'NIV', 'KJV', 'WEB'
  useFeast: false,         // BCP Major Feast override
  useLff: false,           // Lesser Feasts & Fasts override
  useRcl: false,           // Sunday RCL override
  feastCollect: null,      // Collect for active feast/LFF day
  liturgicalOverrideName: null, // Name of active feast override
  activeCommemoration: null, // Active commemoration details
  playerMinimized: false,  // Podcast control bar minimization state
  prayerList: [],          // Private intercessions
  habitLogs: {},           // Prayer completion logs
  
  // Loaded podcast episodes data
  episodes: {
    morning: [],
    evening: [],
    song: []
  },

  
  // Readings extracted from today's podcast episodes
  todayReadings: {
    morning: null, // { psalms, ot, nt, gospel }
    evening: null
  },
  
  // Currently displayed scripture readings
  currentAppointedReadings: null, // Ref to the active office's readings
  activeReadingTab: 'ot',         // 'psalms', 'ot', 'nt', 'gospel'
  activeMobilePane: 'liturgy',    // 'liturgy', 'podcast', 'saint'
  
  // Audio state
  playingEpisode: null,
  isPreloading: false,

  // Podcast search
  podcastSearchQuery: '',

  // Choral Pitchpipe State
  pitchpipeActiveOscillator: null,
  pitchpipeAudioCtx: null,
  pitchpipeFreq: 196.00, // G3 default
  pitchpipeNote: "G3",

  // Phase 3 States
  activeTypography: 'serif', // 'serif' (liturgical Garamond), 'sans'
  activePrayerProfile: 'Default' // local prayer profile
};

// ==========================================================================
// LITURGICAL CALENDAR CALCULATIONS
// ==========================================================================
function getEasterDate(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function getAdventSunday(year) {
  const nov30 = new Date(year, 10, 30);
  const dayOfWeek = nov30.getDay();
  let diff = 0;
  if (dayOfWeek <= 3) {
    diff = -dayOfWeek;
  } else {
    diff = 7 - dayOfWeek;
  }
  return new Date(year, 10, 30 + diff);
}

function getLiturgicalSeason(date) {
  const year = date.getFullYear();
  const time = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  
  const easter = getEasterDate(year);
  const ashWednesday = new Date(easter.getTime() - 46 * 24 * 60 * 60 * 1000);
  const pentecost = new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000);
  const trinitySunday = new Date(easter.getTime() + 56 * 24 * 60 * 60 * 1000);
  const advent = getAdventSunday(year);
  
  const christmasDay = new Date(year, 11, 25);
  const epiphanyDay = new Date(year, 0, 6);
  
  // January Christmas time (spilling from last year)
  const prevYearChristmas = new Date(year - 1, 11, 25);
  const prevYearEpiphanyEve = new Date(year, 0, 5);
  
  if (time >= prevYearChristmas.getTime() && time <= prevYearEpiphanyEve.getTime()) {
    return { name: 'Christmas Season', key: 'christmas', color: 'christmas' };
  }
  
  if (time >= epiphanyDay.getTime() && time < ashWednesday.getTime()) {
    if (date.getMonth() === 0 && date.getDate() === 6) {
      return { name: 'The Epiphany', key: 'epiphany', color: 'christmas' };
    }
    return { name: 'Season after Epiphany', key: 'epiphany', color: 'ordinary' };
  }
  
  if (time >= ashWednesday.getTime() && time < easter.getTime()) {
    const holyWeekStart = easter.getTime() - 7 * 24 * 60 * 60 * 1000;
    if (time >= holyWeekStart) {
      return { name: 'Holy Week', key: 'holy-week', color: 'holy-week' };
    }
    return { name: 'Lent', key: 'lent', color: 'lent' };
  }
  
  if (time >= easter.getTime() && time < pentecost.getTime()) {
    return { name: 'Easter Season', key: 'easter', color: 'easter' };
  }
  
  if (date.getMonth() === pentecost.getMonth() && date.getDate() === pentecost.getDate()) {
    return { name: 'The Day of Pentecost', key: 'pentecost', color: 'pentecost' };
  }
  
  if (date.getMonth() === trinitySunday.getMonth() && date.getDate() === trinitySunday.getDate()) {
    return { name: 'Trinity Sunday', key: 'trinity', color: 'easter' };
  }
  
  const nextAdvent = getAdventSunday(year);
  if (time >= pentecost.getTime() && time < nextAdvent.getTime()) {
    return { name: 'Season after Pentecost', key: 'ordinary', color: 'ordinary' };
  }
  
  const nextChristmasDay = new Date(year, 11, 25);
  if (time >= nextAdvent.getTime() && time < nextChristmasDay.getTime()) {
    return { name: 'Advent', key: 'advent', color: 'advent' };
  }
  
  if (time >= nextChristmasDay.getTime()) {
    return { name: 'Christmas', key: 'christmas', color: 'christmas' };
  }
  
  return { name: 'Ordinary Time', key: 'ordinary', color: 'ordinary' };
}

// Format a date cleanly
function formatDateDisplay(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Simple liturgical day name resolver based on calendar dates
function getLiturgicalDayLabel(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[date.getDay()];
  const seasonInfo = getLiturgicalSeason(date);
  
  if (seasonInfo.key === 'pentecost') return 'The Day of Pentecost';
  if (seasonInfo.key === 'trinity') return 'Trinity Sunday';
  
  if (seasonInfo.key === 'easter') {
    const easter = getEasterDate(date.getFullYear());
    const diffWeeks = Math.floor((date.getTime() - easter.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
    if (diffWeeks === 1 && date.getTime() === easter.getTime()) return 'Easter Day';
    return `${dayName} in the ${diffWeeks} week of Easter`;
  }
  
  if (seasonInfo.key === 'lent') {
    const easter = getEasterDate(date.getFullYear());
    const ashWednesday = new Date(easter.getTime() - 46 * 24 * 60 * 60 * 1000);
    // Find the Sunday of Lent count
    const diffDays = Math.floor((date.getTime() - ashWednesday.getTime()) / (24 * 60 * 60 * 1000));
    if (diffDays === 0) return 'Ash Wednesday';
    const weekNum = Math.floor(diffDays / 7) + 1;
    return `${dayName} in the ${weekNum} week of Lent`;
  }
  
  if (seasonInfo.key === 'advent') {
    const advent = getAdventSunday(date.getFullYear());
    const diffWeeks = Math.floor((date.getTime() - advent.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
    return `${dayName} in the ${diffWeeks} week of Advent`;
  }

  // Fallback default
  return `${dayName} in Ordinary Time`;
}

// ==========================================
// CONFIGURATION & SETUP LOCAL STORAGE
// ==========================================
function loadSettings() {
  const savedTheme = localStorage.getItem('theme');
  const savedFontSize = localStorage.getItem('fontSize');
  const savedBibleVersion = localStorage.getItem('bibleVersion');
  const savedRite = localStorage.getItem('activeRite');
  const savedTypography = localStorage.getItem('activeTypography');
  const savedUseFeast = localStorage.getItem('useFeast');
  const savedUseLff = localStorage.getItem('useLff');
  const savedUseRcl = localStorage.getItem('useRcl');
  const savedPlayerMinimized = localStorage.getItem('playerMinimized');
  
  if (savedTheme) AppState.theme = savedTheme;
  if (savedFontSize) AppState.fontSize = savedFontSize;
  if (savedBibleVersion) AppState.bibleVersion = savedBibleVersion;
  if (savedRite) AppState.activeRite = savedRite;
  if (savedTypography) AppState.activeTypography = savedTypography;
  if (savedUseFeast !== null) AppState.useFeast = savedUseFeast === 'true';
  if (savedUseLff !== null) AppState.useLff = savedUseLff === 'true';
  if (savedUseRcl !== null) AppState.useRcl = savedUseRcl === 'true';
  if (savedPlayerMinimized !== null) AppState.playerMinimized = savedPlayerMinimized === 'true';

  // Apply settings to body
  applyThemeAndSettings();
  syncPlayerMinimizedState();
  
  // Load prayers and habit logs
  loadPrayers();
  loadHabits();
}

function saveSetting(key, value) {
  AppState[key] = value;
  localStorage.setItem(key, value);
  applyThemeAndSettings();
}

function applyThemeAndSettings() {
  const body = document.body;
  
  // Theme class
  body.classList.remove('theme-light', 'theme-sepia', 'theme-dark');
  body.classList.add(`theme-${AppState.theme}`);
  
  // Font size class
  body.classList.remove('fontsize-small', 'fontsize-medium', 'fontsize-large');
  body.classList.add(`fontsize-${AppState.fontSize}`);

  // Typography class
  body.classList.remove('font-style-serif', 'font-style-sans');
  body.classList.add(`font-style-${AppState.activeTypography}`);
  
  // Liturgical season class (determines accent colors)
  const seasonInfo = getLiturgicalSeason(AppState.currentDate);
  body.classList.remove(
    'season-easter', 'season-christmas', 'season-advent', 'season-lent',
    'season-pentecost', 'season-ordinary', 'season-holy-week', 'season-martyr'
  );
  
  const isMartyr = AppState.activeCommemoration && 
                   AppState.activeCommemoration.name && 
                   (AppState.activeCommemoration.name.toLowerCase().includes('martyr') || 
                    AppState.activeCommemoration.name.toLowerCase().includes('martyrs'));
                    
  if (isMartyr) {
    body.classList.add('season-martyr');
  } else {
    const colorClasses = seasonInfo.color.split('-');
    colorClasses.forEach(cls => {
      body.classList.add(`season-${cls}`);
    });
  }

  // Sync settings modal buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-theme') === AppState.theme);
  });
  
  document.querySelectorAll('.fontsize-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-size') === AppState.fontSize);
  });

  document.querySelectorAll('.typography-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-style') === AppState.activeTypography);
  });
  
  const versionSelect = document.getElementById('setting-bible-version');
  if (versionSelect) versionSelect.value = AppState.bibleVersion;

  // Sync override pill active state
  const feastPill = document.getElementById('override-feast');
  const lffPill = document.getElementById('override-lff');
  const rclPill = document.getElementById('override-rcl');
  if (feastPill) feastPill.classList.toggle('active', AppState.useFeast);
  if (lffPill) lffPill.classList.toggle('active', AppState.useLff);
  if (rclPill) {
    rclPill.classList.toggle('active', AppState.useRcl);
    // Dim RCL pill on non-Sundays
    const isSunday = AppState.currentDate.getDay() === 0;
    rclPill.title = isSunday
      ? 'Use Sunday RCL lectionary readings'
      : 'Use Sunday RCL readings (only applies on Sundays)';
  }

  // Sync rite buttons in liturgy subbar
  document.querySelectorAll('.rite-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-rite') === AppState.activeRite);
  });

  // Sync brand name color / details
  const displaySeason = document.getElementById('liturgical-season-display');
  if (displaySeason) {
    displaySeason.textContent = seasonInfo.name;
  }
}

function syncPlayerMinimizedState() {
  const bar = document.getElementById('bottom-player-bar');
  const body = document.body;
  if (!bar) return;
  
  const isMinimized = AppState.playerMinimized;
  bar.classList.toggle('minimized', isMinimized);
  body.classList.toggle('player-minimized', isMinimized);
  
  // Update aria-label and title for accessibility
  const btn = document.getElementById('player-minimize-btn');
  if (btn) {
    btn.title = isMinimized ? 'Expand Player' : 'Minimize Player';
    btn.setAttribute('aria-label', isMinimized ? 'Expand Player' : 'Minimize Player');
  }
}

function switchMobilePane(paneName) {
  AppState.activeMobilePane = paneName;
  const appContainer = document.querySelector('.app-container');
  if (appContainer) {
    appContainer.classList.remove('show-liturgy', 'show-podcast', 'show-saint');
    appContainer.classList.add('show-' + paneName);
  }
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-pane') === paneName);
  });
}

// Select default office based on current local time
function selectDefaultOffice() {
  const hour = AppState.currentDate.getHours();
  let defaultOffice = 'morning';
  
  if (hour >= 11 && hour < 15) {
    defaultOffice = 'noonday';
  } else if (hour >= 15 && hour < 20) {
    defaultOffice = 'evening';
  } else if (hour >= 20 || hour < 6) {
    defaultOffice = 'compline';
  }
  
  AppState.activeOffice = defaultOffice;
  
  // Update liturgy selector active tab
  document.querySelectorAll('#liturgy-tabs .tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-office') === defaultOffice);
  });

  // Hide/Show Rite Selector for Noonday & Compline (they don't have Rites in BCP)
  const riteContainer = document.getElementById('rite-selector-container');
  if (riteContainer) {
    if (defaultOffice === 'noonday' || defaultOffice === 'compline') {
      riteContainer.style.visibility = 'hidden';
    } else {
      riteContainer.style.visibility = 'visible';
    }
  }
}

// ==========================================
// LITURGICAL RESOLVERS & OVERRIDES
// ==========================================
function getOpeningSentence(season, rite, date) {
  const sentencesObj = LiturgyData.openingSentences[season] || LiturgyData.openingSentences.ordinary;
  const sentences = sentencesObj[rite] || LiturgyData.openingSentences.ordinary[rite];
  if (!sentences || sentences.length === 0) return '';
  const index = (date.getDate() + date.getMonth()) % sentences.length;
  return sentences[index];
}

function isApocrypha(passage) {
  if (!passage) return false;
  const lower = passage.toLowerCase();
  const apocryphalBooks = [
    'wisdom', 'sirach', 'ecclesiasticus', 'tobit', 'judith', 
    'baruch', 'esdras', 'maccabees', 'bel and the dragon', 'susanna'
  ];
  return apocryphalBooks.some(book => lower.includes(book));
}

function getReadingResponseHtml(passage, rite) {
  const isApoc = isApocrypha(passage);
  const isRite1 = (rite === 'rite1');
  if (isApoc) {
    return `
      <div class="reading-response" style="margin-top: 1rem; font-style: italic; color: var(--text-secondary);">
        Here ${isRite1 ? 'endeth' : 'ends'} the reading.
      </div>
    `;
  } else {
    return `
      <div class="reading-response" style="margin-top: 1rem; font-style: italic; color: var(--text-secondary);">
        Here ${isRite1 ? 'endeth' : 'ends'} the reading.
      </div>
      <div class="liturgical-response" style="margin-top: 0.5rem; padding-left: 1rem; border-left: 2px solid var(--accent-color); font-family: var(--font-heading);">
        <div><strong>Reader:</strong> The Word of the Lord.</div>
        <div><strong>People:</strong> Thanks be to God.</div>
      </div>
    `;
  }
}

function getCanticleByKey(key, rite) {
  if (rite === 'rite1') {
    const rite1Mappings = {
      'canticle12': 'canticle1',
      'canticle13': 'canticle2',
      'canticle15': 'canticle3',
      'canticle16': 'canticle4',
      'canticle17': 'canticle5',
      'canticle20': 'canticle6',
      'canticle21': 'canticle7'
    };
    if (rite1Mappings[key]) {
      return LiturgyData.canticles[rite1Mappings[key]];
    }
  }
  return LiturgyData.canticles[key];
}

function getSuggestedCanticles(office, date, season, rite, isFeast) {
  const day = date.getDay();
  let otKey = '';
  let ntKey = '';
  
  if (office === 'morning') {
    if (isFeast) {
      otKey = 'canticle16';
      ntKey = 'canticle21';
    } else {
      switch (day) {
        case 0:
          if (season === 'advent') {
            otKey = 'canticle11';
            ntKey = 'canticle16';
          } else if (season === 'lent') {
            otKey = 'canticle14';
            ntKey = 'canticle16';
          } else if (season === 'easter') {
            otKey = 'canticle8';
            ntKey = 'canticle21';
          } else {
            otKey = 'canticle16';
            ntKey = 'canticle21';
          }
          break;
        case 1:
          otKey = 'canticle9';
          ntKey = 'canticle19';
          break;
        case 2:
          otKey = 'canticle13';
          ntKey = 'canticle18';
          break;
        case 3:
          if (season === 'lent') {
            otKey = 'canticle14';
          } else {
            otKey = 'canticle11';
          }
          ntKey = 'canticle16';
          break;
        case 4:
          otKey = 'canticle8';
          if (season === 'advent' || season === 'lent') {
            ntKey = 'canticle19';
          } else {
            ntKey = 'canticle20';
          }
          break;
        case 5:
          if (season === 'lent') {
            otKey = 'canticle14';
          } else {
            otKey = 'canticle10';
          }
          ntKey = 'canticle18';
          break;
        case 6:
          otKey = 'canticle12';
          ntKey = 'canticle19';
          break;
      }
    }
  } else if (office === 'evening') {
    if (isFeast) {
      otKey = 'canticle15';
      ntKey = 'canticle17';
    } else {
      switch (day) {
        case 0:
          otKey = 'canticle15';
          ntKey = 'canticle17';
          break;
        case 1:
          if (season === 'lent') {
            otKey = 'canticle14';
          } else {
            otKey = 'canticle8';
          }
          ntKey = 'canticle17';
          break;
        case 2:
          otKey = 'canticle10';
          ntKey = 'canticle15';
          break;
        case 3:
          otKey = 'canticle12';
          ntKey = 'canticle17';
          break;
        case 4:
          otKey = 'canticle11';
          ntKey = 'canticle15';
          break;
        case 5:
          otKey = 'canticle13';
          ntKey = 'canticle17';
          break;
        case 6:
          otKey = 'canticle9';
          ntKey = 'canticle15';
          break;
      }
    }
  }
  
  return {
    first: getCanticleByKey(otKey, rite),
    second: getCanticleByKey(ntKey, rite)
  };
}

async function fetchRclReadings(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  const targetUrl = `https://lectio-api.org/api/v1/readings?date=${dateStr}&tradition=rcl`;
  
  try {
    const rawText = await fetchWithProxyFallback(targetUrl);
    const parsed = JSON.parse(rawText);
    const data = parsed && parsed.data ? parsed.data : parsed;
    
    if (data && data.readings && Array.isArray(data.readings)) {
      const getByPreference = (type) => {
        const typedReadings = data.readings.filter(r => r.type === type);
        if (typedReadings.length === 0) return null;
        const primary = typedReadings.find(r => !r.isAlternative);
        return (primary || typedReadings[0]).citation;
      };
      
      const ot = getByPreference('first');
      const psalms = getByPreference('psalm');
      const nt = getByPreference('second');
      const gospel = getByPreference('gospel');
      
      if (ot || psalms || nt || gospel) {
        return { ot, psalms, nt, gospel };
      }
    }
    throw new Error("No readings found in API response");
  } catch(e) {
    console.error("Failed to fetch RCL readings", e);
    return null;
  }
}

function updateSaintBiographySidebar(commemoration, isOverridden = false, isTransferred = false, yesterdayName = '') {
  const pane = document.getElementById('saint-bio-pane');
  const appContainer = document.querySelector('.app-container');
  const bioBtn = document.getElementById('mobile-nav-bio-btn');
  if (!pane) return;
  
  if (commemoration) {
    let alertHtml = '';
    if (isOverridden) {
      alertHtml = `
        <div class="saint-transfer-alert" style="background-color: rgba(212, 163, 89, 0.15); border-left: 4px solid #d4a359; color: #9c6c21; padding: 12px; margin: 16px; margin-bottom: 0; border-radius: 4px; font-size: 0.88em; line-height: 1.4; border-top-right-radius: 4px; border-bottom-right-radius: 4px;">
          <strong>Liturgical Overlap:</strong> This commemoration coincides with a Major Feast or Sunday. The primary liturgy of the day takes precedence, and this observance is typically transferred to the following open day.
        </div>
      `;
    } else if (isTransferred) {
      alertHtml = `
        <div class="saint-transfer-alert" style="background-color: rgba(212, 163, 89, 0.15); border-left: 4px solid #d4a359; color: #9c6c21; padding: 12px; margin: 16px; margin-bottom: 0; border-radius: 4px; font-size: 0.88em; line-height: 1.4; border-top-right-radius: 4px; border-bottom-right-radius: 4px;">
          <strong>Transferred Observance:</strong> This feast was transferred from yesterday (${yesterdayName}) because yesterday was a Major Feast or Sunday.
        </div>
      `;
    }
    
    pane.innerHTML = `
      <div class="saint-pane-header">
        <h2>${commemoration.name}</h2>
        <span class="saint-type-tag">${commemoration.type === 'major' ? 'Major Feast' : 'Lesser Feast / Commemoration'}</span>
      </div>
      ${alertHtml}
      <div class="saint-pane-body">
        <div class="saint-collect-box">
          <h3>Collect of the Day</h3>
          <p>${commemoration.collect}</p>
        </div>
        <div class="saint-bio-content">
          <h3>Biography</h3>
          <p>${commemoration.bio}</p>
        </div>
      </div>
    `;
    pane.style.display = 'block';
    if (appContainer) appContainer.classList.add('has-saint-sidebar');
    if (bioBtn) bioBtn.style.display = 'flex';
  } else {
    pane.innerHTML = '';
    pane.style.display = 'none';
    if (appContainer) appContainer.classList.remove('has-saint-sidebar');
    if (bioBtn) bioBtn.style.display = 'none';
    if (AppState.activeMobilePane === 'saint') {
      switchMobilePane('liturgy');
    }
  }
}

// ==========================================
// LITURGY RENDER ENGINE
// ==========================================
function renderLiturgyFlow() {
  const target = document.getElementById('liturgy-body-target');
  if (!target) return;
  
  const office = AppState.activeOffice;
  const rite = AppState.activeRite;
  const season = getLiturgicalSeason(AppState.currentDate).key;
  
  let html = '';
  
  if (office === 'morning') {
    html = renderMorningPrayer(rite, season);
  } else if (office === 'noonday') {
    html = renderNoondayPrayer();
  } else if (office === 'evening') {
    html = renderEveningPrayer(rite, season);
  } else if (office === 'compline') {
    html = renderCompline();
  }
  
  target.innerHTML = html;
  
  // Attach event listeners for expanding/collapsing local Psalms (Noonday / Compline)
  document.querySelectorAll('.toggle-psalm-header').forEach(el => {
    el.addEventListener('click', (e) => {
      const targetId = el.getAttribute('data-psalm');
      const box = document.getElementById(targetId);
      if (box) {
        const isCollapsed = box.style.display === 'none';
        box.style.display = isCollapsed ? 'block' : 'none';
        el.querySelector('.toggle-indicator').textContent = isCollapsed ? '▼' : '▶';
      }
    });
  });

  // Re-bind click event on Appointed readings tabs inside liturgy
  bindLiturgyReadingTabs();
}

// ==========================================
// LITURGICAL SEASONAL SVG FLOURISH GENERATOR (REMOVED AS REQUESTED)
// ==========================================
function getSeasonalOrnamentHtml(season) {
  return '';
}

// ==========================================
// LITURGICAL ILLUMINATED DROP-CAP WRAPPER
// ==========================================
function applyIlluminatedDropCap(html) {
  if (AppState.activeTypography !== 'serif') return html;
  if (!html || typeof html !== 'string') return html;
  
  // Robust match: optional tag prefix, then first alphabetical letter
  const match = html.match(/^(<p[^>]*>)?([A-Za-z])/);
  if (match) {
    const openingTag = match[1] || '';
    const firstLetter = match[2];
    const restOfHtml = html.substring(openingTag.length + 1);
    return `${openingTag}<span class="liturgical-drop-cap">${firstLetter}</span>${restOfHtml}`;
  }
  return html;
}

function renderMorningPrayer(rite, season) {
  const conf = LiturgyData.confession[rite];
  const invit = LiturgyData.invitatory[rite];
  const sentence = getOpeningSentence(season, rite, AppState.currentDate);
  const closingText = LiturgyData.closing[rite];

  // Invitatory Psalm choice
  let invitPsalm = LiturgyData.canticles.venite;
  if (rite === 'rite1') {
    invitPsalm = LiturgyData.canticles.venite_rite1;
    if (season === 'easter') {
      invitPsalm = LiturgyData.canticles.paschaNostrum_rite1;
    } else if (AppState.currentDate.getDay() === 0 || season === 'christmas' || season === 'epiphany') {
      invitPsalm = LiturgyData.canticles.jubilate_rite1;
    }
  } else {
    if (season === 'easter') {
      invitPsalm = LiturgyData.canticles.paschaNostrum;
    } else if (AppState.currentDate.getDay() === 0 || season === 'christmas' || season === 'epiphany') {
      invitPsalm = LiturgyData.canticles.jubilate;
    }
  }
  
  // Canticle picks (BCP 144 suggested rotation)
  const suggested = getSuggestedCanticles('morning', AppState.currentDate, season, rite, !!AppState.activeCommemoration);
  const firstCanticle = suggested.first;
  const secondCanticle = suggested.second;
  
  // Daily Office Suffrages & Collect choice
  const prayers = LiturgyData.prayers[rite];
  const dayIndex = AppState.currentDate.getDay();
  
  // Weekly Collect (previous Sunday's collect)
  const sundayCollectObj = getPreviousSundayCollect(AppState.currentDate, rite);
  
  // Daily Collect (specific to this day of the week)
  const dailyCollectObj = getDailyCollect(dayIndex, rite);

  // If LFF/Feast is active, it replaces the Weekly Collect
  const weeklyCollectText = applyIlluminatedDropCap(AppState.feastCollect || sundayCollectObj.text);
  const weeklyCollectTitle = AppState.feastCollect 
    ? `Collect of the Day: ${AppState.liturgicalOverrideName || 'the Feast'}`
    : sundayCollectObj.title;

  const isRite2 = (rite === 'rite2');

  return `
    ${getSeasonalOrnamentHtml(season)}
    <h2 class="liturgy-section-title">Daily Morning Prayer: ${isRite2 ? 'Rite II' : 'Rite I'}</h2>
    
    ${renderLiturgicalPodcastBanner()}
    
    <div class="rubric">The Officiant begins the service with one or more of these sentences of Scripture</div>
    <div class="prayer-block">
      <p style="font-weight: 500; font-style: italic;">${sentence}</p>
    </div>
    
    <h3 class="prayer-title">Confession of Sin</h3>
    <div class="rubric">${conf.rubric}</div>
    <div class="prayer-block"><p>${conf.exhortation}</p></div>
    <div class="rubric">${conf.rubricJoint}</div>
    <div class="indented-text">${conf.text}</div>
    
    <div class="rubric">${conf.rubricAbsolution}</div>
    <div class="prayer-block">
      <p>${conf.absolution}</p>
      <div class="rubric" style="margin-top:0.5rem; margin-bottom:0.25rem;">Or the following declaration of forgiveness if led by a layperson:</div>
      <p style="font-style: italic; color: var(--text-secondary);">${conf.layText}</p>
    </div>
    
    <h3 class="prayer-title">The Invitatory and Psalter</h3>
    <div class="rubric">${invit.rubric}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${invit.v}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${invit.r}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:0.5rem;">${season === 'lent' ? invit.doxology.replace(/\s*Alleluia\.?/gi, '') : invit.doxology}</div>
    <div class="rubric">${invit.rubricAlleluia}</div>
    
    <h4 class="prayer-title">${invitPsalm.title}</h4>
    <div class="rubric">${invitPsalm.subtitle}</div>
    <div class="indented-text">${invitPsalm.text}</div>
    
    <!-- APPOINTED READINGS INTEGRATION -->
    ${renderAppointedReadingsContainer()}
    
    <h4 class="prayer-title">${firstCanticle.title}</h4>
    <div class="rubric">${firstCanticle.subtitle}</div>
    <div class="indented-text">${firstCanticle.text}</div>
    
    <h4 class="prayer-title">${secondCanticle.title}</h4>
    <div class="rubric">${secondCanticle.subtitle}</div>
    <div class="indented-text">${secondCanticle.text}</div>
    
    <h3 class="prayer-title">The Apostles' Creed</h3>
    <div class="rubric">${LiturgyData.creed[rite].rubric}</div>
    <div class="indented-text">${LiturgyData.creed[rite].text}</div>
    
    <h3 class="prayer-title">The Prayers</h3>
    <div class="rubric">${prayers.rubric}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${prayers.v1}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${prayers.r1}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${prayers.v2}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:1.5rem;">
      ${isRite2 ? prayers.lordsPrayerTraditional : prayers.lordsPrayer}
    </div>
    
    <h4 class="prayer-title">Suffrages</h4>
    ${renderSuffrages(prayers.suffragesA || prayers.suffrages)}
    
    <h3 class="prayer-title">${weeklyCollectTitle}</h3>
    <div class="prayer-block"><p>${weeklyCollectText}</p></div>
    
    <h4 class="prayer-title">${dailyCollectObj.title}</h4>
    <div class="prayer-block"><p>${dailyCollectObj.text}</p></div>
    
    <h4 class="prayer-title">A Prayer for Mission</h4>
    <div class="prayer-block"><p>${LiturgyData.collects.rite2.mission1}</p></div>
    
    <div class="rubric">Authorized intercessions and thanksgivings may be offered here.</div>
    ${getPersonalIntercessionsCardHtml()}
    
    <h3 class="prayer-title">The General Thanksgiving</h3>
    <div class="indented-text">
      Almighty God, Father of all mercies,\nwe your unworthy servants give you humble thanks\nfor all your goodness and loving-kindness\nto us and to all whom you have made.\nWe bless you for our creation, preservation,\nand all the blessings of this life;\nbut above all for your immeasurable love\nin the redemption of the world by our Lord Jesus Christ;\nfor the means of grace, and for the hope of glory.\nAnd, we pray, give us such an awareness of your mercies,\nthat with truly thankful hearts we may show forth your praise,\nnot only with our lips, but in our lives,\nby giving up our selves to your service,\nand by walking before you\nin holiness and righteousness all our days;\nthrough Jesus Christ our Lord,\nto whom, with you and the Holy Spirit,\nbe honor and glory throughout all ages. Amen.
    </div>
    
    <div class="prayer-block" style="margin-top:2rem;">
      <p style="white-space: pre-line;">${closingText}</p>
    </div>
    ${renderHabitCheckInHtml('morning')}
  `;
}

function renderNoondayPrayer() {
  const data = LiturgyData.noondayPrayer;
  const season = getLiturgicalSeason(AppState.currentDate).key;
  return `
    ${getSeasonalOrnamentHtml(season)}
    <h2 class="liturgy-section-title">${data.title}</h2>
    
    ${renderLiturgicalPodcastBanner()}
    
    <div class="rubric">${data.rubric1}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v1}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r1}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:1rem;">${season === 'lent' ? data.doxology.replace(/\s*Alleluia\.?/gi, '') : data.doxology}</div>
    
    <div class="rubric">${data.rubricPsalms}</div>
    <div class="prayer-block" style="display:flex; flex-direction:column; gap:0.5rem;">
      ${Object.entries(data.psalms).map(([key, ps]) => `
        <div style="border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); overflow:hidden;">
          <button class="toggle-psalm-header" data-psalm="${key}" style="width:100%; display:flex; justify-content:space-between; padding:0.65rem 1rem; font-family:var(--font-heading); font-weight:600; background-color:var(--bg-secondary); color:var(--text-primary);">
            <span>${ps.title}</span>
            <span class="toggle-indicator">▶</span>
          </button>
          <div id="${key}" style="display:none; padding:1.25rem; background-color:var(--bg-card); border-top:1px solid var(--border-color);" class="indented-text">
            ${ps.text}
          </div>
        </div>
      `).join('')}
    </div>
    
    <div class="rubric">${data.rubricScripture}</div>
    <div class="prayer-block" style="display:flex; flex-direction:column; gap:0.75rem;">
      ${data.scriptures.map(s => `
        <div style="background-color: var(--bg-secondary); padding: 1rem; border-radius: var(--border-radius-sm); border: 1px solid var(--border-color);">
          <p style="font-style: italic; margin-bottom: 0.25rem;">${s.text}</p>
          <button class="btn-primary" style="font-size:10px; padding:0.25rem 0.5rem; margin-top:0.25rem;" onclick="window.LookupScriptureDirect('${s.ref}')">Read full passage</button>
        </div>
      `).join('')}
      <div class="versicle-row" style="margin-top:0.5rem;"><span class="r-indicator">R.</span><span>${data.response}</span></div>
    </div>
    
    <div class="rubric">${data.rubricPrayers}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v2}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r2}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v3}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-top:0.5rem;">${data.lordsPrayer}</div>
    
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v4}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r4}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v5}</span></div>
    <div class="prayer-block" style="margin-top:0.5rem;"><p>${data.collect}</p></div>
    
    <div class="prayer-block" style="margin-top:1.5rem; font-weight:600;"><p>${data.dismissal}</p></div>
    ${renderHabitCheckInHtml('noonday')}
  `;
}

function renderEveningPrayer(rite, season) {
  const conf = LiturgyData.confession[rite];
  const invit = LiturgyData.invitatory[rite];
  const sentence = getOpeningSentence(season, rite, AppState.currentDate);
  const closingText = LiturgyData.closing[rite];

  // Canticle picks (BCP 145 suggested rotation)
  const suggested = getSuggestedCanticles('evening', AppState.currentDate, season, rite, !!AppState.activeCommemoration);
  const firstCanticle = suggested.first;
  const secondCanticle = suggested.second;

  const prayers = LiturgyData.prayers[rite];
  const dayIndex = AppState.currentDate.getDay();
  
  // Weekly Collect (previous Sunday's collect)
  const sundayCollectObj = getPreviousSundayCollect(AppState.currentDate, rite);
  
  const collectPeace = LiturgyData.collects[rite].peace;

  // If LFF/Feast is active, it replaces the Weekly Collect
  const weeklyCollectText = applyIlluminatedDropCap(AppState.feastCollect || sundayCollectObj.text);
  const weeklyCollectTitle = AppState.feastCollect 
    ? `Collect of the Day: ${AppState.liturgicalOverrideName || 'the Feast'}`
    : sundayCollectObj.title;

  const isRite2 = (rite === 'rite2');

  return `
    ${getSeasonalOrnamentHtml(season)}
    <h2 class="liturgy-section-title">Daily Evening Prayer: ${isRite2 ? 'Rite II' : 'Rite I'}</h2>
    
    ${renderLiturgicalPodcastBanner()}
    
    <div class="rubric">The Officiant begins the service with one or more of these sentences of Scripture</div>
    <div class="prayer-block">
      <p style="font-weight: 500; font-style: italic;">${sentence}</p>
    </div>
    
    <h3 class="prayer-title">Confession of Sin</h3>
    <div class="rubric">${conf.rubric}</div>
    <div class="prayer-block"><p>${conf.exhortation}</p></div>
    <div class="rubric">${conf.rubricJoint}</div>
    <div class="indented-text">${conf.text}</div>
    
    <div class="rubric">${conf.rubricAbsolution}</div>
    <div class="prayer-block">
      <p>${conf.absolution}</p>
      <div class="rubric" style="margin-top:0.5rem; margin-bottom:0.25rem;">Or the following declaration of forgiveness if led by a layperson:</div>
      <p style="font-style: italic; color: var(--text-secondary);">${conf.layText}</p>
    </div>
    
    <h3 class="prayer-title">The Invitatory and Psalter</h3>
    <div class="rubric">${invit.rubric}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${invit.v}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${invit.r}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:0.5rem;">${season === 'lent' ? invit.doxology.replace(/\s*Alleluia\.?/gi, '') : invit.doxology}</div>
    
    <h4 class="prayer-title">Phos Hilaron</h4>
    <div class="rubric">O Gracious Light</div>
    <div class="indented-text">
      O gracious Light,\npure brightness of the everliving Father in heaven,\nO Jesus Christ, holy and blessed!\n\nNow as we come to the setting of the sun,\nand our eyes behold the vesper light,\nwe sing your praises, O God: Father, Son, and Holy Spirit.\n\nYou are worthy at all times to be praised by happy voices,\nO Son of God, O Giver of life,\nand to be glorified through all the worlds.
    </div>
    
    <!-- APPOINTED READINGS INTEGRATION -->
    ${renderAppointedReadingsContainer()}
    
    <h4 class="prayer-title">${firstCanticle.title}</h4>
    <div class="rubric">${firstCanticle.subtitle}</div>
    <div class="indented-text">${firstCanticle.text}</div>
    
    <h4 class="prayer-title">${secondCanticle.title}</h4>
    <div class="rubric">${secondCanticle.subtitle}</div>
    <div class="indented-text">${secondCanticle.text}</div>
    
    <h3 class="prayer-title">The Apostles' Creed</h3>
    <div class="rubric">${LiturgyData.creed[rite].rubric}</div>
    <div class="indented-text">${LiturgyData.creed[rite].text}</div>
    
    <h3 class="prayer-title">The Prayers</h3>
    <div class="rubric">${prayers.rubric}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${prayers.v1}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${prayers.r1}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${prayers.v2}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:1.5rem;">
      ${isRite2 ? prayers.lordsPrayerTraditional : prayers.lordsPrayer}
    </div>
    
    <h4 class="prayer-title">Suffrages</h4>
    ${renderSuffrages(prayers.suffragesA || prayers.suffrages)}
    
    <h3 class="prayer-title">${weeklyCollectTitle}</h3>
    <div class="prayer-block"><p>${weeklyCollectText}</p></div>
    
    <h4 class="prayer-title">A Collect for Peace</h4>
    <div class="prayer-block"><p>${collectPeace}</p></div>    <h4 class="prayer-title">A Prayer for Mission</h4>
    <div class="prayer-block"><p>${LiturgyData.collects.rite2.mission2}</p></div>
    
    <div class="rubric">Authorized intercessions and thanksgivings may be offered here.</div>
    ${getPersonalIntercessionsCardHtml()}
    
    <h3 class="prayer-title">The General Thanksgiving</h3>
    <div class="indented-text">
      Almighty God, Father of all mercies,\nwe your unworthy servants give you humble thanks\nfor all your goodness and loving-kindness\nto us and to all whom you have made.\nWe bless you for our creation, preservation,\nand all the blessings of this life;\nbut above all for your immeasurable love\nin the redemption of the world by our Lord Jesus Christ;\nfor the means of grace, and for the hope of glory.\nAnd, we pray, give us such an awareness of your mercies,\nthat with truly thankful hearts we may show forth your praise,\nnot only with our lips, but in our lives,\nby giving up our selves to your service,\nand by walking before you\nin holiness and righteousness all our days;\nthrough Jesus Christ our Lord,\nto whom, with you and the Holy Spirit,\nbe honor and glory throughout all ages. Amen.
    </div>
    
    <div class="prayer-block" style="margin-top:2rem;">
      <p style="white-space: pre-line;">${closingText}</p>
    </div>
    ${renderHabitCheckInHtml('evening')}
  `;
}

function renderCompline() {
  const data = LiturgyData.compline;
  const seasonObj = getLiturgicalSeason(AppState.currentDate);
  const season = seasonObj.key;
  const isEaster = season === 'easter';

  return `
    ${getSeasonalOrnamentHtml(season)}
    <h2 class="liturgy-section-title">${data.title}</h2>
    
    ${renderLiturgicalPodcastBanner()}
    
    <div class="rubric">${data.rubric1}</div>
    <div class="prayer-block"><p>${data.opening}</p></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v1}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r1}</span></div>
    
    <div class="rubric">${data.rubricConfession}</div>
    <div class="prayer-block"><p>${data.exhortation}</p></div>
    <div class="indented-text">${data.text}</div>
    
    <div class="rubric">${data.rubricAbsolution}</div>
    <div class="prayer-block"><p>${data.absolution}</p></div>
    
    <div class="versicle-row" style="margin-top:1.5rem;"><span class="v-indicator">V.</span><span>${data.v2}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r2}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-bottom:1rem;">${season === 'lent' ? data.doxology.replace(/\s*Alleluia\.?/gi, '') : data.doxology}</div>
    
    <div class="rubric">${data.rubricPsalms}</div>
    <div class="prayer-block" style="display:flex; flex-direction:column; gap:0.5rem;">
      ${Object.entries(data.psalms).map(([key, ps]) => `
        <div style="border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); overflow:hidden;">
          <button class="toggle-psalm-header" data-psalm="${key}" style="width:100%; display:flex; justify-content:space-between; padding:0.65rem 1rem; font-family:var(--font-heading); font-weight:600; background-color:var(--bg-secondary); color:var(--text-primary);">
            <span>${ps.title}</span>
            <span class="toggle-indicator">▶</span>
          </button>
          <div id="${key}" style="display:none; padding:1.25rem; background-color:var(--bg-card); border-top:1px solid var(--border-color);" class="indented-text">
            ${ps.text}
          </div>
        </div>
      `).join('')}
    </div>
    
    <div class="rubric">${data.rubricScripture}</div>
    <div class="prayer-block" style="display:flex; flex-direction:column; gap:0.75rem;">
      ${data.scriptures.map(s => `
        <div style="background-color: var(--bg-secondary); padding: 1rem; border-radius: var(--border-radius-sm); border: 1px solid var(--border-color);">
          <p style="font-style: italic; margin-bottom: 0.25rem;">${s.text}</p>
          <button class="btn-primary" style="font-size:10px; padding:0.25rem 0.5rem; margin-top:0.25rem;" onclick="window.LookupScriptureDirect('${s.ref}')">Read full passage</button>
        </div>
      `).join('')}
      <div class="versicle-row" style="margin-top:0.5rem;"><span class="r-indicator">R.</span><span>${data.response}</span></div>
    </div>
    
    <div class="versicle-row" style="margin-top:1.5rem;"><span class="v-indicator">V.</span><span>${data.v3}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r3}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v4}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r4}</span></div>
    
    <div class="rubric">${data.rubricPrayers}</div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v5}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r5}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v6}</span></div>
    <div class="indented-text" style="padding-left:1.5rem; margin-top:0.5rem;">${data.lordsPrayer}</div>
    
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v7}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r7}</span></div>
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${data.v8}</span></div>
    
    <div class="prayer-block" style="margin-top:0.5rem; display:flex; flex-direction:column; gap:0.75rem;">
      ${data.collects.map(c => `<p>${c}</p>`).join('')}
    </div>
    
    <h4 class="prayer-title" style="margin-top:1.5rem;">The Song of Simeon</h4>
    <div class="rubric">${data.rubricNunc}</div>
    <p style="font-weight: 500; font-style: italic; margin-bottom: 0.5rem;">${data.antiphonBefore}</p>
    <div class="indented-text">${data.nuncDimittis}</div>
    <p style="font-weight: 500; font-style: italic; margin-top: 0.5rem;">
      ${isEaster ? data.antiphonAfter : data.antiphonAfter.replace(' Alleluia, alleluia, alleluia.', '')}
    </p>
    
    <div class="versicle-row" style="margin-top:1.5rem;"><span class="v-indicator">V.</span><span>${data.v9}</span></div>
    <div class="versicle-row"><span class="r-indicator">R.</span><span>${data.r9}</span></div>
    
    <div class="prayer-block" style="margin-top:1.5rem;"><p>${data.blessing}</p></div>
    ${renderHabitCheckInHtml('compline')}
  `;
}

function renderSuffrages(list) {
  return list.map(item => `
    <div class="versicle-row"><span class="v-indicator">V.</span><span>${item.v}</span></div>
    <div class="versicle-row" style="margin-bottom:0.75rem;"><span class="r-indicator">R.</span><span>${item.r}</span></div>
  `).join('');
}

// Render the Readings Container layout block inside liturgy
function renderAppointedReadingsContainer() {
  const readings = AppState.currentAppointedReadings;
  
  if (!readings) {
    return `
      <div class="appointed-readings-section">
        <div class="readings-header">
          <span class="readings-title">
            <span class="desktop-only">Appointed Scripture Lessons</span>
            <span class="mobile-only">Today's Appointed Readings</span>
          </span>
        </div>
        <div class="scripture-loading" style="height:120px;">
          <div class="spinner"></div>
          <span>Parsing readings from podcast description...</span>
        </div>
      </div>
    `;
  }

  const activeTab = AppState.activeReadingTab;
  
  return `
    <div class="appointed-readings-section">
      <div class="readings-header">
        <span class="readings-title">
          <span class="desktop-only">Today's Appointed Scripture (${AppState.bibleVersion})</span>
          <span class="mobile-only">Today's Appointed Readings</span>
        </span>
        <div class="readings-nav-tabs">
          ${readings.ot ? `<button class="reading-tab-btn ${activeTab === 'ot' ? 'active' : ''}" data-readtab="ot"><span class="desktop-only">Old Testament</span><span class="mobile-only">OT</span></button>` : ''}
          ${readings.psalms ? `<button class="reading-tab-btn ${activeTab === 'psalms' ? 'active' : ''}" data-readtab="psalms">Psalms</button>` : ''}
          ${readings.nt ? `<button class="reading-tab-btn ${activeTab === 'nt' ? 'active' : ''}" data-readtab="nt"><span class="desktop-only">Epistle</span><span class="mobile-only">NT</span></button>` : ''}
          ${readings.gospel ? `<button class="reading-tab-btn ${activeTab === 'gospel' ? 'active' : ''}" data-readtab="gospel">Gospel</button>` : ''}
        </div>
      </div>
      
      <div class="reading-content-box" id="liturgy-reading-box">
        <!-- Text gets injected here by loadActiveReadingText() -->
      </div>
    </div>
  `;
}

// Binds event listeners to the tabs within the liturgy reading block
function bindLiturgyReadingTabs() {
  document.querySelectorAll('.reading-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-readtab');
      AppState.activeReadingTab = tab;
      
      // Update tab active state in DOM
      document.querySelectorAll('.reading-tab-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-readtab') === tab);
      });
      
      loadActiveReadingText();
    });
  });

  // Perform initial load of scripture text for the active tab
  loadActiveReadingText();
}

let cachedPsalter = null;

async function getBcpPsalter() {
  if (cachedPsalter) return cachedPsalter;
  try {
    const response = await fetch('./psalter.json');
    if (!response.ok) throw new Error("HTTP " + response.status);
    cachedPsalter = await response.json();
    return cachedPsalter;
  } catch(e) {
    console.error("Failed to load local psalter.json, falling back to empty", e);
    return {};
  }
}

/* BEGIN DOL_LOADERS */
let cachedDolYearOne = null;
async function getDolYearOne() {
  if (typeof DolYearOne !== 'undefined') return DolYearOne;
  if (cachedDolYearOne) return cachedDolYearOne;
  try {
    const response = await fetch('./dol-year-1.json');
    if (!response.ok) throw new Error("HTTP " + response.status);
    cachedDolYearOne = await response.json();
    return cachedDolYearOne;
  } catch(e) {
    console.error("Failed to load dol-year-1.json", e);
    return [];
  }
}

let cachedDolYearTwo = null;
async function getDolYearTwo() {
  if (typeof DolYearTwo !== 'undefined') return DolYearTwo;
  if (cachedDolYearTwo) return cachedDolYearTwo;
  try {
    const response = await fetch('./dol-year-2.json');
    if (!response.ok) throw new Error("HTTP " + response.status);
    cachedDolYearTwo = await response.json();
    return cachedDolYearTwo;
  } catch(e) {
    console.error("Failed to load dol-year-2.json", e);
    return [];
  }
}

let cachedDolHolyDays = null;
async function getDolHolyDays() {
  if (typeof DolHolyDays !== 'undefined') return DolHolyDays;
  if (cachedDolHolyDays) return cachedDolHolyDays;
  try {
    const response = await fetch('./dol-holy-days.json');
    if (!response.ok) throw new Error("HTTP " + response.status);
    cachedDolHolyDays = await response.json();
    return cachedDolHolyDays;
  } catch(e) {
    console.error("Failed to load dol-holy-days.json", e);
    return [];
  }
}
/* END DOL_LOADERS */

function getLectionaryKey(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay();
  const daysOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeekNames[dayOfWeek];

  const dateMidnight = new Date(year, month, dayOfMonth);
  const time = dateMidnight.getTime();

  // Reference dates for current calendar year
  const easter = getEasterDate(year);
  const ashWednesday = new Date(easter.getTime() - 46 * 24 * 60 * 60 * 1000);
  const pentecost = new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000);
  const trinitySunday = new Date(easter.getTime() + 56 * 24 * 60 * 60 * 1000);
  const advent = getAdventSunday(year);

  // 1. Determine Lectionary Year Cycle
  // Year One starts 1st Advent preceding odd-numbered years.
  // Year Two starts 1st Advent preceding even-numbered years.
  let targetCycleYear = year;
  if (time >= advent.getTime()) {
    targetCycleYear = year + 1;
  }
  const isYearOne = (targetCycleYear % 2 === 1);
  const cycleName = isYearOne ? 'Year One' : 'Year Two';

  // 2. Check for Holy Days (Dec 26, 27, 28)
  const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateMMDD = `${monthNamesShort[month]} ${dayOfMonth}`;
  
  if (month === 11 && (dayOfMonth === 26 || dayOfMonth === 27 || dayOfMonth === 28)) {
    return { cycle: cycleName, season: 'Holy Day', week: undefined, day: dateMMDD, isHolyDay: true };
  }

  // 3. Liturgical Season & Week Calculations
  
  // A. Christmas season spillover from previous year (Jan 1 to Jan 5)
  const prevYearChristmas = new Date(year - 1, 11, 25);
  const prevYearEpiphanyEve = new Date(year, 0, 5);
  const isSpilloverChristmas = (time >= new Date(year, 0, 1).getTime() && time <= prevYearEpiphanyEve.getTime());
  
  if ((month === 11 && dayOfMonth >= 25) || isSpilloverChristmas) {
    const season = 'Christmas';
    const week = 'Christmas Day and Following';
    if (dayOfWeek === 0) {
      const title = dayOfMonth <= 1 || month === 11 ? 'The First Sunday after Christmas' : 'The Second Sunday after Christmas';
      return { cycle: cycleName, season, week, day: 'Sunday', title };
    } else {
      return { cycle: cycleName, season, week, day: dateMMDD };
    }
  }

  // B. Advent (from Advent Sunday to Dec 24)
  if (time >= advent.getTime() && time < new Date(year, 11, 25).getTime()) {
    const season = 'Advent';
    if (month === 11 && dayOfMonth === 24) {
      return { cycle: cycleName, season, week: 'Week of 4 Advent', day: 'Dec 24' };
    }
    const diffDays = Math.floor((time - advent.getTime()) / (24 * 60 * 60 * 1000));
    const weekNum = Math.floor(diffDays / 7) + 1;
    return { cycle: cycleName, season, week: `Week of ${weekNum} Advent`, day: dayName };
  }

  // C. Epiphany (Jan 6 to Ash Wednesday eve)
  if (time >= new Date(year, 0, 6).getTime() && time < ashWednesday.getTime()) {
    const season = 'Epiphany';
    if (month === 0 && dayOfMonth === 6) {
      return { cycle: cycleName, season, week: 'The Epiphany and Following', day: 'Jan 6' };
    }
    
    // Find Baptism Sunday (first Sunday after Jan 6)
    let baptismSunday = new Date(year, 0, 7);
    while (baptismSunday.getDay() !== 0) {
      baptismSunday.setDate(baptismSunday.getDate() + 1);
    }
    
    if (time < baptismSunday.getTime()) {
      return { cycle: cycleName, season, week: 'The Epiphany and Following', day: dateMMDD };
    }
    
    const S = new Date(time);
    S.setDate(S.getDate() - dayOfWeek);
    
    const lastEpiphanySunday = new Date(ashWednesday.getTime() - 3 * 24 * 60 * 60 * 1000);
    if (S.getTime() === lastEpiphanySunday.getTime()) {
      return { cycle: cycleName, season, week: 'Week of Last Epiphany', day: dayName };
    } else {
      const diffWeeks = Math.floor((S.getTime() - baptismSunday.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
      return { cycle: cycleName, season, week: `Week of ${diffWeeks} Epiphany`, day: dayName };
    }
  }

  // D. Lent (Ash Wednesday to Holy Saturday)
  if (time >= ashWednesday.getTime() && time < easter.getTime()) {
    const season = 'Lent';
    const lent1Sunday = new Date(ashWednesday.getTime() + 4 * 24 * 60 * 60 * 1000);
    if (time < lent1Sunday.getTime()) {
      return { cycle: cycleName, season, week: 'Ash Wednesday and Following', day: dayName };
    }
    
    const S = new Date(time);
    S.setDate(S.getDate() - dayOfWeek);
    
    const diffWeeks = Math.floor((S.getTime() - lent1Sunday.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
    if (diffWeeks <= 5) {
      return { cycle: cycleName, season, week: `Week of ${diffWeeks} Lent`, day: dayName };
    } else {
      return { cycle: cycleName, season, week: 'Holy Week', day: dayName };
    }
  }

  // E. Easter Season (Easter Sunday to Pentecost Sunday)
  if (time >= easter.getTime() && time <= pentecost.getTime()) {
    const season = 'Easter';
    if (time === pentecost.getTime()) {
      return { cycle: cycleName, season, week: 'Pentecost', day: 'Sunday' };
    }
    
    const S = new Date(time);
    S.setDate(S.getDate() - dayOfWeek);
    
    const diffWeeks = Math.floor((S.getTime() - easter.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
    if (diffWeeks === 1) {
      return { cycle: cycleName, season, week: 'Easter Week', day: dayName };
    } else {
      return { cycle: cycleName, season, week: `Week of ${diffWeeks} Easter`, day: dayName };
    }
  }

  // F. Season after Pentecost (Ordinary Time)
  if (time > pentecost.getTime() && time < advent.getTime()) {
    const season = 'The Season after Pentecost';
    const eveOfTrinity = new Date(trinitySunday.getTime() - 24 * 60 * 60 * 1000);
    
    if (time === eveOfTrinity.getTime()) {
      return { cycle: cycleName, season, week: undefined, day: 'Saturday' };
    }
    if (time === trinitySunday.getTime()) {
      return { cycle: cycleName, season, week: undefined, day: 'Sunday' };
    }
    
    const S = new Date(time);
    S.setDate(S.getDate() - dayOfWeek);
    
    const may8 = new Date(date.getFullYear(), 4, 8);
    const diffDays = Math.floor((S.getTime() - may8.getTime()) / (24 * 60 * 60 * 1000));
    const properNum = Math.floor(diffDays / 7) + 1;
    
    return { cycle: cycleName, season, week: `Proper ${properNum}`, day: dayName };
  }

  return { cycle: cycleName, season: 'Unknown', week: undefined, day: dayName };
}

function getLectionaryReadings(date, office, dolYear1, dolYear2, dolHolyDays) {
  const key = getLectionaryKey(date);
  if (!key) return null;

  let entry = null;
  if (key.isHolyDay) {
    entry = dolHolyDays.find(item => item.day === key.day);
  } else {
    const db = (key.cycle === 'Year One') ? dolYear1 : dolYear2;
    entry = db.find(item => {
      const seasonMatch = item.season === key.season;
      const weekMatch = item.week === key.week;
      const dayMatch = item.day === key.day;
      const titleMatch = key.title ? item.title === key.title : true;
      return seasonMatch && weekMatch && dayMatch && titleMatch;
    });
  }

  if (!entry) return null;

  let psalmsStr = '';
  if (entry.psalms) {
    const psArr = entry.psalms[office] || entry.psalms.morning || entry.psalms.evening;
    if (Array.isArray(psArr)) {
      psalmsStr = psArr.join(', ');
    } else if (typeof psArr === 'string') {
      psalmsStr = psArr;
    }
  }

  let ot = '';
  let nt = '';
  let gospel = '';

  const lessons = entry.lessons || {};
  const officeLessons = lessons[office];

  if (officeLessons) {
    ot = officeLessons.first || '';
    nt = officeLessons.second || '';
    gospel = officeLessons.gospel || '';
  } else {
    ot = lessons.first || '';
    nt = lessons.second || '';
    gospel = lessons.gospel || '';
  }

  return {
    ot,
    psalms: psalmsStr,
    nt,
    gospel,
    season: key.season,
    week: key.week,
    day: key.day,
    cycle: key.cycle
  };
}

function parsePsalms(passageStr) {
  let clean = passageStr.replace(/&/g, ',');
  let parts = clean.split(/[;,]/);
  let results = [];
  let currentPsalm = null;
  
  for (let part of parts) {
    part = part.trim();
    if (!part) continue;
    
    let isExplicitPsalm = /psalms?/i.test(part);
    let cleanPart = part.replace(/psalms?/gi, '').trim();
    
    if (cleanPart.includes(':')) {
      let [psStr, rangeStr] = cleanPart.split(':');
      let pNum = parseInt(psStr.trim(), 10);
      if (isNaN(pNum)) continue;
      currentPsalm = { psalm: pNum, ranges: [] };
      results.push(currentPsalm);
      parseAndAddRange(currentPsalm, rangeStr);
    } else {
      if (cleanPart.includes('-')) {
        if (currentPsalm && !isExplicitPsalm) {
          parseAndAddRange(currentPsalm, cleanPart);
        } else {
          let [start, end] = cleanPart.split('-').map(s => parseInt(s.trim(), 10));
          if (!isNaN(start) && !isNaN(end)) {
            for (let p = start; p <= end; p++) {
              results.push({ psalm: p, ranges: null });
            }
          }
        }
      } else {
        let val = parseInt(cleanPart, 10);
        if (isNaN(val)) continue;
        
        if (isExplicitPsalm || !currentPsalm || !currentPsalm.ranges) {
          currentPsalm = { psalm: val, ranges: null };
          results.push(currentPsalm);
        } else {
          currentPsalm.ranges.push({ start: val, end: val });
        }
      }
    }
  }
  return results;
}

function parseAndAddRange(psalmObj, rangeStr) {
  if (!psalmObj.ranges) psalmObj.ranges = [];
  if (rangeStr.includes('-')) {
    let [start, end] = rangeStr.split('-').map(s => parseInt(s.trim(), 10));
    if (!isNaN(start) && !isNaN(end)) {
      psalmObj.ranges.push({ start, end });
    }
  } else {
    let v = parseInt(rangeStr.trim(), 10);
    if (!isNaN(v)) {
      psalmObj.ranges.push({ start: v, end: v });
    }
  }
}

function getFilteredPsalmHtml(psalter, pNum, ranges) {
  const psalm = psalter[pNum];
  if (!psalm) return `<div class="scripture-error">Psalm ${pNum} not found in database.</div>`;
  
  let html = `<h2 class="passageref">Psalm ${pNum}</h2>`;
  if (psalm.title) {
    html += `<p class="rubric" style="text-align:center; margin-top:-0.5rem; margin-bottom:1.5rem;">${psalm.title}</p>`;
  }
  
  const lines = psalm.text.split('\n');
  let verses = [];
  let currentVerse = null;
  
  lines.forEach(line => {
    let m = line.match(/^(\d+)\s*(.*)/);
    if (m) {
      if (currentVerse) verses.push(currentVerse);
      currentVerse = { num: parseInt(m[1], 10), text: m[2], lines: [] };
    } else {
      if (currentVerse) {
        currentVerse.lines.push(line.trim());
      }
    }
  });
  if (currentVerse) verses.push(currentVerse);
  
  let filtered = verses;
  if (ranges && ranges.length > 0) {
    filtered = verses.filter(v => {
      return ranges.some(r => v.num >= r.start && v.num <= r.end);
    });
  }
  
  let firstVerse = true;
  filtered.forEach(v => {
    let verseText = v.text;
    if (AppState.activeTypography === 'serif' && firstVerse) {
      const m = verseText.match(/^([A-Za-z])/);
      if (m) {
        verseText = `<span class="liturgical-drop-cap">${m[1]}</span>${verseText.substring(1)}`;
      }
      firstVerse = false;
    }
    html += `<p class="verse-para"><sup class="vnumVis">${v.num}</sup> ${verseText}</p>`;
    v.lines.forEach(l => {
      html += `<p class="verse-para" style="padding-left:1.5rem">${l}</p>`;
    });
  });
  
  return html;
}

// Fetch and load scripture text into the scripture container inside liturgy
async function loadActiveReadingText() {
  const container = document.getElementById('liturgy-reading-box');
  if (!container) return;

  const readings = AppState.currentAppointedReadings;
  if (!readings) return;

  const tab = AppState.activeReadingTab;
  const passage = readings[tab];

  if (!passage) {
    container.innerHTML = `<div class="scripture-error">No passage appointed for this section.</div>`;
    return;
  }

  container.innerHTML = `
    <div class="scripture-loading">
      <div class="spinner"></div>
      <span>Loading ${passage}...</span>
    </div>
  `;

  // Offline BCP Psalter handling
  if (tab === 'psalms') {
    try {
      const parsed = parsePsalms(passage);
      if (parsed.length > 0) {
        const psalter = await getBcpPsalter();
        let htmlOut = '<div class="bibletext">';
        parsed.forEach(p => {
          htmlOut += getFilteredPsalmHtml(psalter, p.psalm, p.ranges);
        });
        
        // Gloria Patri
        let gloriaText = "";
        if (AppState.activeRite === 'rite1') {
          gloriaText = `<h4 class="prayer-title" style="margin-top:2rem;">Gloria Patri</h4>
<div class="indented-text" style="font-style:italic;margin-top:.5rem;">
Glory be to the Father, and to the Son, and to the Holy Ghost: *<br/>
&nbsp;&nbsp;as it was in the beginning, is now, and ever shall be,<br/>
&nbsp;&nbsp;world without end. Amen.
</div>`;
        } else {
          gloriaText = `<h4 class="prayer-title" style="margin-top:2rem;">Gloria Patri</h4>
<div class="indented-text" style="font-style:italic;margin-top:.5rem;">
Glory to the Father, and to the Son, and to the Holy Spirit: *<br/>
&nbsp;&nbsp;as it was in the beginning, is now, and will be for ever. Amen.
</div>`;
        }
        htmlOut += gloriaText;
        htmlOut += '</div>';
        
        container.innerHTML = `
          <h3 class="appointed-passage-heading" style="font-family: var(--font-heading); color: var(--accent-color); margin-top: 0; margin-bottom: 1.25rem; font-size: 1.4rem; font-weight: 600; text-align: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
            ${passage}
          </h3>
          ${htmlOut}
          <span class="scripture-source-credit" style="display: block; margin-top: 1.25rem; font-size: 0.8rem; opacity: 0.7; font-style: italic; text-align: right;">Source: BCP 1979 Psalter (Offline)</span>
        `;
        return;
      }
    } catch(err) {
      console.warn("Failed to render local BCP psalter, falling back to fetch", err);
    }
  }

  try {
    const data = await fetchScripture(passage, AppState.bibleVersion);
    let contentHtml = applyIlluminatedDropCap(data.textHtml);
    if (tab === 'ot' || tab === 'nt' || tab === 'gospel') {
      contentHtml += getReadingResponseHtml(passage, AppState.activeRite);
    }
    container.innerHTML = `
      <h3 class="appointed-passage-heading" style="font-family: var(--font-heading); color: var(--accent-color); margin-top: 0; margin-bottom: 1.25rem; font-size: 1.4rem; font-weight: 600; text-align: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
        ${passage}
      </h3>
      <div class="bibletext">
        ${contentHtml}
      </div>
      <span class="scripture-source-credit" style="display: block; margin-top: 1.25rem; font-size: 0.8rem; opacity: 0.7; font-style: italic; text-align: right;">Source: ${data.source}</span>
    `;
  } catch (error) {
    container.innerHTML = `
      <div class="offline-scripture-card">
        <h4>Reading Offline Fallback</h4>
        <p>We encountered a connection issue while fetching scripture from the web. You can read the appointed passage in your own Bible:</p>
        <span class="offline-citation-badge">${passage}</span>
        <div>
          <button class="offline-bible-btn" id="btn-retry-reading">✕ Retry Connection</button>
        </div>
      </div>
    `;
    
    document.getElementById('btn-retry-reading')?.addEventListener('click', () => {
      loadActiveReadingText();
    });
  }
}

async function updateReadingsForCurrentDate() {
  // Reset collect and overrides
  AppState.feastCollect = null;
  AppState.liturgicalOverrideName = null;
  AppState.activeCommemoration = null;
  
  const month = String(AppState.currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(AppState.currentDate.getDate()).padStart(2, '0');
  const mmDd = `${month}-${day}`;
  const feast = FeastCalendar[mmDd];
  
  // Check for a transferred feast from yesterday if today has no appointed feast
  let transferredFeast = null;
  let yesterdayName = '';
  if (!feast) {
    const yesterday = new Date(AppState.currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    const yMonth = String(yesterday.getMonth() + 1).padStart(2, '0');
    const yDay = String(yesterday.getDate()).padStart(2, '0');
    const yMmDd = `${yMonth}-${yDay}`;
    const yesterdayFeast = FeastCalendar[yMmDd];
    
    // Transferred if yesterdayFeast exists and yesterday was a Sunday
    if (yesterdayFeast && yesterday.getDay() === 0) {
      transferredFeast = yesterdayFeast;
      const yesterdayOptions = { weekday: 'long', month: 'long', day: 'numeric' };
      yesterdayName = yesterday.toLocaleDateString('en-US', yesterdayOptions);
    }
  }
  
  let readings = null;
  let sourceName = '';
  
  // Resolve liturgical day info to see if Sunday or movable major feast takes precedence
  const seasonObj = getLiturgicalSeason(AppState.currentDate);
  const isSunday = AppState.currentDate.getDay() === 0;
  const isPrincipalOrSundayPrecedence = isSunday && (
    seasonObj.key === 'advent' || 
    seasonObj.key === 'lent' || 
    seasonObj.key === 'easter' || 
    seasonObj.key === 'pentecost' || 
    seasonObj.key === 'trinity'
  );
  
  // 1. Check BCP Major Feast
  if (AppState.useFeast && feast && feast.type === 'major' && !isPrincipalOrSundayPrecedence) {
    const office = AppState.activeOffice;
    const feastReadings = feast.readings[office] || feast.readings.morning || feast.readings.evening || feast.readings;
    readings = {
      ot: feastReadings.ot,
      psalms: feastReadings.psalms,
      nt: feastReadings.nt,
      gospel: feastReadings.gospel
    };
    AppState.feastCollect = feast.collect;
    AppState.liturgicalOverrideName = feast.name;
    AppState.activeCommemoration = feast;
    sourceName = `Feast of ${feast.name}`;
  }
  // 2. Check LFF Minor Feast
  else if (AppState.useLff && feast && feast.type === 'minor' && !isPrincipalOrSundayPrecedence) {
    const feastReadings = feast.readings;
    readings = {
      ot: feastReadings.ot,
      psalms: feastReadings.psalms,
      nt: feastReadings.nt,
      gospel: feastReadings.gospel
    };
    AppState.feastCollect = feast.collect;
    AppState.liturgicalOverrideName = feast.name;
    AppState.activeCommemoration = feast;
    sourceName = `LFF: ${feast.name}`;
  }
  // 3. Check Sunday RCL
  else if (AppState.useRcl && AppState.currentDate.getDay() === 0) {
    sourceName = 'Sunday RCL';
    // Show placeholder in UI while fetching
    AppState.currentAppointedReadings = { ot: '...', psalms: '...', nt: '...', gospel: '...' };
    renderLiturgyFlow();
    
    const rcl = await fetchRclReadings(AppState.currentDate);
    if (rcl) {
      readings = rcl;
    }
  }
  
  if (readings) {
    AppState.todayReadings.morning = readings;
    AppState.todayReadings.evening = readings;
    AppState.currentAppointedReadings = readings;
    
    // Set custom label in subbar
    const dayLabel = document.getElementById('liturgical-day-label');
    if (dayLabel) {
      dayLabel.textContent = `${getLiturgicalDayLabel(AppState.currentDate)} (${sourceName})`;
    }
    
    // Update Saint Biography Panel
    if (AppState.activeCommemoration) {
      updateSaintBiographySidebar(AppState.activeCommemoration);
    } else if (feast) {
      updateSaintBiographySidebar(feast, true);
    } else if (transferredFeast) {
      updateSaintBiographySidebar(transferredFeast, false, true, yesterdayName);
    } else {
      updateSaintBiographySidebar(null);
    }
    
    // Render Liturgy
    renderLiturgyFlow();
  } else {
    // Hide Saint Biography Sidebar (but show if an LFF feast is appointed for today or if there is a transferred feast)
    if (feast) {
      updateSaintBiographySidebar(feast, isPrincipalOrSundayPrecedence);
    } else if (transferredFeast) {
      updateSaintBiographySidebar(transferredFeast, false, true, yesterdayName);
    } else {
      updateSaintBiographySidebar(null);
    }
    
    // Resolve BCP lectionary databases
    const dolYear1 = await getDolYearOne();
    const dolYear2 = await getDolYearTwo();
    const dolHolyDays = await getDolHolyDays();
    
    const morningReadings = getLectionaryReadings(AppState.currentDate, 'morning', dolYear1, dolYear2, dolHolyDays);
    const eveningReadings = getLectionaryReadings(AppState.currentDate, 'evening', dolYear1, dolYear2, dolHolyDays);
    
    AppState.todayReadings.morning = morningReadings;
    AppState.todayReadings.evening = eveningReadings;
    
    syncCurrentOfficeAppointedReadings();
    
    // Set custom label in subbar
    const dayLabel = document.getElementById('liturgical-day-label');
    if (dayLabel) {
      if (morningReadings) {
        const weekStr = morningReadings.week ? ` - ${morningReadings.week}` : '';
        dayLabel.textContent = `${morningReadings.cycle} - ${morningReadings.season}${weekStr} - ${morningReadings.day} (Daily Office)`;
      } else {
        dayLabel.textContent = `${getLiturgicalDayLabel(AppState.currentDate)} (Daily Office)`;
      }
    }
  }
  
  // Re-apply theme classes since activeCommemoration may have changed
  applyThemeAndSettings();
}

function updateAppForDate(date) {
  AppState.currentDate = date;
  
  // Automatically prioritize feasts if the new date is a BCP Major Feast
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const mmDd = `${month}-${day}`;
  const feast = FeastCalendar[mmDd];
  
  // Resolve liturgical day info to see if Sunday or movable major feast takes precedence
  const seasonObj = getLiturgicalSeason(date);
  const isSunday = date.getDay() === 0;
  
  // BCP Rules: Sundays of Advent, Lent, Easter Season, and Principal Feasts (Pentecost, Trinity) take absolute precedence
  const isPrincipalOrSundayPrecedence = isSunday && (
    seasonObj.key === 'advent' || 
    seasonObj.key === 'lent' || 
    seasonObj.key === 'easter' || 
    seasonObj.key === 'pentecost' || 
    seasonObj.key === 'trinity'
  );
  
  if (feast && feast.type === 'major' && !isPrincipalOrSundayPrecedence) {
    AppState.useFeast = true;
    AppState.useLff = false;
  } else {
    AppState.useFeast = false;
    AppState.useLff = false;
  }
  
  // Automatically prioritize RCL on Sundays, disable on weekdays
  if (isSunday) {
    AppState.useRcl = true;
  } else {
    AppState.useRcl = false;
  }
  
  const dateDisplay = document.getElementById('current-date-display');
  if (dateDisplay) {
    dateDisplay.textContent = formatDateDisplay(AppState.currentDate);
  }
  
  const dayLabel = document.getElementById('liturgical-day-label');
  if (dayLabel) {
    dayLabel.textContent = getLiturgicalDayLabel(AppState.currentDate);
  }
  
  const picker = document.getElementById('calendar-picker');
  if (picker) {
    const year = AppState.currentDate.getFullYear();
    const month = String(AppState.currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(AppState.currentDate.getDate()).padStart(2, '0');
    picker.value = `${year}-${month}-${day}`;
  }
  
  applyThemeAndSettings();
  updateReadingsForCurrentDate();
  renderEpisodesList();
}

// ==========================================
// PODCAST UI SYNC ENGINE
// ==========================================
async function preloadPodcastFeeds() {
  AppState.isPreloading = true;
  
  const listContainer = document.getElementById('episode-list-container');
  if (listContainer) {
    listContainer.innerHTML = `
      <div class="scripture-loading">
        <div class="spinner"></div>
        <span>Loading podcast feed...</span>
      </div>
    `;
  }

  try {
    console.log("Preloading podcast feeds in background...");
    const [morningRes, eveningRes] = await Promise.allSettled([
      fetchPodcastEpisodes('morning'),
      fetchPodcastEpisodes('evening')
    ]);
    
    if (morningRes.status === 'fulfilled') {
      AppState.episodes.morning = morningRes.value;
      console.log("Morning podcast preloaded successfully.");
    } else {
      console.warn("Failed to preload morning podcast:", morningRes.reason);
    }
    
    if (eveningRes.status === 'fulfilled') {
      AppState.episodes.evening = eveningRes.value;
      console.log("Evening podcast preloaded successfully.");
    } else {
      console.warn("Failed to preload evening podcast:", eveningRes.reason);
    }
    
    AppState.isPreloading = false;
    
    // Once preloaded, update readings and re-render
    await updateReadingsForCurrentDate();
    
    if (listContainer) {
      renderEpisodesList();
    }
  } catch (error) {
    AppState.isPreloading = false;
    console.error("Error preloading podcasts:", error);
    if (listContainer) {
      listContainer.innerHTML = `
        <div class="scripture-error">
          <span>Could not load podcast feed.</span>
          <button class="btn-primary" style="margin-top:0.5rem;" id="btn-retry-podcast">Retry</button>
        </div>
      `;
      document.getElementById('btn-retry-podcast')?.addEventListener('click', loadPodcastSection);
    }
  }
}

async function loadPodcastSection() {
  const listContainer = document.getElementById('episode-list-container');
  if (!listContainer) return;

  const show = AppState.activeShow;
  
  if (AppState.episodes[show].length > 0) {
    renderEpisodesList();
    return;
  }

  if (AppState.isPreloading) {
    listContainer.innerHTML = `
      <div class="scripture-loading">
        <div class="spinner"></div>
        <span>Loading podcast feed...</span>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = `
    <div class="scripture-loading">
      <div class="spinner"></div>
      <span>Loading podcast feed...</span>
    </div>
  `;

  try {
    AppState.episodes[show] = await fetchPodcastEpisodes(show);
    updateReadingsForCurrentDate();
    renderEpisodesList();
  } catch (error) {
    console.error("Podcast load failed", error);
    listContainer.innerHTML = `
      <div class="scripture-error">
        <span>Could not load podcast feed.</span>
        <button class="btn-primary" style="margin-top:0.5rem;" id="btn-retry-podcast">Retry</button>
      </div>
    `;
    document.getElementById('btn-retry-podcast')?.addEventListener('click', loadPodcastSection);
  }
}

function syncCurrentOfficeAppointedReadings() {
  // Morning Prayer gets Morning readings, Evening Prayer gets Evening readings
  if (AppState.activeOffice === 'morning') {
    AppState.currentAppointedReadings = AppState.todayReadings.morning;
    AppState.activeReadingTab = 'ot';
  } else if (AppState.activeOffice === 'evening') {
    AppState.currentAppointedReadings = AppState.todayReadings.evening;
    AppState.activeReadingTab = 'ot';
  } else {
    AppState.currentAppointedReadings = null;
  }
  
  // Re-render liturgy content
  renderLiturgyFlow();
}


// ==========================================
// LITURGICAL COLLECT HELPERS
// ==========================================
const BCP_SUNDAY_COLLECTS = {
  "Advent 1": "Almighty God, give us grace to cast away the works of darkness, and put on the armor of light, now in the time of this mortal life in which your Son Jesus Christ came to visit us in great humility; that in the last day, when he shall come again in his glorious majesty to judge both the living and the dead, we may rise to the life immortal; through him who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Advent 2": "Merciful God, who sent your messengers the prophets to preach repentance and prepare the way for our salvation: Give us grace to heed their warnings and forsake our sins, that we may greet with joy the coming of Jesus Christ our Redeemer; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Advent 3": "Stir up your power, O Lord, and with great might come among us; and, because we are sorely hindered by our sins, let your bountiful grace and mercy speedily help and deliver us; through Jesus Christ our Lord, to whom, with you and the Holy Spirit, be honor and glory, now and for ever. Amen.",
  "Advent 4": "Purify our conscience, Almighty God, by your daily visitation, that your Son Jesus Christ, at his coming, may find in us a mansion prepared for himself; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Christmas 1": "Almighty God, you have poured upon us the new light of your incarnate Word: Grant that this light, enkindled in our hearts, may shine forth in our lives; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.",
  "Christmas 2": "O God, who wonderfully created, and yet more wonderfully restored, the dignity of human nature: Grant that we may share the divine life of him who humbled himself to share our humanity, your Son Jesus Christ; who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.",
  "Epiphany 1": "Father in heaven, who at the baptism of Jesus in the River Jordan proclaimed him your beloved Son and anointed him with the Holy Spirit: Grant that all who are baptized into his Name may keep the covenant they have made, and boldly confess him as Lord and Savior; who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.",
  "Epiphany 2": "Almighty and everlasting God, who governs all things both in heaven and on earth: Mercifully hear the supplications of your people, and in our time grant us your peace; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Epiphany 3": "Give us grace, O Lord, to answer readily the call of our Savior Jesus Christ and proclaim to all people the Good News of his salvation, that we and the whole world may perceive the glory of his marvelous works; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Epiphany 4": "Almighty and everlasting God, you know that we are set in the midst of so many and great dangers, that by reason of the frailty of our nature we cannot always stand upright: Grant to us such strength and protection as may support us in all dangers and carry us through all temptations; through Jesus Christ our Lord. Amen.",
  "Epiphany 5": "Set us free, O God, from the bondage of our sins, and give us the liberty of that abundant life which you have made known to us in your Son our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Epiphany 6": "O God, the strength of all who put their trust in you: Mercifully accept our prayers; and because in our weakness we can do nothing good without you, give us the help of your grace, that in keeping your commandments we may please you both in will and deed; through Jesus Christ our Lord. Amen.",
  "Epiphany 7": "O Lord, you have taught us that without love whatever we do is worth nothing: Send your Holy Spirit and pour into our hearts your greatest gift, which is love, the true bond of peace and of all virtue, without which whoever lives is accounted dead before you. Grant this for the sake of your only Son Jesus Christ our Lord. Amen.",
  "Epiphany 8": "Most loving Father, whose will it is that both wheat and tares should grow together until the harvest: Give us grace to serve you with patience and trust, leaving the judgment to you; through Jesus Christ our Lord. Amen.",
  "Epiphany Last": "O God, who before the passion of your only-begotten Son revealed his glory upon the holy mountain: Grant to us that we, beholding by faith the light of his countenance, may be strengthened to bear our cross, and be changed into his likeness from glory to glory; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Lent 1": "Almighty God, whose blessed Son was led by the Spirit to be tempted by Satan: Come quickly to help us who are assaulted by many temptations; and, as you know the weaknesses of each of us, let each one find you mighty to save; through Jesus Christ your Son our Lord. Amen.",
  "Lent 2": "O God, whose glory it is always to have mercy: Be gracious to all who have gone astray from your ways, and bring them again with penitent hearts and steadfast faith to embrace and hold fast the unchangeable truth of your Word, Jesus Christ your Son; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Lent 3": "Heavenly Father, you have made us for yourself, and our hearts are restless until they find their rest in you: Show us your mercy, that we may be freed from our sins and find in you our peace and joy; through Jesus Christ our Lord. Amen.",
  "Lent 4": "Gracious Father, whose blessed Son Jesus Christ came down from heaven to be the true bread which gives life to the world: Evermore give us this bread, that he may live in us, and we in him; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Lent 5": "Almighty God, you alone can bring into order the unruly wills and affections of sinners: Grant your people grace to love what you command and desire what you promise; that, among the swift and varied changes of the world, our hearts may surely there be fixed where true joys are to be found; through Jesus Christ our Lord. Amen.",
  "Palm Sunday": "Almighty and everliving God, in your tender love for the human race you sent your Son our Savior Jesus Christ to take upon him our nature, and to suffer death upon the cross, giving us the example of his great humility: Mercifully grant that we may walk in the way of his suffering, and also share in his resurrection; through Jesus Christ our Lord. Amen.",
  "Easter 1": "O God, who for our redemption gave your only-begotten Son to the death of the cross, and by his glorious resurrection delivered us from the power of our enemy: Grant us so to die daily to sin, that we may evermore live with him in the joy of his resurrection; through Jesus Christ our Lord. Amen.",
  "Easter 2": "Almighty and eternal God, who in the Paschal mystery established the new covenant of reconciliation: Grant that all who have been reborn into the fellowship of Christ's Body may show forth in their lives what they profess by their faith; through Jesus Christ our Lord. Amen.",
  "Easter 3": "O God, whose blessed Son made himself known to his disciples in the breaking of bread: Open the eyes of our faith, that we may behold him in all his redeeming work; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Easter 4": "O God, whose Son Jesus is the good shepherd of your people: Grant that when we hear his voice we may know him who calls us each by name, and follow where he leads; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Easter 5": "Almighty God, whom truly to know is everlasting life: Grant us so perfectly to know your Son Jesus Christ to be the way, the truth, and the life, that we may steadfastly follow his steps in the way that leads to eternal life; through Jesus Christ your Son our Lord. Amen.",
  "Easter 6": "O God, you have prepared for those who love you such good things as surpass our understanding: Pour into our hearts such love towards you, that we, loving you in all things and above all things, may obtain your promises, which exceed all that we can desire; through Jesus Christ our Lord. Amen.",
  "Easter 7": "O God, the King of glory, you have exalted your only Son Jesus Christ with great triumph to your kingdom in heaven: Do not leave us comfortless, but send us your Holy Spirit to strengthen us, and exalt us to that place where our Savior Christ has gone before; who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.",
  "Pentecost": "O God, who on this day taught the hearts of your faithful people by sending to them the light of your Holy Spirit: Grant us by the same Spirit to have a right judgment in all things, and evermore to rejoice in his holy comfort; through Jesus Christ your Son our Lord, who lives and reigns with you, in the unity of the same Spirit, one God, for ever and ever. Amen.",
  "Trinity": "Almighty and everlasting God, you have given to us your servants grace, by the confession of a true faith, to acknowledge the glory of the eternal Trinity, and in the power of your divine Majesty to worship the Unity: Keep us steadfast in this faith and worship, and bring us at last to see you in your one and eternal glory, O Father; who with the Son and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.",
  "Proper 1": "Almighty and everlasting God, whose will it is to restore all things in your well-beloved Son, the King of kings and Lord of lords: Mercifully grant that the peoples of the earth, divided and enslaved by sin, may be freed and brought together under his most gracious rule; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Proper 2": "O God, the strength of all who put their trust in you: Mercifully accept our prayers; and because in our weakness we can do nothing good without you, give us the help of your grace, that in keeping your commandments we may please you both in will and deed; through Jesus Christ our Lord. Amen.",
  "Proper 3": "Grant, O Lord, that the course of this world may be so peaceably ordered by your governance, that your Church may joyfully serve you in all godly quietness; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Proper 4": "O God, your never-failing providence sets in order all things both in heaven and earth: Put away from us, we entreat you, all hurtful things, and give us those things which are profitable for us; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Proper 5": "O God, from whom all good proceeds: Grant that by your inspiration we may think those things that are right, and by your merciful guiding may do them; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Proper 6": "Keep, O Lord, your household the Church in your steadfast faith and love, that by the help of your grace we may proclaim your truth with boldness, and minister your justice with compassion; for the sake of Jesus Christ our Savior, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.",
  "Proper 7": "O Lord, make us have a perpetual fear and love of your holy Name, for you never fail to help and govern those whom you have set upon the sure foundation of your loving-kindness; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Proper 8": "O Almighty God, who by your Son Jesus Christ did give to your Apostle Peter many excellent gifts, and commanded him earnestly to feed your flock: Make, we beseech you, all bishops and pastors diligently to preach your holy Word, and the people obediently to follow the same; through Jesus Christ our Lord. Amen.",
  "Proper 9": "O God, you have taught us that keeping all your commandments is summarized in love for you and our neighbor: Grant us the grace of your Holy Spirit to love you with our whole heart, and our neighbor as ourselves; through Jesus Christ our Lord. Amen.",
  "Proper 10": "O Lord, mercifully receive the prayers of your people who call upon you, and grant that they may know and understand what things they ought to do, and also may have grace and power faithfully to accomplish the same; through Jesus Christ our Lord. Amen.",
  "Proper 11": "Almighty God, the fountain of all wisdom, you know our necessities before we ask and our ignorance in asking: Have compassion on our weakness, and mercifully give us those things which for our unworthiness we dare not, and for our blindness we cannot ask; through the worthiness of your Son Jesus Christ our Lord. Amen.",
  "Proper 12": "O God, the protector of all who trust in you, without whom nothing is strong, nothing is holy: Increase and multiply upon us your mercy; that, with you as our ruler and guide, we may so pass through things temporal, that we lose not the things eternal; through Jesus Christ our Lord. Amen.",
  "Proper 13": "Let your merciful ears, O Lord, be open to the prayers of your humble servants; and, that they may obtain their petitions, make them to ask such things as shall please you; through Jesus Christ our Lord. Amen.",
  "Proper 14": "Grant to us, Lord, we pray, the spirit to think and do always such things as are right, that we, who cannot exist without you, may by you be enabled to live according to your will; through Jesus Christ our Lord. Amen.",
  "Proper 15": "Almighty God, you have given your only Son to be for us a sacrifice for sin, and also an example of godly life: Give us grace to receive thankfully that his inestimable benefit, and daily to endeavor ourselves to follow the blessed steps of his most holy life; through Jesus Christ our Lord. Amen.",
  "Proper 16": "Grant, O merciful God, that your Church, being gathered together in unity by your Holy Spirit, may show forth your power among all peoples, to the glory of your Name; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.",
  "Proper 17": "Lord of all power and might, the author and giver of all good things: Graft in our hearts the love of your Name, increase in us true religion, nourish us with all goodness, and bring forth in us the fruit of good works; through Jesus Christ our Lord. Amen.",
  "Proper 18": "Grant us, O Lord, to trust in you with all our hearts; for, as you always resist the proud who confide in their own strength, so you never forsake those who make their boast of your mercy; through Jesus Christ our Lord. Amen.",
  "Proper 19": "O God, because without you we are not able to please you, mercifully grant that your Holy Spirit may in all things direct and rule our hearts; through Jesus Christ our Lord. Amen.",
  "Proper 20": "Grant us, Lord, not to be anxious about earthly things, but to love things heavenly; and, even now while we are placed among things that are passing away, to hold fast to those that shall endure; through Jesus Christ our Lord. Amen.",
  "Proper 21": "O God, you declare your almighty power chiefly in showing mercy and pity: Mercifully grant to us such a measure of your grace, that we, running to obtain your promises, may be made partakers of your heavenly treasure; through Jesus Christ our Lord. Amen.",
  "Proper 22": "Almighty and everlasting God, you are always more ready to hear than we to pray, and to give more than we either desire or deserve: Pour down upon us the abundance of your mercy, forgiving us those things of which our conscience is afraid, and giving us those good things for which we are not worthy to ask, except through the merits and mediation of Jesus Christ our Savior. Amen.",
  "Proper 23": "Lord, we pray that your grace may always precede and follow us, that we may continually be given to all good works; through Jesus Christ our Lord. Amen.",
  "Proper 24": "Almighty and everlasting God, in Christ you have revealed your glory to all the nations: Guard the works of your mercy, that your Church throughout the world may persevere with steadfast faith in the confession of your Name; through Jesus Christ our Lord. Amen.",
  "Proper 25": "Almighty and everlasting God, increase in us the gifts of faith, hope, and charity; and, that we may obtain what you promise, make us love what you command; through Jesus Christ our Lord. Amen.",
  "Proper 26": "Almighty and merciful God, it is only by your gift that your faithful people offer you true and laudable service: Grant that we may run without stumbling to obtain your heavenly promises; through Jesus Christ our Lord. Amen.",
  "Proper 27": "O God, whose blessed Son came into the world that he might destroy the works of the devil and make us children of God and heirs of eternal life: Grant that, having this hope, we may purify ourselves as he is pure; that, when he comes again with power and great glory, we may be made like him in his eternal and glorious kingdom; through Jesus Christ our Lord. Amen.",
  "Proper 28": "Blessed Lord, who caused all holy Scriptures to be written for our learning: Grant us so to hear them, read, mark, learn, and inwardly digest them, that we may embrace and ever hold fast the blessed hope of everlasting life, which you have given us in our Savior Jesus Christ. Amen.",
  "Proper 29": "Almighty and everlasting God, whose will it is to restore all things in your well-beloved Son, the King of kings and Lord of lords: Mercifully grant that the peoples of the earth, divided and enslaved by sin, may be freed and brought together under his most gracious rule; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen."
};

const BCP_SUNDAY_COLLECTS_RITE1 = {
  "Advent 1": "Almighty God, give us grace that we may cast away the works of darkness, and put upon us the armor of light, now in the time of this mortal life in which thy Son Jesus Christ came to visit us in great humility; that in the last day, when he shall come again in his glorious majesty to judge both the quick and the dead, we may rise to the life immortal; through him who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Advent 2": "Merciful God, who sentest thy messengers the prophets to preach repentance and prepare the way for our salvation: Give us grace to heed their warnings and forsake our sins, that we may greet with joy the coming of Jesus Christ our Redeemer; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Advent 3": "Stir up thy power, O Lord, and with great might come among us; and, because we are sorely hindered by our sins, let thy bountiful grace and mercy speedily help and deliver us; through Jesus Christ our Lord, to whom, with thee and the Holy Ghost, be honor and glory, now and for ever. Amen.",
  "Advent 4": "Purify our conscience, Almighty God, by thy daily visitation, that thy Son Jesus Christ, at his coming, may find in us a mansion prepared for himself; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Christmas 1": "Almighty God, who hast poured upon us the new light of thine incarnate Word: Grant that the same light, enkindled in our hearts, may shine forth in our lives; through Jesus Christ our Lord, who liveth and reigneth with thee, in the unity of the Holy Ghost, one God, now and for ever. Amen.",
  "Christmas 2": "O God, who wonderfully createdst, and yet more wonderfully restoredst, the dignity of human nature: Grant that we may share the divine life of him who humbled himself to share our humanity, thy Son Jesus Christ; who liveth and reigneth with thee, in the unity of the Holy Ghost, one God, for ever and ever. Amen.",
  "Epiphany 1": "Father in heaven, who at the baptism of Jesus in the River Jordan didst proclaim him thy beloved Son and anoint him with the Holy Spirit: Grant that all who are baptized into his Name may keep the covenant they have made, and boldly confess him as Lord and Savior; who liveth and reigneth with thee and the Holy Ghost, one God, in glory everlasting. Amen.",
  "Epiphany 2": "Almighty and everlasting God, who dost govern all things both in heaven and on earth: Mercifully hear the supplications of thy people, and in our time grant us thy peace; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Epiphany 3": "Give us grace, O Lord, readily to answer the call of our Savior Jesus Christ and proclaim to all people the Good News of his salvation, that we and the whole world may perceive the glory of his marvelous works; who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Epiphany 4": "Almighty and everlasting God, who knowest us to be set in the midst of so many and great dangers, that by reason of the frailty of our nature we cannot always stand upright: Grant to us such strength and protection as may support us in all dangers and carry us through all temptations; through Jesus Christ our Lord. Amen.",
  "Epiphany 5": "Set us free, O God, from the bondage of our sins, and give us the liberty of that abundant life which thou hast made known to us in thy Son our Savior Jesus Christ; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Epiphany 6": "O God, the strength of all them that put their trust in thee: Mercifully accept our prayers; and because through the weakness of our mortal nature we can do no good thing without thee, grant us the help of thy grace, that in keeping thy commandments we may please thee both in will and deed; through Jesus Christ our Lord. Amen.",
  "Epiphany 7": "O Lord, who hast taught us that all our doings without charity are nothing worth: Send thy Holy Ghost and pour into our hearts that most excellent gift of charity, the very bond of peace and of all virtues, without which whosoever liveth is counted dead before thee. Grant this for the sake of thine only Son Jesus Christ our Lord. Amen.",
  "Epiphany 8": "Most loving Father, whose will it is that both wheat and tares should grow together until the harvest: Give us grace to serve thee with patience and trust, leaving the judgment unto thee; through Jesus Christ our Lord. Amen.",
  "Epiphany Last": "O God, who before the passion of thine only-begotten Son didst reveal his glory upon the holy mountain: Grant unto us that we, beholding by faith the light of his countenance, may be strengthened to bear our cross, and be changed into his likeness from glory to glory; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Lent 1": "Almighty God, whose blessed Son was led by the Spirit to be tempted by Satan: Come quickly to help us who are assaulted by many temptations; and, as thou knowest the weaknesses of each of us, let each one find thee mighty to save; through Jesus Christ thy Son our Lord. Amen.",
  "Lent 2": "O God, whose glory it is always to have mercy: Be gracious to all who have gone astray from thy ways, and bring them again with penitent hearts and steadfast faith to embrace and hold fast the unchangeable truth of thy Word, Jesus Christ thy Son; who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Lent 3": "Heavenly Father, thou hast made us for thyself, and our hearts are restless until they find their rest in thee: Show us thy mercy, that we may be freed from our sins and find in thee our peace and joy; through Jesus Christ our Lord. Amen.",
  "Lent 4": "Gracious Father, whose blessed Son Jesus Christ came down from heaven to be the true bread which giveth life to the world: Evermore give us this bread, that he may live in us, and we in him; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Lent 5": "Almighty God, who alone canst order the unruly wills and affections of sinful men: Grant unto thy people grace to love the thing which thou commandest and desire that which thou dost promise; that, among the sundry and manifold changes of the world, our hearts may surely there be fixed where true joys are to be found; through Jesus Christ our Lord. Amen.",
  "Palm Sunday": "Almighty and everlasting God, who, of thy tender love towards mankind, hast sent thy Son our Savior Jesus Christ to take upon him our flesh, and to suffer death upon the cross, that all mankind should follow the example of his great humility: Mercifully grant that we may both follow the example of his patience, and also be made partakers of his resurrection; through the same Jesus Christ our Lord. Amen.",
  "Easter 1": "O God, who for our redemption didst give thine only-begotten Son to the death of the cross, and by his glorious resurrection hast delivered us from the power of our enemy: Grant us so to die daily unto sin, that we may evermore live with him in the joy of his resurrection; through Jesus Christ our Lord. Amen.",
  "Easter 2": "Almighty and eternal God, who in the Paschal mystery didst establish the new covenant of reconciliation: Grant that all who have been reborn into the fellowship of Christ's Body may show forth in their lives what they profess by their faith; through Jesus Christ our Lord. Amen.",
  "Easter 3": "O God, whose blessed Son did make himself known to his disciples in the breaking of bread: Open the eyes of our faith, that we may behold him in all his redeeming work; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Easter 4": "O God, whose Son Jesus is the good shepherd of thy people: Grant that when we hear his voice we may know him who calleth us each by name, and follow where he leadeth; who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Easter 5": "O Almighty God, whom truly to know is everlasting life: Grant us perfectly to know thy Son Jesus Christ to be the way, the truth, and the life, that we may steadfastly follow his steps in the way that leadeth to eternal life; through the same thy Son Jesus Christ our Lord. Amen.",
  "Easter 6": "O God, who hast prepared for them that love thee such good things as pass man's understanding: Pour into our hearts such love toward thee, that we, loving thee in all things and above all things, may obtain thy promises, which exceed all that we can desire; through Jesus Christ our Lord. Amen.",
  "Easter 7": "O God, the King of glory, who hast exalted thine only Son Jesus Christ with great triumph unto thy kingdom in heaven: We beseech thee, leave us not comfortless, but send to us thy Holy Ghost to comfort us, and exalt us unto the same place whither our Savior Christ is gone before; who liveth and reigneth with thee and the Holy Ghost, one God, world without end. Amen.",
  "Pentecost": "O God, who on this day didst teach the hearts of thy faithful people by sending to them the light of thy Holy Spirit: Grant us by the same Spirit to have a right judgment in all things, and evermore to rejoice in his holy comfort; through Jesus Christ thy Son our Lord, who liveth and reigneth with thee, in the unity of the same Spirit, one God, world without end. Amen.",
  "Trinity": "Almighty and everlasting God, who hast given unto us thy servants grace, by the confession of a true faith, to acknowledge the glory of the eternal Trinity, and in the power of the Divine Majesty to worship the Unity: We beseech thee that thou wouldest keep us steadfast in this faith and worship, and bring us at last to see thee in thy one and eternal glory, O Father; who with the Son and the Holy Ghost livest and reignest, one God, for ever and ever. Amen.",
  "Proper 1": "Almighty and everlasting God, whose will it is to restore all things in thy well-beloved Son, the King of kings and Lord of lords: Mercifully grant that the peoples of the earth, divided and enslaved by sin, may be freed and brought together under his most gracious rule; who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Proper 2": "O God, the strength of all them that put their trust in thee: Mercifully accept our prayers; and because through the weakness of our mortal nature we can do no good thing without thee, grant us the help of thy grace, that in keeping thy commandments we may please thee both in will and deed; through Jesus Christ our Lord. Amen.",
  "Proper 3": "Grant, O Lord, we beseech thee, that the course of this world may be so peaceably ordered by thy governance, that thy Church may joyfully serve thee in all godly quietness; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Proper 4": "O God, whose never-failing providence ordereth all things both in heaven and earth: We humbly beseech thee to put away from us all hurtful things, and to give us those things which are profitable for us; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Proper 5": "O God, from whom all good things do come: Grant to us thy humble servants, that by thy holy inspiration we may think those things that be good, and by thy merciful guiding may perform the same; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Proper 6": "Keep, O Lord, we beseech thee, thy household the Church in thy steadfast faith and love, that by the help of thy grace we may proclaim thy truth with boldness, and minister thy justice with compassion; for the sake of Jesus Christ our Savior, who liveth and reigneth with thee and the Holy Ghost, one God, now and for ever. Amen.",
  "Proper 7": "O Lord, make us to have a perpetual fear and love of thy holy Name, for thou never failest to help and govern them whom thou dost bring up in thy steadfast fear and love; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Proper 8": "O Almighty God, who by thy Son Jesus Christ didst give to thy Apostle Peter many excellent gifts, and commandedst him earnestly to feed thy flock: Make, we beseech thee, all bishops and pastors diligently to preach thy holy Word, and the people obediently to follow the same; through Jesus Christ our Lord. Amen.",
  "Proper 9": "O God, who hast taught us that all thy commandments are summed up in love for thee and thy neighbor: Grant us the grace of thy Holy Spirit to love thee with our whole heart, and our neighbor as ourselves; through Jesus Christ our Lord. Amen.",
  "Proper 10": "O Lord, mercifully receive the prayers of thy people who call upon thee, and grant that they may both perceive and know what things they ought to do, and also may have grace and power faithfully to fulfill the same; through Jesus Christ our Lord. Amen.",
  "Proper 11": "Almighty God, the fountain of all wisdom, who knowest our necessities before we ask and our ignorance in asking: We beseech thee to have compassion upon our infirmities, and mercifully to give us those things which for our unworthiness we dare not, and for our blindness we cannot ask; through the worthiness of thy Son Jesus Christ our Lord. Amen.",
  "Proper 12": "O God, the protector of all that trust in thee, without whom nothing is strong, nothing is holy: Increase and multiply upon us thy mercy; that, thou being our ruler and guide, we may so pass through things temporal, that we finally lose not the things eternal; grant this, O heavenly Father, for the sake of Jesus Christ our Lord. Amen.",
  "Proper 13": "Let thy merciful ears, O Lord, be open to the prayers of thy humble servants; and, that they may obtain their petitions, make them to ask such things as shall please thee; through Jesus Christ our Lord. Amen.",
  "Proper 14": "Grant to us, Lord, we beseech thee, the spirit to think and do always such things as are right, that we, who cannot exist without thee, may by thee be enabled to live according to thy will; through Jesus Christ our Lord. Amen.",
  "Proper 15": "Almighty God, who hast given thine only Son to be unto us both a sacrifice for sin, and also an ensample of godly life: Give us grace that we may always most thankfully receive that his inestimable benefit, and also daily endeavor ourselves to follow the blessed steps of his most holy life; through the same Jesus Christ our Lord. Amen.",
  "Proper 16": "Grant, O merciful God, that thy Church, being gathered together in unity by thy Holy Spirit, may show forth thy power among all peoples, to the glory of thy Name; through Jesus Christ our Lord, who liveth and reigneth with thee and the Holy Ghost, one God, for ever and ever. Amen.",
  "Proper 17": "Lord of all power and might, who art the author and giver of all good things: Graft in our hearts the love of thy Name, increase in us true religion, nourish us with all goodness, and of thy great mercy keep us in the same; through Jesus Christ our Lord. Amen.",
  "Proper 18": "Grant us, O Lord, we beseech thee, to trust in thee with all our hearts; for, as thou dost always resist the proud who confide in their own strength, so thou dost never forsake them that make their boast of thy mercy; through Jesus Christ our Lord. Amen.",
  "Proper 19": "O God, forasmuch as without thee we are not able to please thee, mercifully grant that thy Holy Spirit may in all things direct and rule our hearts; through Jesus Christ our Lord. Amen.",
  "Proper 20": "Grant us, Lord, we beseech thee, not to be anxious about earthly things, but to love things heavenly; and, even now while we are placed among things that are passing away, to hold fast to those that shall endure; through Jesus Christ our Lord. Amen.",
  "Proper 21": "O God, who declarest thy almighty power chiefly in showing mercy and pity: Mercifully grant unto us such a measure of thy grace, that we, running to obtain thy promises, may be made partakers of thy heavenly treasure; through Jesus Christ our Lord. Amen.",
  "Proper 22": "Almighty and everlasting God, who art always more ready to hear than we to pray, and art wont to give more than either we desire or deserve: Pour down upon us the abundance of thy mercy, forgiving us those things whereof our conscience is afraid, and giving us those good things which we are not worthy to ask, but through the merits and mediation of Jesus Christ thy Son our Lord. Amen.",
  "Proper 23": "Lord, we pray thee that thy grace may always prevent and follow us, and make us continually to be given to all good works; through Jesus Christ our Lord. Amen.",
  "Proper 24": "Almighty and everlasting God, who in Christ hast revealed thy glory unto all nations: Guard the works of thy mercy, that thy Church throughout the world may persevere with steadfast faith in the confession of thy Name; through Jesus Christ our Lord. Amen.",
  "Proper 25": "Almighty and everlasting God, increase in us the gifts of faith, hope, and charity; and, that we may obtain that which thou dost promise, make us to love that which thou dost command; through Jesus Christ our Lord. Amen.",
  "Proper 26": "Almighty and merciful God, of whose only gift it cometh that thy faithful people do unto thee true and laudable service: Grant, we beseech thee, that we may run without stumbling to obtain thy heavenly promises; through Jesus Christ our Lord. Amen.",
  "Proper 27": "O God, whose blessed Son was manifested that he might destroy the works of the devil and make us the sons of God and heirs of eternal life: Grant us, we beseech thee, that, having this hope, we may purify ourselves even as he is pure; that, when he shall appear again with power and great glory, we may be made like unto him in his eternal and glorious kingdom; through the same Jesus Christ our Lord. Amen.",
  "Proper 28": "Blessed Lord, who hast caused all holy Scriptures to be written for our learning: Grant that we may in such wise hear them, read, mark, learn, and inwardly digest them, that by patience and comfort of thy holy Word, we may embrace and ever hold fast the blessed hope of everlasting life, which thou hast given us in our Savior Jesus Christ. Amen.",
  "Proper 29": "Almighty and everlasting God, whose will it is to restore all things in thy well-beloved Son, the King of kings and Lord of lords: Mercifully grant that the peoples of the earth, divided and enslaved by sin, may be freed and brought together under his most gracious rule; who liveth and reigneth with thee and the Holy Ghost, now and for ever. Amen."
};

function getSeasonalSundayCollect(sun, key, rite) {
  if (!key) return null;
  const time = sun.getTime();
  const year = sun.getFullYear();
  const easter = getEasterDate(year);
  const pentecost = new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000).getTime();
  const trinitySunday = new Date(easter.getTime() + 56 * 24 * 60 * 60 * 1000).getTime();
  
  let databaseKey = null;
  
  if (time === pentecost) {
    databaseKey = "Pentecost";
  } else if (time === trinitySunday) {
    databaseKey = "Trinity";
  } else if (key.season === 'Advent') {
    if (key.week === 'Week of 1 Advent') databaseKey = "Advent 1";
    else if (key.week === 'Week of 2 Advent') databaseKey = "Advent 2";
    else if (key.week === 'Week of 3 Advent') databaseKey = "Advent 3";
    else if (key.week === 'Week of 4 Advent') databaseKey = "Advent 4";
  } else if (key.season === 'Christmas') {
    if (key.title && key.title.includes('Second Sunday')) databaseKey = "Christmas 2";
    else databaseKey = "Christmas 1";
  } else if (key.season === 'Epiphany') {
    if (key.week === 'The Epiphany and Following' || key.week === 'Week of 1 Epiphany') databaseKey = "Epiphany 1";
    else if (key.week === 'Week of 2 Epiphany') databaseKey = "Epiphany 2";
    else if (key.week === 'Week of 3 Epiphany') databaseKey = "Epiphany 3";
    else if (key.week === 'Week of 4 Epiphany') databaseKey = "Epiphany 4";
    else if (key.week === 'Week of 5 Epiphany') databaseKey = "Epiphany 5";
    else if (key.week === 'Week of 6 Epiphany') databaseKey = "Epiphany 6";
    else if (key.week === 'Week of 7 Epiphany') databaseKey = "Epiphany 7";
    else if (key.week === 'Week of 8 Epiphany') databaseKey = "Epiphany 8";
    else if (key.week === 'Week of Last Epiphany') databaseKey = "Epiphany Last";
  } else if (key.season === 'Lent') {
    if (key.week === 'Ash Wednesday and Following' || key.week === 'Week of 1 Lent') databaseKey = "Lent 1";
    else if (key.week === 'Week of 2 Lent') databaseKey = "Lent 2";
    else if (key.week === 'Week of 3 Lent') databaseKey = "Lent 3";
    else if (key.week === 'Week of 4 Lent') databaseKey = "Lent 4";
    else if (key.week === 'Week of 5 Lent') databaseKey = "Lent 5";
    else if (key.week === 'Holy Week') databaseKey = "Palm Sunday";
  } else if (key.season === 'Easter') {
    if (key.week === 'Easter Week') databaseKey = "Easter 1";
    else if (key.week === 'Week of 2 Easter') databaseKey = "Easter 2";
    else if (key.week === 'Week of 3 Easter') databaseKey = "Easter 3";
    else if (key.week === 'Week of 4 Easter') databaseKey = "Easter 4";
    else if (key.week === 'Week of 5 Easter') databaseKey = "Easter 5";
    else if (key.week === 'Week of 6 Easter') databaseKey = "Easter 6";
    else if (key.week === 'Week of 7 Easter') databaseKey = "Easter 7";
  } else if (key.season === 'The Season after Pentecost') {
    if (key.week && key.week.startsWith('Proper ')) {
      databaseKey = key.week;
    }
  }
  
  if (databaseKey) {
    if (rite === 'rite1') {
      return BCP_SUNDAY_COLLECTS_RITE1[databaseKey] || BCP_SUNDAY_COLLECTS[databaseKey];
    } else {
      return BCP_SUNDAY_COLLECTS[databaseKey];
    }
  }
  
  return null;
}

function getSeasonalSundayCollectTitle(sun, key) {
  if (!key) return "Weekly Collect";
  const time = sun.getTime();
  const year = sun.getFullYear();
  const easter = getEasterDate(year);
  const pentecost = new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000).getTime();
  const trinitySunday = new Date(easter.getTime() + 56 * 24 * 60 * 60 * 1000).getTime();
  
  if (time === pentecost) return "Collect for the Day of Pentecost";
  if (time === trinitySunday) return "Collect for Trinity Sunday";
  
  if (key.season === 'Advent') {
    if (key.week === 'Week of 1 Advent') return "Collect for the First Sunday of Advent";
    if (key.week === 'Week of 2 Advent') return "Collect for the Second Sunday of Advent";
    if (key.week === 'Week of 3 Advent') return "Collect for the Third Sunday of Advent";
    if (key.week === 'Week of 4 Advent') return "Collect for the Fourth Sunday of Advent";
  }
  if (key.season === 'Christmas') {
    if (key.title && key.title.includes('Second Sunday')) return "Collect for the Second Sunday after Christmas";
    return "Collect for the First Sunday after Christmas";
  }
  if (key.season === 'Epiphany') {
    if (key.week === 'The Epiphany and Following' || key.week === 'Week of 1 Epiphany') return "Collect for the First Sunday after the Epiphany";
    if (key.week === 'Week of 2 Epiphany') return "Collect for the Second Sunday after the Epiphany";
    if (key.week === 'Week of 3 Epiphany') return "Collect for the Third Sunday after the Epiphany";
    if (key.week === 'Week of 4 Epiphany') return "Collect for the Fourth Sunday after the Epiphany";
    if (key.week === 'Week of 5 Epiphany') return "Collect for the Fifth Sunday after the Epiphany";
    if (key.week === 'Week of 6 Epiphany') return "Collect for the Sixth Sunday after the Epiphany";
    if (key.week === 'Week of 7 Epiphany') return "Collect for the Seventh Sunday after the Epiphany";
    if (key.week === 'Week of 8 Epiphany') return "Collect for the Eighth Sunday after the Epiphany";
    if (key.week === 'Week of Last Epiphany') return "Collect for the Last Sunday after the Epiphany";
  }
  if (key.season === 'Lent') {
    if (key.week === 'Ash Wednesday and Following' || key.week === 'Week of 1 Lent') return "Collect for the First Sunday in Lent";
    if (key.week === 'Week of 2 Lent') return "Collect for the Second Sunday in Lent";
    if (key.week === 'Week of 3 Lent') return "Collect for the Third Sunday in Lent";
    if (key.week === 'Week of 4 Lent') return "Collect for the Fourth Sunday in Lent";
    if (key.week === 'Week of 5 Lent') return "Collect for the Fifth Sunday in Lent";
    if (key.week === 'Holy Week') return "Collect for Palm Sunday";
  }
  if (key.season === 'Easter') {
    if (key.week === 'Easter Week') return "Collect for Easter Day";
    if (key.week === 'Week of 2 Easter') return "Collect for the Second Sunday of Easter";
    if (key.week === 'Week of 3 Easter') return "Collect for the Third Sunday of Easter";
    if (key.week === 'Week of 4 Easter') return "Collect for the Fourth Sunday of Easter";
    if (key.week === 'Week of 5 Easter') return "Collect for the Fifth Sunday of Easter";
    if (key.week === 'Week of 6 Easter') return "Collect for the Sixth Sunday of Easter";
    if (key.week === 'Week of 7 Easter') return "Collect for the Seventh Sunday of Easter";
  }
  if (key.season === 'The Season after Pentecost') {
    if (key.week && key.week.startsWith('Proper ')) {
      return `Collect for ${key.week}`;
    }
  }
  
  return "Weekly Collect";
}

function getPreviousSundayCollect(date, rite) {
  const sun = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = sun.getDay();
  sun.setDate(sun.getDate() - day);
  sun.setHours(0, 0, 0, 0); // normalize
  
  // Check seasonal Sunday collects first to prioritize principal feasts like Trinity Sunday
  const key = getLectionaryKey(sun);
  const seasonalText = getSeasonalSundayCollect(sun, key, rite);
  
  if (seasonalText) {
    return {
      title: getSeasonalSundayCollectTitle(sun, key),
      text: seasonalText
    };
  }
  
  const month = String(sun.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(sun.getDate()).padStart(2, '0');
  const mmDd = `${month}-${dayOfMonth}`;
  
  // Fallback to fixed-date major feast
  const feast = FeastCalendar[mmDd];
  if (feast && feast.type === 'major') {
    return {
      title: `Sunday Collect (Feast of ${feast.name})`,
      text: feast.collect
    };
  }
  
  // Fallback to standard Sunday resurrection collect
  const sundayCollect = LiturgyData.collects[rite].sunday;
  return {
    title: "Sunday Collect",
    text: sundayCollect
  };
}

function getDailyCollect(dayOfWeek, rite) {
  const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const key = dayKeys[dayOfWeek];
  const text = LiturgyData.collects[rite][key];
  
  let title = "A Collect for Sundays";
  if (key === 'monday') title = "A Collect for the Renewal of Life";
  else if (key === 'tuesday') title = "A Collect for Peace";
  else if (key === 'wednesday') title = "A Collect for Grace";
  else if (key === 'thursday') title = "A Collect for Guidance";
  else if (key === 'friday') title = "A Collect for Fridays";
  else if (key === 'saturday') title = "A Collect for Saturdays";
  
  return { title, text };
}

// ==========================================
// CALENDAR-TO-PODCAST MAPPING HELPERS
// ==========================================
function findEpisodeForDate(show, date) {
  const episodes = AppState.episodes[show];
  if (!episodes || episodes.length === 0) return null;
  
  if (show === 'morning' || show === 'evening') {
    // Daily podcast matching: same year, month, date
    return episodes.find(ep => {
      const d = ep.pubDate;
      return d.getFullYear() === date.getFullYear() &&
             d.getMonth() === date.getMonth() &&
             d.getDate() === date.getDate();
    });
  } else if (show === 'song') {
    // Weekly podcast matching: published in the week leading up to the Sunday of the selected date.
    // Sunday of the week
    const sunday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const day = sunday.getDay();
    if (day !== 0) {
      sunday.setDate(sunday.getDate() + (7 - day));
    }
    const sundayMidnight = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate(), 23, 59, 59).getTime();
    // Monday of that week (calculated safely to avoid DST transition offsets)
    const monday = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate());
    monday.setDate(monday.getDate() - 6);
    const mondayMidnight = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate(), 0, 0, 0).getTime();
    
    return episodes.find(ep => {
      const t = ep.pubDate.getTime();
      return t >= mondayMidnight && t <= sundayMidnight;
    });
  }
  return null;
}

window.PlayPodcastEpisodeDirect = function(show, pubDateIso) {
  const episodes = AppState.episodes[show];
  if (!episodes) return;
  const targetDate = new Date(pubDateIso);
  const ep = episodes.find(e => e.pubDate.getTime() === targetDate.getTime());
  if (ep) {
    handlePlayPauseAction(ep);
    // Force sync the liturgy buttons state immediately
    syncLiturgyPodcastButtonsState();
  } else {
    console.warn("Episode not found to play direct:", show, pubDateIso);
  }
};

function renderLiturgicalPodcastBanner() {
  const office = AppState.activeOffice;
  const date = AppState.currentDate;
  
  let dailyShow = null;
  if (office === 'morning') dailyShow = 'morning';
  else if (office === 'evening') dailyShow = 'evening';
  
  const dailyEpisode = dailyShow ? findEpisodeForDate(dailyShow, date) : null;
  const songEpisode = findEpisodeForDate('song', date);
  
  if (!dailyEpisode && !songEpisode) return '';
  
  let html = `<div class="liturgical-podcasts-section">`;
  
  if (dailyEpisode) {
    const isPlaying = AppState.playingEpisode && AppState.playingEpisode.audioUrl === dailyEpisode.audioUrl && AudioEngine.isPlaying();
    const durationMin = Math.floor(dailyEpisode.duration / 60);
    const durationSec = dailyEpisode.duration % 60;
    const durStr = `${durationMin}:${durationSec < 10 ? '0' : ''}${durationSec}`;
    
    html += `
      <div class="liturgical-podcast-card ${isPlaying ? 'active' : ''}">
        <div class="podcast-card-left">
          <div class="podcast-card-icon-container">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v1a7 7 0 0 1-14 0v-1"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </div>
          <div class="podcast-card-info">
            <span class="podcast-card-badge">DAILY OFFICE PODCAST</span>
            <span class="podcast-card-title">${dailyEpisode.title}</span>
            <span class="podcast-card-duration">Duration: ${durStr} mins</span>
          </div>
        </div>
        <button class="podcast-card-play-btn" id="liturgy-podcast-daily-play" data-show="${dailyShow}" data-date="${dailyEpisode.pubDate.toISOString()}">
          ${isPlaying ? `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            Pause
          ` : `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Listen
          `}
        </button>
      </div>
    `;
  }
  
  if (songEpisode) {
    const isPlaying = AppState.playingEpisode && AppState.playingEpisode.audioUrl === songEpisode.audioUrl && AudioEngine.isPlaying();
    const durationMin = Math.floor(songEpisode.duration / 60);
    const durationSec = songEpisode.duration % 60;
    const durStr = `${durationMin}:${durationSec < 10 ? '0' : ''}${durationSec}`;
    
    html += `
      <div class="liturgical-podcast-card song ${isPlaying ? 'active' : ''}">
        <div class="podcast-card-left">
          <div class="podcast-card-icon-container">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </div>
          <div class="podcast-card-info">
            <span class="podcast-card-badge song">SAME OLD SONG (WEEKLY LESSONS)</span>
            <span class="podcast-card-title">${songEpisode.title}</span>
            <span class="podcast-card-duration">Duration: ${durStr} mins</span>
          </div>
        </div>
        <button class="podcast-card-play-btn" id="liturgy-podcast-song-play" data-show="song" data-date="${songEpisode.pubDate.toISOString()}">
          ${isPlaying ? `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            Pause
          ` : `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Listen
          `}
        </button>
      </div>
    `;
  }
  
  html += `</div>`;
  return html;
}

// Bind click event listeners directly to the DOM elements for play buttons
// after HTML is injected, using delegation or on first render.
document.addEventListener('click', (e) => {
  const dailyBtn = e.target.closest('#liturgy-podcast-daily-play');
  const songBtn = e.target.closest('#liturgy-podcast-song-play');
  
  if (dailyBtn) {
    e.stopPropagation();
    const show = dailyBtn.getAttribute('data-show');
    const dateStr = dailyBtn.getAttribute('data-date');
    window.PlayPodcastEpisodeDirect(show, dateStr);
  } else if (songBtn) {
    e.stopPropagation();
    const show = songBtn.getAttribute('data-show');
    const dateStr = songBtn.getAttribute('data-date');
    window.PlayPodcastEpisodeDirect(show, dateStr);
  }
});

function syncLiturgyPodcastButtonsState() {
  const dailyBtn = document.getElementById('liturgy-podcast-daily-play');
  const songBtn = document.getElementById('liturgy-podcast-song-play');
  
  const playingEpisode = AppState.playingEpisode;
  const isPlaying = playingEpisode && AudioEngine.isPlaying();
  
  if (dailyBtn) {
    const show = dailyBtn.getAttribute('data-show');
    const dateStr = dailyBtn.getAttribute('data-date');
    const matchesPlaying = playingEpisode && 
                           playingEpisode.feedType === show && 
                           playingEpisode.pubDate.toISOString() === dateStr;
                           
    if (matchesPlaying && isPlaying) {
      dailyBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        Pause
      `;
      dailyBtn.closest('.liturgical-podcast-card')?.classList.add('active');
    } else {
      dailyBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        Listen
      `;
      dailyBtn.closest('.liturgical-podcast-card')?.classList.remove('active');
    }
  }
  
  if (songBtn) {
    const show = songBtn.getAttribute('data-show');
    const dateStr = songBtn.getAttribute('data-date');
    const matchesPlaying = playingEpisode && 
                           playingEpisode.feedType === show && 
                           playingEpisode.pubDate.toISOString() === dateStr;
                           
    if (matchesPlaying && isPlaying) {
      songBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        Pause
      `;
      songBtn.closest('.liturgical-podcast-card')?.classList.add('active');
    } else {
      songBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        Listen
      `;
      songBtn.closest('.liturgical-podcast-card')?.classList.remove('active');
    }
  }
}

function renderEpisodesList() {
  const container = document.getElementById('episode-list-container');
  if (!container) return;

  const show = AppState.activeShow;
  const originalList = AppState.episodes[show] || [];

  if (!originalList || originalList.length === 0) {
    container.innerHTML = `<div class="scripture-error">No episodes found.</div>`;
    return;
  }

  let list = originalList;
  const query = (AppState.podcastSearchQuery || '').trim().toLowerCase();
  if (query) {
    list = list.filter(ep => 
      (ep.title && ep.title.toLowerCase().includes(query)) ||
      (ep.description && ep.description.toLowerCase().includes(query))
    );
  }

  if (list.length === 0) {
    container.innerHTML = `<div class="scripture-error">No episodes match your search.</div>`;
    return;
  }

  // Identify matching episode for selected date
  const date = AppState.currentDate;
  const matchingEp = findEpisodeForDate(show, date);
  let matchedEpisodeInList = null;
  if (matchingEp) {
    matchedEpisodeInList = list.find(ep => ep.audioUrl === matchingEp.audioUrl);
  }

  // Prepend match to top of list and tag it
  if (matchedEpisodeInList) {
    list = list.filter(ep => ep.audioUrl !== matchedEpisodeInList.audioUrl);
    list = [Object.assign({}, matchedEpisodeInList, { isLiturgicalMatch: true }), ...list];
  }

  // Slice to prevent rendering performance slowdowns (max 50 episodes visible at once)
  const slicedList = list.slice(0, 50);

  container.innerHTML = slicedList.map((ep, idx) => {
    const isPlaying = AppState.playingEpisode && AppState.playingEpisode.audioUrl === ep.audioUrl;
    
    // Formatting date
    const dateStr = ep.pubDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Formatted duration
    const min = Math.floor(ep.duration / 60);
    const sec = ep.duration % 60;
    const durStr = `${min}:${sec < 10 ? '0' : ''}${sec} mins`;

    const badgeHtml = ep.isLiturgicalMatch 
      ? `<span class="liturgical-match-badge ${show === 'song' ? 'song' : ''}">${show === 'song' ? 'Matches Selected Week' : 'Matches Selected Date'}</span>`
      : '';

    return `
      <div class="episode-card ${isPlaying ? 'playing' : ''} ${ep.isLiturgicalMatch ? 'selected-date-match' : ''}" data-idx="${idx}">
        ${badgeHtml}
        <div class="episode-card-top">
          <h4 class="episode-title">${ep.title}</h4>
          <span class="episode-date">${dateStr}</span>
        </div>
        <p class="episode-description">${ep.description}</p>
        <div class="episode-meta-row">
          <span class="episode-duration">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${durStr}
          </span>
          <button class="episode-play-btn" data-action="play" data-idx="${idx}" aria-label="Play episode"></button>
        </div>
      </div>
    `;
  }).join('');

  // Bind click play action
  container.querySelectorAll('.episode-play-btn, .episode-card').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent nested click trigger
      
      const idx = parseInt(el.getAttribute('data-idx'), 10);
      const episode = slicedList[idx];
      
      handlePlayPauseAction(episode);
    });
  });
}

function handlePlayPauseAction(episode) {
  if (AppState.playingEpisode && AppState.playingEpisode.audioUrl === episode.audioUrl) {
    AudioEngine.toggle();
  } else {
    AppState.playingEpisode = episode;
    
    // Show Bottom Player bar
    const bar = document.getElementById('bottom-player-bar');
    if (bar) {
      bar.classList.add('active');
      document.body.classList.add('player-active');
      syncPlayerMinimizedState();
    }
    
    // Sync Bottom player fields
    let coverArt = '';
    let subtitle = '';
    if (episode.feedType === 'morning') {
      coverArt = 'https://megaphone.imgix.net/podcasts/b5147f2a-e3d0-11ea-8876-63e7979dfd2a/image/AMATO.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress';
      subtitle = 'A Morning at the Office';
    } else if (episode.feedType === 'evening') {
      coverArt = 'https://megaphone.imgix.net/podcasts/bda80f26-e3d0-11ea-b724-33897e0bbb01/image/aneap.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress';
      subtitle = 'An Evening at Prayer';
    } else if (episode.feedType === 'song') {
      coverArt = 'https://hosting-media.riverside.com/media/imports/podcasts/b4f24061-6e87-4503-adce-cdf8ee0914d0/cover.jpg';
      subtitle = 'The Same Old Song';
    }
    
    document.getElementById('player-cover-art').src = coverArt;
    document.getElementById('player-episode-title').textContent = episode.title;
    document.getElementById('player-show-subtitle').textContent = subtitle;
      
    AudioEngine.playEpisode(episode);
  }
}


function setupPodcastSearchBindings() {
  const searchInput = document.getElementById('podcast-search-input');
  const clearBtn = document.getElementById('podcast-search-clear-btn');
  if (!searchInput || !clearBtn) return;

  searchInput.addEventListener('input', () => {
    const val = searchInput.value;
    AppState.podcastSearchQuery = val;
    clearBtn.style.display = val ? 'flex' : 'none';
    renderEpisodesList();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    AppState.podcastSearchQuery = '';
    clearBtn.style.display = 'none';
    searchInput.focus();
    renderEpisodesList();
  });
}


// ==========================================
// AUDIO ENGINE LISTENERS & PLAYER SYNC
// ==========================================
function setupAudioPlayerBindings() {
  const playPauseBtn = document.getElementById('player-play-pause');
  const skipForwardBtn = document.getElementById('player-skip-forward');
  const skipBackBtn = document.getElementById('player-skip-back');
  const speedSelect = document.getElementById('playback-speed-select');
  
  const sliderTrack = document.getElementById('player-slider-track');
  const sliderProgress = document.getElementById('player-slider-progress');
  const sliderThumb = document.getElementById('player-slider-thumb');
  
  const currentTimeLabel = document.getElementById('player-current-time');
  const totalDurationLabel = document.getElementById('player-total-duration');

  // Format Helper
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  AudioEngine.registerCallbacks({
    onPlay: (episode) => {
      playPauseBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `;
      // Update lists
      renderEpisodesList();
      syncLiturgyPodcastButtonsState();
    },
    
    onPause: () => {
      playPauseBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
      renderEpisodesList();
      syncLiturgyPodcastButtonsState();
    },
    
    onTimeUpdate: (currentTime, duration) => {
      currentTimeLabel.textContent = formatTime(currentTime);
      totalDurationLabel.textContent = formatTime(duration);
      
      const percent = duration > 0 ? (currentTime / duration) * 100 : 0;
      sliderProgress.style.width = `${percent}%`;
      sliderThumb.style.left = `${percent}%`;
    },
    
    onLoadedMetadata: (duration) => {
      totalDurationLabel.textContent = formatTime(duration);
    },
    
    onEnded: () => {
      playPauseBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
      syncLiturgyPodcastButtonsState();
    }
  });

  // Controls bindings
  playPauseBtn.addEventListener('click', () => {
    AudioEngine.toggle();
  });

  skipForwardBtn.addEventListener('click', () => {
    AudioEngine.skip(30);
  });

  skipBackBtn.addEventListener('click', () => {
    AudioEngine.skip(-15);
  });

  speedSelect.addEventListener('change', (e) => {
    AudioEngine.setSpeed(parseFloat(e.target.value));
  });

  document.getElementById('player-minimize-btn')?.addEventListener('click', () => {
    AppState.playerMinimized = !AppState.playerMinimized;
    localStorage.setItem('playerMinimized', AppState.playerMinimized);
    syncPlayerMinimizedState();
  });

  // Drag Seek slider
  let isDragging = false;
  
  const handleSeek = (clientX) => {
    const rect = sliderTrack.getBoundingClientRect();
    const pos = (clientX - rect.left) / rect.width;
    const seekTime = Math.max(0, Math.min(pos, 1)) * AudioEngine.getDuration();
    
    const percent = Math.max(0, Math.min(pos * 100, 100));
    sliderProgress.style.width = `${percent}%`;
    sliderThumb.style.left = `${percent}%`;
    
    return seekTime;
  };

  sliderTrack.addEventListener('mousedown', (e) => {
    isDragging = true;
    const time = handleSeek(e.clientX);
    AudioEngine.seek(time);
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      handleSeek(e.clientX);
    }
  });

  window.addEventListener('mouseup', (e) => {
    if (isDragging) {
      isDragging = false;
      const time = handleSeek(e.clientX);
      AudioEngine.seek(time);
    }
  });
  
  // Touch support for timeline seeking
  sliderTrack.addEventListener('touchstart', (e) => {
    isDragging = true;
    const time = handleSeek(e.touches[0].clientX);
    AudioEngine.seek(time);
  });
  
  window.addEventListener('touchmove', (e) => {
    if (isDragging) {
      handleSeek(e.touches[0].clientX);
    }
  });
  
  window.addEventListener('touchend', (e) => {
    if (isDragging) {
      isDragging = false;
      const time = handleSeek(e.changedTouches[0].clientX);
      AudioEngine.seek(time);
    }
  });
}

// ==========================================
// CALENDAR MODAL ENGINE
// ==========================================
let calViewYear = null;
let calViewMonth = null;

function openCalendarModal() {
  const modal = document.getElementById('calendar-modal-overlay');
  if (!modal) return;
  
  calViewYear = AppState.currentDate.getFullYear();
  calViewMonth = AppState.currentDate.getMonth();
  
  renderCalendarGrid(calViewYear, calViewMonth);
  updateStreakBadge();
  
  const searchInput = document.getElementById('calendar-search-input');
  if (searchInput) { searchInput.value = ''; searchInput.focus(); }
  
  const resultsEl = document.getElementById('calendar-feast-results');
  if (resultsEl) { resultsEl.style.display = 'none'; resultsEl.innerHTML = ''; }
  
  modal.classList.add('active');
}

function renderCalendarGrid(year, month) {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const label = document.getElementById('cal-month-label');
  if (label) label.textContent = `${months[month]} ${year}`;
  
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;
  
  const today = new Date();
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  let html = '';
  
  // Empty cells for days before start of month
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-day empty"></div>`;
  }
  
  for (let d = 1; d <= daysInMonth; d++) {
    const mm = String(month + 1).padStart(2, '0');
    const dd = String(d).padStart(2, '0');
    const key = `${mm}-${dd}`;
    const feast = FeastCalendar[key];
    
    const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === d;
    const isSelected = AppState.currentDate.getFullYear() === year && AppState.currentDate.getMonth() === month && AppState.currentDate.getDate() === d;
    const isMajor = feast && feast.type === 'major';
    const hasMinor = feast && feast.type === 'minor';
    
    const date = new Date(year, month, d);
    const seasonInfo = getLiturgicalSeason(date);
    const isMartyr = feast && feast.name && (feast.name.toLowerCase().includes('martyr') || feast.name.toLowerCase().includes('martyrs'));
    const seasonClass = isMartyr ? 'season-martyr' : `season-${seasonInfo.color || seasonInfo.key}`;
    
    let classes = 'cal-day ' + seasonClass;
    if (isToday) classes += ' today';
    if (isSelected) classes += ' selected';
    if (isMajor) classes += ' has-major-feast';
    
    const feastLabel = feast ? `<span class="cal-day-feast">${feast.name.split(',')[0].substring(0,14)}</span>` : '';
    
    // Add completions visual indicator (micro-dots)
    const dateStr = `${year}-${mm}-${dd}`;
    const completions = AppState.habitLogs[dateStr] || [];
    let dotsHtml = '';
    if (completions.length > 0) {
      dotsHtml = `<div class="cal-day-dots-container">` + 
        completions.map(office => `<span class="cal-day-dot ${office}"></span>`).join('') + 
        `</div>`;
    }
    
    html += `<div class="${classes}" data-date="${year}-${mm}-${dd}">
      <span class="cal-day-num">${d}</span>
      ${feastLabel}
      ${dotsHtml}
    </div>`;
  }
  
  grid.innerHTML = html;
  
  // Bind day clicks
  grid.querySelectorAll('.cal-day:not(.empty)').forEach(el => {
    el.addEventListener('click', () => {
      const dateStr = el.getAttribute('data-date');
      const parts = dateStr.split('-');
      const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      updateAppForDate(d);
      document.getElementById('calendar-modal-overlay')?.classList.remove('active');
    });
  });
}

function setupCalendarSearch() {
  const searchInput = document.getElementById('calendar-search-input');
  const resultsEl = document.getElementById('calendar-feast-results');
  if (!searchInput || !resultsEl) return;
  
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q || q.length < 2) {
      resultsEl.style.display = 'none';
      resultsEl.innerHTML = '';
      return;
    }
    
    const months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
    const monthAbbr = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    
    // Search feast calendar
    const results = [];
    for (const [key, feast] of Object.entries(FeastCalendar)) {
      const feastName = feast.name.toLowerCase();
      const [m, d] = key.split('-');
      const monthIdx = parseInt(m, 10) - 1;
      const monthName = months[monthIdx];
      const monthShort = monthAbbr[monthIdx];
      const dayStr = `${monthName} ${parseInt(d, 10)}`;
      const dayShortStr = `${monthShort} ${parseInt(d, 10)}`;
      const numericStr = `${parseInt(m,10)}/${parseInt(d,10)}`;
      const altNumeric = `${m}-${d}`;
      
      if (feastName.includes(q) || dayStr.includes(q) || dayShortStr.includes(q) || numericStr.includes(q) || altNumeric.includes(q)) {
        results.push({ key, feast, monthIdx, day: parseInt(d, 10) });
      }
    }
    
    // Sort by month/day
    results.sort((a, b) => a.monthIdx - b.monthIdx || a.day - b.day);
    
    if (results.length === 0) {
      resultsEl.style.display = 'block';
      resultsEl.innerHTML = `<div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">No feasts or dates found</div>`;
      return;
    }
    
    const months2 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    resultsEl.style.display = 'block';
    const currentYear = new Date().getFullYear();
    resultsEl.innerHTML = results.slice(0, 15).map(({ key, feast, monthIdx, day }) => {
      const date = new Date(currentYear, monthIdx, day);
      const seasonInfo = getLiturgicalSeason(date);
      const isMartyr = feast && feast.name && (feast.name.toLowerCase().includes('martyr') || feast.name.toLowerCase().includes('martyrs'));
      const seasonClass = isMartyr ? 'season-martyr' : `season-${seasonInfo.color || seasonInfo.key}`;
      return `
        <div class="calendar-feast-result-item ${seasonClass}" data-key="${key}">
          <div>
            <div class="feast-result-name">${feast.name}</div>
            <div class="feast-result-type">${feast.type === 'major' ? 'Major Feast' : 'Lesser Feast & Commemoration'}</div>
          </div>
          <span class="feast-result-date">${months2[monthIdx]} ${day}</span>
        </div>
      `;
    }).join('');
    
    // Bind feast result clicks
    resultsEl.querySelectorAll('.calendar-feast-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const k = el.getAttribute('data-key');
        const [m, d] = k.split('-');
        const year = new Date().getFullYear();
        const date = new Date(year, parseInt(m, 10) - 1, parseInt(d, 10));
        updateAppForDate(date);
        document.getElementById('calendar-modal-overlay')?.classList.remove('active');
      });
    });
  });
}

function setupCalendarNavButtons() {
  document.getElementById('cal-prev-month')?.addEventListener('click', () => {
    calViewMonth--;
    if (calViewMonth < 0) { calViewMonth = 11; calViewYear--; }
    renderCalendarGrid(calViewYear, calViewMonth);
  });
  document.getElementById('cal-next-month')?.addEventListener('click', () => {
    calViewMonth++;
    if (calViewMonth > 11) { calViewMonth = 0; calViewYear++; }
    renderCalendarGrid(calViewYear, calViewMonth);
  });
}

// ==========================================
// MODALS & EVENT BOUND DIRECT LINKS
// ==========================================
function setupModalBindings() {
  // Settings modal
  const settingsModal = document.getElementById('settings-modal-overlay');
  const triggerSettings = document.getElementById('trigger-settings');
  const closeSettings = document.getElementById('close-settings');

  triggerSettings.addEventListener('click', () => settingsModal.classList.add('active'));
  closeSettings.addEventListener('click', () => {
    settingsModal.classList.remove('active');
    if (AppState.pitchpipeActiveOscillator) togglePitchpipeTone();
  });
  
  // Bible modal
  const bibleModal = document.getElementById('bible-modal-overlay');
  const triggerBible = document.getElementById('trigger-bible-lookup');
  const closeBible = document.getElementById('close-bible');

  triggerBible.addEventListener('click', () => {
    bibleModal.classList.add('active');
    document.getElementById('bible-search-input')?.focus();
  });
  closeBible.addEventListener('click', () => bibleModal.classList.remove('active'));

  // Calendar modal
  const calendarModal = document.getElementById('calendar-modal-overlay');
  const closeCalendar = document.getElementById('close-calendar');
  closeCalendar?.addEventListener('click', () => calendarModal.classList.remove('active'));

  // Prayer List modal
  const prayerModal = document.getElementById('prayer-modal-overlay');
  const triggerPrayer = document.getElementById('trigger-prayer-list');
  const closePrayer = document.getElementById('close-prayer');
  const btnAddPrayer = document.getElementById('btn-add-prayer');
  const prayerNameInput = document.getElementById('prayer-name-input');

  triggerPrayer?.addEventListener('click', () => {
    prayerModal?.classList.add('active');
    renderPrayerList();
    prayerNameInput?.focus();
  });
  closePrayer?.addEventListener('click', () => prayerModal?.classList.remove('active'));

  btnAddPrayer?.addEventListener('click', () => {
    addPrayerIntention();
  });

  prayerNameInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addPrayerIntention();
    }
  });

  // Close modals clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.remove('active');
      if (AppState.pitchpipeActiveOscillator) togglePitchpipeTone();
    }
    if (e.target === bibleModal) bibleModal.classList.remove('active');
    if (e.target === calendarModal) calendarModal.classList.remove('active');
    if (e.target === prayerModal) prayerModal.classList.remove('active');
  });

  // Settings Buttons Actions
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      saveSetting('theme', btn.getAttribute('data-theme'));
    });
  });

  document.querySelectorAll('.fontsize-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      saveSetting('fontSize', btn.getAttribute('data-size'));
    });
  });

  document.querySelectorAll('.typography-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      saveSetting('activeTypography', btn.getAttribute('data-style'));
      renderLiturgyFlow();
      loadActiveReadingText();
    });
  });

  // Override pill toggle handlers
  document.getElementById('override-feast')?.addEventListener('click', () => {
    saveSetting('useFeast', !AppState.useFeast);
    updateReadingsForCurrentDate();
  });

  document.getElementById('override-lff')?.addEventListener('click', () => {
    saveSetting('useLff', !AppState.useLff);
    updateReadingsForCurrentDate();
  });

  document.getElementById('override-rcl')?.addEventListener('click', () => {
    if (AppState.currentDate.getDay() !== 0) return; // Only toggle on Sundays
    saveSetting('useRcl', !AppState.useRcl);
    updateReadingsForCurrentDate();
  });

  document.getElementById('setting-bible-version').addEventListener('change', (e) => {
    saveSetting('bibleVersion', e.target.value);
    
    // Reload reading pane if active
    if (AppState.currentAppointedReadings) {
      loadActiveReadingText();
    }
  });

  // Bible search button action
  const searchInput = document.getElementById('bible-search-input');
  const searchBtn = document.getElementById('btn-bible-search');
  
  const performLookup = async () => {
    const query = searchInput.value.trim();
    if (!query) return;

    const welcome = document.getElementById('bible-modal-welcome-text');
    const loading = document.getElementById('bible-modal-loading-placeholder');
    const resultBox = document.getElementById('bible-modal-result-content');

    welcome.style.display = 'none';
    loading.style.display = 'flex';
    resultBox.innerHTML = '';

    try {
      const data = await fetchScripture(query, AppState.bibleVersion);
      loading.style.display = 'none';
      resultBox.innerHTML = `
        <h2 class="bible-passage-heading" style="font-family: var(--font-heading); color: var(--accent-color); margin-top: 0; margin-bottom: 1.25rem; font-size: 1.5rem; font-weight: 600; text-align: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
          ${data.reference}
        </h2>
        <div class="bibletext">
          ${data.textHtml}
        </div>
        <span class="scripture-source-credit" style="display: block; margin-top: 1.25rem; font-size: 0.8rem; opacity: 0.7; font-style: italic; text-align: right;">Source: ${data.source}</span>
      `;
    } catch (e) {
      loading.style.display = 'none';
      resultBox.innerHTML = `
        <div class="scripture-error">
          <span>Failed to fetch passage. Please check the spelling or connection.</span>
        </div>
      `;
    }
  };

  searchBtn.addEventListener('click', performLookup);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performLookup();
  });
}

// Global hook so that clicking inline scripture references in Noonday or Compline can trigger the modal automatically
window.LookupScriptureDirect = (ref) => {
  const bibleModal = document.getElementById('bible-modal-overlay');
  if (!bibleModal) return;

  bibleModal.classList.add('active');
  const searchInput = document.getElementById('bible-search-input');
  if (searchInput) {
    searchInput.value = ref;
    // Trigger lookup directly
    document.getElementById('btn-bible-search')?.click();
  }
};

// ==========================================================================
// NEW ENHANCEMENTS: PRIVATE PRAYER & HABIT ENGINE
// ==========================================================================

// --- Prayer List Functions ---
// ==========================================
// SIMPLIFIED LOCAL PRIVATE PRAYERS STORAGE
// ==========================================
function loadPrayers() {
  try {
    const data = localStorage.getItem('prayers') || localStorage.getItem('prayers_Default');
    AppState.prayerList = data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Failed to load prayers", e);
    AppState.prayerList = [];
  }
}

function savePrayers() {
  try {
    localStorage.setItem('prayers', JSON.stringify(AppState.prayerList));
  } catch (e) {
    console.error("Failed to save prayers", e);
  }
}

function addPrayerIntention() {
  const nameInput = document.getElementById('prayer-name-input');
  const categorySelect = document.getElementById('prayer-category-select');
  if (!nameInput || !categorySelect) return;
  
  const name = nameInput.value.trim();
  const category = categorySelect.value;
  if (!name) return;
  
  const newIntention = {
    id: '_' + Math.random().toString(36).substr(2, 9),
    name: name,
    category: category,
    isActive: true
  };
  
  AppState.prayerList.push(newIntention);
  savePrayers();
  renderPrayerList();
  renderLiturgyFlow(); // update embedded cards in liturgy
  
  nameInput.value = '';
  nameInput.focus();
}

function renderPrayerList() {
  const box = document.getElementById('prayer-list-box');
  if (!box) return;
  
  if (AppState.prayerList.length === 0) {
    box.innerHTML = `<div class="prayer-empty-state">No active intercessions. Add names or concerns above to remember them in your daily prayers.</div>`;
    return;
  }
  
  const categoryLabels = {
    sick: 'For the Sick / Suffering',
    departed: 'For the Departed',
    thanks: 'Thanksgiving',
    general: 'Intention'
  };
  
  box.innerHTML = AppState.prayerList.map(item => `
    <div class="prayer-item">
      <div class="prayer-item-left">
        <span class="prayer-item-name">${escapeHtml(item.name)}</span>
        <span class="prayer-item-category">${categoryLabels[item.category] || item.category}</span>
      </div>
      <button class="btn-delete-prayer" onclick="window.DeletePrayerDirect('${item.id}')" title="Delete intention" aria-label="Delete intention">✕</button>
    </div>
  `).join('');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

window.DeletePrayerDirect = (id) => {
  AppState.prayerList = AppState.prayerList.filter(item => item.id !== id);
  savePrayers();
  renderPrayerList();
  renderLiturgyFlow(); // re-render intercessions card
};

function getPersonalIntercessionsCardHtml() {
  if (AppState.prayerList.length === 0) return '';
  
  const categories = { sick: [], departed: [], thanks: [], general: [] };
  AppState.prayerList.forEach(item => {
    if (categories[item.category]) categories[item.category].push(item.name);
  });
  
  let html = `<div class="personal-intercessions-card">
    <h4>Personal Intercessions & Thanksgivings</h4>
    <ul>`;
  
  if (categories.sick.length > 0) {
    html += `<li><strong>For the Sick / Suffering:</strong> ${categories.sick.map(escapeHtml).join(', ')}</li>`;
  }
  if (categories.departed.length > 0) {
    html += `<li><strong>For the Departed:</strong> ${categories.departed.map(escapeHtml).join(', ')}</li>`;
  }
  if (categories.thanks.length > 0) {
    html += `<li><strong>Thanksgivings:</strong> ${categories.thanks.map(escapeHtml).join(', ')}</li>`;
  }
  if (categories.general.length > 0) {
    html += `<li><strong>Intentions:</strong> ${categories.general.map(escapeHtml).join(', ')}</li>`;
  }
  
  html += `</ul></div>`;
  return html;
}

// --- Habit Tracker Functions ---
function loadHabits() {
  try {
    const data = localStorage.getItem('habitLogs');
    AppState.habitLogs = data ? JSON.parse(data) : {};
  } catch (e) {
    console.error("Failed to load habits", e);
    AppState.habitLogs = {};
  }
}

function saveHabits() {
  try {
    localStorage.setItem('habitLogs', JSON.stringify(AppState.habitLogs));
  } catch (e) {
    console.error("Failed to save habits", e);
  }
}

window.MarkOfficeCompleted = (office) => {
  const year = AppState.currentDate.getFullYear();
  const month = String(AppState.currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(AppState.currentDate.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  
  if (!AppState.habitLogs[dateStr]) {
    AppState.habitLogs[dateStr] = [];
  }
  
  if (!AppState.habitLogs[dateStr].includes(office)) {
    AppState.habitLogs[dateStr].push(office);
    saveHabits();
    
    // Refresh UI
    renderLiturgyFlow();
    updateStreakBadge();
    
    // Also re-render calendar grid if calViewYear/calViewMonth are defined
    if (typeof calViewYear !== 'undefined' && typeof calViewMonth !== 'undefined') {
      renderCalendarGrid(calViewYear, calViewMonth);
    }
  }
};

function getStreak() {
  let streak = 0;
  const checkDate = new Date();
  checkDate.setHours(0, 0, 0, 0);
  
  const formatDateKey = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${dd}`;
  };
  
  let todayKey = formatDateKey(checkDate);
  let hasToday = AppState.habitLogs[todayKey] && AppState.habitLogs[todayKey].length > 0;
  
  // If no completions today, check yesterday to see if streak is still active
  if (!hasToday) {
    checkDate.setDate(checkDate.getDate() - 1);
    let yesterdayKey = formatDateKey(checkDate);
    let hasYesterday = AppState.habitLogs[yesterdayKey] && AppState.habitLogs[yesterdayKey].length > 0;
    if (!hasYesterday) return 0; // Streak broken
  } else {
    // If today is completed, start counting from today
    streak = 1;
    checkDate.setDate(checkDate.getDate() - 1);
  }
  
  // Count backwards
  while (true) {
    let key = formatDateKey(checkDate);
    if (AppState.habitLogs[key] && AppState.habitLogs[key].length > 0) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

function updateStreakBadge() {
  const badge = document.getElementById('calendar-streak-badge');
  if (!badge) return;
  
  const streak = getStreak();
  if (streak > 0) {
    badge.textContent = `🔥 ${streak}-Day Prayer Streak`;
    badge.style.display = 'inline-flex';
  } else {
    badge.style.display = 'none';
  }
}

function renderHabitCheckInHtml(office) {
  const year = AppState.currentDate.getFullYear();
  const month = String(AppState.currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(AppState.currentDate.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  
  const isCompleted = AppState.habitLogs[dateStr] && AppState.habitLogs[dateStr].includes(office);
  const officeTitles = {
    morning: 'Morning Prayer',
    noonday: 'Noonday Prayer',
    evening: 'Evening Prayer',
    compline: 'Compline'
  };
  
  const title = officeTitles[office] || office;
  
  if (isCompleted) {
    return `
      <div class="habit-completion-card">
        <h4>${title} Completed</h4>
        <p>Your spiritual discipline is logged for today. Well done!</p>
        <button class="btn-habit-complete completed">✓ Completed</button>
      </div>
    `;
  } else {
    return `
      <div class="habit-completion-card">
        <h4>Complete Your Office</h4>
        <p>Keep your daily prayer rule active by logging this office.</p>
        <button class="btn-habit-complete" onclick="window.MarkOfficeCompleted('${office}')">✓ Mark Completed</button>
      </div>
    `;
  }
}


// ==========================================
// CHORAL PITCHPIPE ENGINE (WEB AUDIO API)
// ==========================================
function togglePitchpipeTone() {
  if (AppState.pitchpipeActiveOscillator) {
    try {
      AppState.pitchpipeActiveOscillator.stop();
      AppState.pitchpipeActiveOscillator.disconnect();
    } catch (e) {
      console.warn("Failed to stop pitchpipe oscillator cleanly", e);
    }
    AppState.pitchpipeActiveOscillator = null;
    
    const playBtnText = document.getElementById('pitchpipe-play-text');
    const playBtnIcon = document.getElementById('pitchpipe-play-icon');
    if (playBtnText) playBtnText.textContent = "Play Tone";
    if (playBtnIcon) playBtnIcon.textContent = "▶";
    
    document.getElementById('btn-pitchpipe-play')?.classList.remove('playing');
    return;
  }
  
  try {
    if (!AppState.pitchpipeAudioCtx) {
      AppState.pitchpipeAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    if (AppState.pitchpipeAudioCtx.state === 'suspended') {
      AppState.pitchpipeAudioCtx.resume();
    }
    
    const ctx = AppState.pitchpipeAudioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(AppState.pitchpipeFreq, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    AppState.pitchpipeActiveOscillator = osc;
    
    const playBtnText = document.getElementById('pitchpipe-play-text');
    const playBtnIcon = document.getElementById('pitchpipe-play-icon');
    if (playBtnText) playBtnText.textContent = "Stop Tone";
    if (playBtnIcon) playBtnIcon.textContent = "■";
    
    document.getElementById('btn-pitchpipe-play')?.classList.add('playing');
  } catch (err) {
    console.error("Web Audio API not supported or blocked", err);
    alert("Could not start pitchpipe tone. Please check your browser audio settings.");
  }
}

function updatePitchpipeFrequency(freq, note) {
  AppState.pitchpipeFreq = freq;
  AppState.pitchpipeNote = note;
  
  const indicator = document.getElementById('pitchpipe-active-note');
  if (indicator) {
    indicator.textContent = `${note} (${Math.round(freq)} Hz)`;
  }

  // Update Gregorian stave note position
  const staveNote = document.getElementById('pitchpipe-stave-note');
  if (staveNote) {
    let yPos = 21; // G3 default
    if (note === 'F3') yPos = 26;
    else if (note === 'G3') yPos = 21;
    else if (note === 'A3') yPos = 16;
    else if (note === 'Bb3') yPos = 11;
    else if (note === 'C4') yPos = 6;
    staveNote.setAttribute('y', yPos);
  }
  
  if (AppState.pitchpipeActiveOscillator && AppState.pitchpipeAudioCtx) {
    const ctx = AppState.pitchpipeAudioCtx;
    AppState.pitchpipeActiveOscillator.frequency.setValueAtTime(freq, ctx.currentTime);
  }
  
  document.querySelectorAll('.pitch-btn').forEach(btn => {
    const btnNote = btn.getAttribute('data-note');
    btn.classList.toggle('active', btnNote === note);
  });
}

function setupPitchpipeBindings() {
  const playBtn = document.getElementById('btn-pitchpipe-play');
  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.preventDefault();
      togglePitchpipeTone();
    });
  }
  
  document.querySelectorAll('.pitch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const freq = parseFloat(btn.getAttribute('data-freq'));
      const note = btn.getAttribute('data-note');
      updatePitchpipeFrequency(freq, note);
    });
  });
  
  // Set initial active state in UI and stave
  updatePitchpipeFrequency(AppState.pitchpipeFreq, AppState.pitchpipeNote);
}

// ==========================================
// APP INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Load LocalStorage Settings
  loadSettings();
  
  // 2. Setup displaying dates
  updateAppForDate(AppState.currentDate);

  // Bind Date Navigation Events
  document.getElementById('btn-prev-day')?.addEventListener('click', () => {
    const d = new Date(AppState.currentDate);
    d.setDate(d.getDate() - 1);
    updateAppForDate(d);
  });

  document.getElementById('btn-next-day')?.addEventListener('click', () => {
    const d = new Date(AppState.currentDate);
    d.setDate(d.getDate() + 1);
    updateAppForDate(d);
  });

  document.getElementById('btn-today')?.addEventListener('click', () => {
    updateAppForDate(new Date());
  });

  // Open calendar modal when clicking date header
  document.getElementById('btn-open-calendar')?.addEventListener('click', () => {
    openCalendarModal();
  });
  
  // 3. Choose dynamic default office tab (Morning/Evening/Noonday/Compline) based on time
  selectDefaultOffice();

  // 4. Register event listeners for tabs
  document.querySelectorAll('#liturgy-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const office = btn.getAttribute('data-office');
      AppState.activeOffice = office;
      
      document.querySelectorAll('#liturgy-tabs .tab-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-office') === office);
      });

      // Visibility of Rite selector
      const riteContainer = document.getElementById('rite-selector-container');
      if (riteContainer) {
        riteContainer.style.visibility = (office === 'noonday' || office === 'compline') ? 'hidden' : 'visible';
      }

      // Sync active readings tab and database
      syncCurrentOfficeAppointedReadings();
    });
  });

  // Rite selector buttons
  document.querySelectorAll('.rite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rite = btn.getAttribute('data-rite');
      saveSetting('activeRite', rite);
      renderLiturgyFlow();
    });
  });

  // Podcast show selectors (Morning vs Evening side)
  document.querySelectorAll('.show-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const show = btn.getAttribute('data-show');
      AppState.activeShow = show;
      
      document.querySelectorAll('.show-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-show') === show);
      });

      // Reset search on tab change
      const searchInput = document.getElementById('podcast-search-input');
      const clearBtn = document.getElementById('podcast-search-clear-btn');
      if (searchInput && clearBtn) {
        searchInput.value = '';
        AppState.podcastSearchQuery = '';
        clearBtn.style.display = 'none';
      }

      loadPodcastSection();
    });
  });

  // 5. Initialize Modals and Audio engine
  setupModalBindings();
  setupAudioPlayerBindings();
  setupPodcastSearchBindings();
  setupCalendarSearch();
  setupCalendarNavButtons();
  setupPitchpipeBindings();

  // Mobile Nav tab event listeners
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pane = btn.getAttribute('data-pane');
      switchMobilePane(pane);
    });
  });

  // 6. Perform initial content rendering
  syncCurrentOfficeAppointedReadings(); // renders liturgy
  preloadPodcastFeeds(); // loads podcasts in the background
});
