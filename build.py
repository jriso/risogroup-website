import os
import shutil
from datetime import datetime

def check_required_files():
    """Check if all required files exist"""
    required_files = {
        'templates/index.html': 'Main webpage',
        'static/css/style.css': 'Styles',
        'static/js/main.js': 'JavaScript',
        'static/images/data-analytics.svg': 'Analytics icon',
        'static/images/data-warehouse.svg': 'Warehouse icon',
        'static/images/predictive-analytics.svg': 'Predictive analytics icon',
        'static/assets/rg-logo.png': 'Logo'
    }
    
    missing = []
    for file_path, description in required_files.items():
        if not os.path.exists(file_path):
            missing.append(f"{description} ({file_path})")
    
    if missing:
        print("\n❌ Missing required files:")
        for item in missing:
            print(f"   • {item}")
        return False
    return True

def create_build():
    """Create and set up build directory"""
    print("\n🏗️  Creating website build...")
    
    # Verify all files exist first
    if not check_required_files():
        print("\n⚠️  Please make sure all required files exist before building.")
        return False
    
    # Remove old build directory if it exists
    if os.path.exists('build'):
        shutil.rmtree('build')
    
    # Create new directory structure
    print("\n📁 Creating directories...")
    for dir_path in ['css', 'js', 'images', 'assets']:
        os.makedirs(os.path.join('build', dir_path))
        print(f"   ✓ Created: {dir_path}/")

def copy_files():
    """Copy all files to build directory"""
    print("\n📦 Copying files...")
    
    # Copy main HTML file
    shutil.copy2('templates/index.html', 'build/index.html')
    print("   ✓ Copied: index.html")
    
    # Copy static files
    files_to_copy = {
        'static/css/style.css': 'build/css/style.css',
        'static/js/main.js': 'build/js/main.js',
        'static/images/data-analytics.svg': 'build/images/data-analytics.svg',
        'static/images/data-warehouse.svg': 'build/images/data-warehouse.svg',
        'static/images/predictive-analytics.svg': 'build/images/predictive-analytics.svg',
        'static/assets/rg-logo.png': 'build/assets/rg-logo.png'
    }
    
    for src, dest in files_to_copy.items():
        shutil.copy2(src, dest)
        print(f"   ✓ Copied: {os.path.basename(src)}")

            project_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Riso Group - {project_name.replace('-', ' ').title()}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
    <style>
        .case-study {{
            max-width: 1000px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }}
        .content-sections {{
            max-width: 800px;
            margin: 0 auto;
        }}
        .challenge {{
            margin-bottom: 3rem;
        }}
        .challenge-title {{
            font-size: 2.5rem;
            font-weight: 700;
            color: #000;
            margin-bottom: 2.5rem;
            letter-spacing: -0.02em;
            line-height: 1.2;
        }}
        .challenge-description {{
            font-size: 1.2rem;
            line-height: 1.8;
            color: #333;
            margin-bottom: 3rem;
        }}
        .section {{
            margin: 4rem 0;
        }}
        .section-header {{
            font-size: 1.75rem;
            font-weight: 600;
            color: #000;
            margin-bottom: 1.5rem;
            letter-spacing: -0.01em;
        }}
        .section-content {{
            font-size: 1.1rem;
            line-height: 1.8;
            color: #555;
            margin-bottom: 2rem;
        }}
        .back-button {{
            display: inline-block;
            margin-top: 5rem;
            padding: 1rem 2rem;
            font-size: 1.1rem;
            background: #000;
            color: #fff;
            border: none;
            border-radius: 8px;
            text-decoration: none;
            transition: all 0.3s ease;
        }}
        .back-button:hover {{
            background: #222;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            color: #fff;
            text-decoration: none;
        }}
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container">
            <a class="navbar-brand" href="../index.html">
                <img src="../assets/rg-logo.png" alt="Riso Group" class="navbar-logo" height="40">
                <span class="navbar-title ms-2">Riso Group</span>
            </a>
        </div>
    </nav>

    <main class="mt-5 pt-5">
        <div class="container">
            <article class="case-study">
                <div class="content-sections">
                    <div class="challenge">
                        <h1 class="challenge-title">{project_name.replace('-', ' ').title()}</h1>
                        <div class="challenge-description">
                            Created comprehensive analytics dashboards providing merchants with actionable insights and key performance metrics for their e-commerce operations.
                        </div>
                    </div>

                    <div class="section">
                        <h2 class="section-header">Solution</h2>
                        <div class="section-content">
                            Our approach focused on implementing data-driven solutions that aligned with business objectives.
                        </div>
                    </div>

                    <div class="section">
                        <h2 class="section-header">Results</h2>
                        <div class="section-content">
                            The implementation led to significant improvements in operational efficiency and business outcomes.
                        </div>
                    </div>

                    <div class="text-center">
                        <a href="../index.html#engagements" class="back-button">
                            <i data-feather="arrow-left" class="me-2"></i>Back to Engagements
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </main>

    <footer class="footer mt-5 py-4 bg-light">
        <div class="container text-center">
            <p class="text-muted">
                &copy; {datetime.now().year} Riso Group, LLC. All rights reserved.<br>
                Made with 🍕 in New York ✈️ New Orleans
            </p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    <script src="../js/main.js"></script>
</body>
</html>

    """

            with open(f'build/consulting/{project}', 'w') as f:
                f.write(project_html)

if __name__ == '__main__':
    print("\n🚀 Building Riso Group Website")
    print("━━━━━━━━━━━━━━━━━━━━━━━━━")
    
    if create_build() and copy_files():
        print("\n✨ Website built successfully!")
        print("\nYou can find all files in the 'build' directory.")
        print("\nTo preview locally:")
        print("1. cd build")
        print("2. python -m http.server 8000")
        print("3. Open http://localhost:8000 in your browser")
    else:
        print("\n❌ Build failed. Please fix the errors and try again.")