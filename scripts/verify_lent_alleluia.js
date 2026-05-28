const fs = require('fs');
const path = require('path');

const mergedJsPath = path.join(__dirname, 'merged.js');
let mergedJs = fs.readFileSync(mergedJsPath, 'utf8').replace(/\r/g, '');

const targetStr = "season === 'lent' ? invit.doxology.replace(/\\s*Alleluia\\.?/gi, '') : invit.doxology";

if (mergedJs.includes(targetStr)) {
  console.log('PASS: Lent Alleluia suppression logic successfully verified in compiled merged.js!');
  process.exit(0);
} else {
  console.error('FAIL: Lent Alleluia suppression logic NOT found in merged.js!');
  process.exit(1);
}
