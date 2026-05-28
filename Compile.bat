@echo off
title Compile Daily Office
echo.
echo  ✝  Compiling Daily Office changes...
echo.

:: Run the JavaScript merge script
node scripts/merge_script.js

:: Run the HTML compiler
node scripts/perform_merge.js

:: Copy the compiled build directly to the website folder as index.html
copy "build\Daily Office.html" "website\index.html" /Y

echo.
echo  ✓  Compilation complete! 
echo  "website/index.html" is updated and ready.
echo.
pause
