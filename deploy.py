import os
import shutil
from datetime import datetime

# List of required files and their source locations
REQUIRED_FILES = {
    # Images
    'static/images/data-analytics.svg': 'images/data-analytics.svg',
    'static/images/data-warehouse.svg': 'images/data-warehouse.svg',
    'static/images/predictive-analytics.svg': 'images/predictive-analytics.svg',
    # Assets
    'static/assets/rg-logo.png': 'assets/rg-logo.png',
    # Styles and Scripts
    'static/css/style.css': 'css/style.css',
    'static/js/main.js': 'js/main.js',
    # HTML files
    'templates/index.html': 'index.html',
    'templates/contact.html': 'contact.html'
}

def verify_required_files():
    """Check if all required files exist"""
    missing_files = []
    for src_path in REQUIRED_FILES:
        if not os.path.exists(src_path):
            missing_files.append(src_path)
    return missing_files

def create_deploy_structure():
    """Create deployment directory structure"""
    deploy_dir = f"deploy_{int(datetime.now().timestamp())}"
    
    # Create main directory
    os.makedirs(deploy_dir, exist_ok=True)
    
    # Create necessary subdirectories
    subdirs = ['assets', 'images', 'css', 'js', 'consulting']
    for subdir in subdirs:
        os.makedirs(os.path.join(deploy_dir, subdir), exist_ok=True)
    
    return deploy_dir

def copy_static_files(deploy_dir):
    """Copy all required files to deployment directory"""
    # First verify all required files exist
    missing_files = verify_required_files()
    if missing_files:
        print("\n❌ Error: Some required files are missing:")
        for file in missing_files:
            print(f"   • {file}")
        print("\nPlease make sure all required files exist before deploying.")
        return False
    
    # Copy all required files
    print("\n📁 Copying files:")
    for src_path, dest_rel_path in REQUIRED_FILES.items():
        dest_path = os.path.join(deploy_dir, dest_rel_path)
        # Create destination directory if needed
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        # Copy the file
        shutil.copy2(src_path, dest_path)
        print(f"   ✓ {os.path.basename(src_path)}")
    
    return True

def create_deployment():
    """Create complete deployment package"""
    print("\n📋 Required Files for Deployment")
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print("Here are the files needed for your website:")
    for src_path in REQUIRED_FILES:
        print(f"   • {src_path}")
    
    input("\nPress Enter to continue with deployment...")
    
    print("\n🚀 Creating GitHub Pages Deployment")
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    
    print("📦 Step 1/2: Creating deployment package...")
    deploy_dir = create_deploy_structure()
    if not copy_static_files(deploy_dir):
        return
    
    print("\n✅ All files copied successfully!")
    
    print("\n🌟 Step 2/2: GitHub Pages Setup")
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print("\n1️⃣  Create a new repository:")
    print("   ▸ Go to: https://github.com/new")
    print("   ▸ Choose a repository name")
    print("   ▸ Make it Public")
    print("   ▸ Don't add any files")
    
    print("\n2️⃣  Open terminal and run:")
    print("   " + "─" * 50)
    print(f"""   cd {deploy_dir}
   git init
   git add .
   git commit -m "Initial deployment"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main""")
    print("   " + "─" * 50)
    
    print("\n3️⃣  Enable GitHub Pages:")
    print("   ▸ Go to repository Settings")
    print("   ▸ Click Pages in the sidebar")
    print("   ▸ Select 'main' as the source branch")
    print("   ▸ Click Save")
    
    print("\n🎉 Almost done!")
    print("━━━━━━━━━━━━━")
    print("Your site will be live at: https://YOUR_USERNAME.github.io/REPO_NAME")
    print("\n💡 Tip: It may take a few minutes for your site to appear after enabling Pages")
    
    return deploy_dir

if __name__ == "__main__":
    create_deployment()
