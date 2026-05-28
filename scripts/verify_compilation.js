const fs = require('fs');
const path = require('path');

const mergedJsPath = path.join(__dirname, 'merged.js');
let mergedJs = fs.readFileSync(mergedJsPath, 'utf8');

// Strip carriage returns for robust matching
mergedJs = mergedJs.replace(/\r/g, '');

const targetStr = 'if (feast) {\n      updateSaintBiographySidebar(feast, isPrincipalOrSundayPrecedence);\n    } else if (transferredFeast) {\n      updateSaintBiographySidebar(transferredFeast, false, true, yesterdayName);\n    } else {\n      updateSaintBiographySidebar(null);\n    }';

if (mergedJs.includes(targetStr)) {
  console.log('PASS: The biography display logic compiled successfully into merged.js (resilient match)!');
  process.exit(0);
} else {
  console.error('FAIL: The biography display logic was NOT found in merged.js!');
  process.exit(1);
}
