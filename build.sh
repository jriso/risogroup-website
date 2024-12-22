#!/bin/bash

# Clean and create build directory
rm -rf build
python build.py

# Set proper permissions
chmod -R 755 build

echo "Static site is ready for deployment!"
echo "The 'build' directory contains all necessary files for GitHub Pages or Cloudflare Pages."
echo ""
echo "Deployment options:"
echo "1. GitHub Pages: Push to a repository and enable Pages in settings"
echo "2. Cloudflare Pages: Create a new project and connect your repository"
