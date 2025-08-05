@echo off
REM Git commit and push script for Windows
REM Usage: git-commit.bat "Your commit message"

REM Check if commit message is provided
if "%~1"=="" (
    echo Error: Please provide a commit message
    echo Usage: git-commit.bat "Your commit message"
    exit /b 1
)

REM Store the commit message
set COMMIT_MESSAGE=%~1

echo 🚀 Starting git operations...

REM Add all files
echo 📁 Adding all files...
git add .

REM Check if there are any changes to commit
git diff --cached --quiet
if %ERRORLEVEL% EQU 0 (
    echo ⚠️  No changes to commit
    exit /b 0
)

REM Commit with the provided message
echo 💾 Committing with message: "%COMMIT_MESSAGE%"
git commit -m "%COMMIT_MESSAGE%"

REM Check if commit was successful
if %ERRORLEVEL% EQU 0 (
    echo ✅ Commit successful
    
    REM Push to remote repository
    echo 📤 Pushing to remote repository...
    git push
    
    if %ERRORLEVEL% EQU 0 (
        echo ✅ Push successful
        echo 🎉 All operations completed successfully!
    ) else (
        echo ❌ Push failed
        exit /b 1
    )
) else (
    echo ❌ Commit failed
    exit /b 1
) 