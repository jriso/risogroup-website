# Riso Group Website

Static website for Riso Group, LLC.

## Files You Need (All in Replit)

Here's where to find the essential files in your Replit project:

1. In the `templates` folder:
   - `index.html` (Your main webpage)

2. In the `static` folder:
   - `css/style.css` (Styling)
   - `js/main.js` (JavaScript)
   - `images/` (SVG files)
   - `assets/rg-logo.png` (Logo)

## How to Download from Replit

1. In Replit's file explorer (left sidebar):
   - Look for the `static` and `templates` folders
   - For each file you need:
     - Click the file to open it
     - Click the three dots (⋮) next to the file name
     - Select "Download"

2. Create these folders on your computer:
```
your-website/
├── static/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── assets/
└── templates/
```

3. Place the downloaded files in their corresponding folders.

## Local Development

1. To preview locally:
   - Simply open `templates/index.html` in your web browser
   - Or use Python's built-in server:
     ```bash
     python -m http.server 8000
     ```
   - Visit http://localhost:8000 in your browser

## Building for Deployment

1. Run the build script:
   ```bash
   python build.py
   ```
   This creates a `build` directory with your website ready for deployment.

2. Deploy the contents of the `build` directory to:
   - GitHub Pages
   - Cloudflare Pages
   - Any static hosting service
