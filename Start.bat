@echo off
title Daily Office App
echo.
echo  ✝  Starting Daily Office App...
echo.
start "" "http://127.0.0.1:8000"
npx http-server website -p 8000 --cors
