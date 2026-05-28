const fs = require('fs');
const path = require('path');

const mergedJsPath = path.join(__dirname, 'merged.js');
let mergedJs = fs.readFileSync(mergedJsPath, 'utf8').replace(/\r/g, '');

let success = true;

// 1. Verify BCP_SUNDAY_COLLECTS_RITE1 exists
if (mergedJs.includes('const BCP_SUNDAY_COLLECTS_RITE1 = {')) {
  console.log('PASS: BCP_SUNDAY_COLLECTS_RITE1 traditional collects database successfully found in merged.js!');
} else {
  console.error('FAIL: BCP_SUNDAY_COLLECTS_RITE1 database NOT found in merged.js!');
  success = false;
}

// 2. Verify getSeasonalOrnamentHtml function exists
if (mergedJs.includes('function getSeasonalOrnamentHtml(')) {
  console.log('PASS: getSeasonalOrnamentHtml SVG flourish generator successfully found in merged.js!');
} else {
  console.error('FAIL: getSeasonalOrnamentHtml NOT found in merged.js!');
  success = false;
}

// 3. Verify Choral Pitchpipe functions exist
if (mergedJs.includes('function togglePitchpipeTone(') && mergedJs.includes('function setupPitchpipeBindings(')) {
  console.log('PASS: Choral Pitchpipe engine functions successfully found in merged.js!');
} else {
  console.error('FAIL: Choral Pitchpipe functions NOT found in merged.js!');
  success = false;
}

// 4. Verify DOMContentLoaded hook contains setupPitchpipeBindings
if (mergedJs.includes('setupPitchpipeBindings();')) {
  console.log('PASS: setupPitchpipeBindings() successfully hooked to DOMContentLoaded in merged.js!');
} else {
  console.error('FAIL: setupPitchpipeBindings() NOT hooked in merged.js!');
  success = false;
}

if (success) {
  console.log('\nALL PHASE 2 AUTOMATED CHECKS PASSED SUCCESSFULLY!');
  process.exit(0);
} else {
  console.error('\nSOME PHASE 2 CHECKS FAILED!');
  process.exit(1);
}
