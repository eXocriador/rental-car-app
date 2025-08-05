#!/bin/bash

# Git commit and push script
# Usage: ./git-commit.sh "Your commit message"

# Check if commit message is provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./git-commit.sh \"Your commit message\""
    exit 1
fi

# Store the commit message
COMMIT_MESSAGE="$1"

echo "🚀 Starting git operations..."

# Add all files
echo "📁 Adding all files..."
git add .

# Check if there are any changes to commit
if git diff --cached --quiet; then
    echo "⚠️  No changes to commit"
    exit 0
fi

# Commit with the provided message
echo "💾 Committing with message: \"$COMMIT_MESSAGE\""
git commit -m "$COMMIT_MESSAGE"

# Check if commit was successful
if [ $? -eq 0 ]; then
    echo "✅ Commit successful"
    
    # Push to remote repository
    echo "📤 Pushing to remote repository..."
    git push
    
    if [ $? -eq 0 ]; then
        echo "✅ Push successful"
        echo "🎉 All operations completed successfully!"
    else
        echo "❌ Push failed"
        exit 1
    fi
else
    echo "❌ Commit failed"
    exit 1
fi 