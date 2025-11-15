@echo off
echo ========================================
echo Preparing files for server deployment
echo ========================================
echo.

REM Create deploy folder
if exist deploy-folder rmdir /s /q deploy-folder
mkdir deploy-folder

REM Copy built index.html
echo Copying index.html...
copy /Y "build\index.html" "deploy-folder\index.html"

REM Copy 404.html
echo Copying 404.html...
copy /Y "build\404.html" "deploy-folder\404.html"

REM Copy assets folder
echo Copying assets folder...
xcopy /E /I /Y "build\assets" "deploy-folder\assets"

echo.
echo ========================================
echo Deployment files ready!
echo ========================================
echo.
echo Next steps:
echo 1. Upload ALL files from "deploy-folder" to /huraiza/ on your server
echo 2. Make sure index.html is directly in /huraiza/ (not in a subfolder)
echo 3. Make sure assets folder is at /huraiza/assets/
echo.
echo Files to upload:
dir /B deploy-folder
dir /B deploy-folder\assets
echo.
pause

