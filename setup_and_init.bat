@echo off
rem Add local Node folder to PATH for this script
set "PATH=C:\temp\node\node-v20.15.0-win-x64;%PATH%"
rem Ignore engine checks for npm
set "npm_config_ignore_engines=true"
rem Run Astro initializer (compatible Astro 4.10.0 for Node 20)
"C:\temp\node\node-v20.15.0-win-x64\npm.cmd" init astro@4.10.0 . -- --template basics --install --typescript
