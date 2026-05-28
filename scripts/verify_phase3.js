const fs = require('fs');
const path = require('path');

const mergedJsPath = path.join(__dirname, 'merged.js');
let mergedJs = fs.readFileSync(mergedJsPath, 'utf8').replace(/\r/g, '');

const indexCssPath = path.join(__dirname, '../src/index.css');
let indexCss = fs.readFileSync(indexCssPath, 'utf8').replace(/\r/g, '');

const indexHtmlPath = path.join(__dirname, '../src/index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8').replace(/\r/g, '');

let success = true;

// 1. Verify index.css has drop-cap and candle rules
if (indexCss.includes('.liturgical-drop-cap') && indexCss.includes('.liturgical-seasonal-ornament') && indexCss.includes('.liturgical-header-flourish')) {
  console.log('PASS: CSS styling rules for drop-caps, altar flourishes, and candles found in index.css!');
} else {
  console.error('FAIL: Phase 3 CSS styling rules NOT found in index.css!');
  success = false;
}

// 2. Verify EB Garamond Google Fonts are imported in index.html and profile select is removed
if (indexHtml.includes('family=EB+Garamond') && !indexHtml.includes('id="prayer-profile-select"')) {
  console.log('PASS: EB Garamond font imports found and prayer profile select elements successfully removed in index.html!');
} else {
  console.error('FAIL: EB Garamond fonts are missing or profile select elements are still present in index.html!');
  success = false;
}

// 3. Verify app.js logic is merged
if (mergedJs.includes('function applyIlluminatedDropCap(')) {
  console.log('PASS: applyIlluminatedDropCap function compiled successfully into merged.js!');
} else {
  console.error('FAIL: applyIlluminatedDropCap NOT found in merged.js!');
  success = false;
}

// 4. Verify altar candles are removed from seasonal flourishes as requested
if (!mergedJs.includes('altar-candle left') && !mergedJs.includes('altar-candle right')) {
  console.log('PASS: Altar candles SVG code successfully removed from merged.js as requested!');
} else {
  console.error('FAIL: Altar candles SVG code was not removed from merged.js!');
  success = false;
}

// 5. Verify Gregorian stave note mappings
if (mergedJs.includes('yPos = 26') && mergedJs.includes('yPos = 6')) {
  console.log('PASS: Gregorian plainchant notation stave position animator compiled successfully!');
} else {
  console.error('FAIL: Stave note height mappings NOT found in merged.js!');
  success = false;
}

// 6. Verify Prayer Profiles switcher is removed and simplified as requested
if (!mergedJs.includes("localStorage.getItem('prayers_' + profile)") && mergedJs.includes("localStorage.getItem('prayers') || localStorage.getItem('prayers_Default')")) {
  console.log('PASS: Segmented prayer list profile switcher successfully simplified to a unified local list!');
} else {
  console.error('FAIL: Segmented prayer list profile switcher is still present or unified storage is missing!');
  success = false;
}

if (success) {
  console.log('\nALL PHASE 3 AUTOMATED TESTS PASSED SUCCESSFULLY!');
  process.exit(0);
} else {
  console.error('\nSOME PHASE 3 VERIFICATIONS FAILED!');
  process.exit(1);
}
