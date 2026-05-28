const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../src/index.html');
const indexCssPath = path.join(__dirname, '../src/index.css');
const psalterJsonPath = path.join(__dirname, '../data/psalter.json');
const dolYear1Path = path.join(__dirname, '../data/dol-year-1.json');
const dolYear2Path = path.join(__dirname, '../data/dol-year-2.json');
const dolHolyDaysPath = path.join(__dirname, '../data/dol-holy-days.json');
const mergedScriptPath = path.join(__dirname, 'merged.js');
const outputHtmlPath = path.join(__dirname, '../build/Daily Office.html');

try {
  console.log('Reading source files...');
  let html = fs.readFileSync(indexHtmlPath, 'utf8');
  const css = fs.readFileSync(indexCssPath, 'utf8');
  const psalterJson = fs.readFileSync(psalterJsonPath, 'utf8');
  const dolYear1Json = fs.readFileSync(dolYear1Path, 'utf8');
  const dolYear2Json = fs.readFileSync(dolYear2Path, 'utf8');
  const dolHolyDaysJson = fs.readFileSync(dolHolyDaysPath, 'utf8');
  const mergedScript = fs.readFileSync(mergedScriptPath, 'utf8');

  console.log('Replacing stylesheet reference...');
  const styleBlock = `<style>\n${css}\n</style>`;
  html = html.replace('<link rel="stylesheet" href="index.css">', styleBlock);

  console.log('Replacing script tag reference with inline script containing BcpPsalter, lectionary databases, and merged script...');
  const scriptBlock = `<script>
// ============================================================
// BCP PSALTER DATA
// ============================================================
const BcpPsalter = ${psalterJson.trim()};

// ============================================================
// BCP DAILY OFFICE LECTIONARY DATA
// ============================================================
const DolYearOne = ${dolYear1Json.trim()};
const DolYearTwo = ${dolYear2Json.trim()};
const DolHolyDays = ${dolHolyDaysJson.trim()};

${mergedScript}
</script>`;
  html = html.replace('<script type="module" src="app.js"></script>', scriptBlock);

  console.log('Writing monolithic Daily Office.html...');
  fs.writeFileSync(outputHtmlPath, html, 'utf8');
  console.log('Successfully generated monolithic Daily Office.html!');
} catch (e) {
  console.error('Error during perform_merge:', e);
  process.exit(1);
}
