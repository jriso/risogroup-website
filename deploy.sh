#!/bin/bash

# Create a temporary directory for deployment
DEPLOY_DIR="deploy_$(date +%s)"
mkdir $DEPLOY_DIR

# Copy build contents
echo "Copying built files..."
cp -r build/* $DEPLOY_DIR/

# Initialize git repository
cd $DEPLOY_DIR
git init
git add .
git commit -m "Deploy to GitHub Pages"

echo ""
echo "==== Deployment Instructions ===="
echo "1. Create a new repository on GitHub"
echo "2. Run these commands in the $DEPLOY_DIR directory:"
echo "   git remote add origin YOUR_GITHUB_REPO_URL"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. In GitHub repository settings:"
echo "   - Go to Pages section"
echo "   - Select 'main' as source branch"
echo "   - Save to deploy"
echo ""
echo "For Cloudflare Pages:"
echo "1. Go to Cloudflare Dashboard > Pages"
echo "2. Create a new project"
echo "3. Connect to your GitHub repository"
echo "4. Deploy (no build configuration needed)"
