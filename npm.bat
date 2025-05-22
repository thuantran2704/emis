@echo off
REM Full path to your portable Node.js folder
set "NODE_DIR=C:\Users\tqt\Downloads\node\node"

REM Add Node directory to PATH temporarily for this script
set "PATH=%NODE_DIR%;%PATH%"

REM Use node.exe to run npm-cli.js with all given arguments
"%NODE_DIR%\node.exe" "%NODE_DIR%\node_modules\npm\bin\npm-cli.js" %*
