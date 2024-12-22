import os
import sys
import pkg_resources

def check_python_version():
    """Check if Python version is compatible"""
    required_version = (3, 7)
    current_version = sys.version_info[:2]
    
    if current_version < required_version:
        print(f"❌ Python {required_version[0]}.{required_version[1]} or higher is required")
        print(f"   Current version: {current_version[0]}.{current_version[1]}")
        return False
    return True

def check_required_packages():
    """Check if required packages are installed"""
    required_packages = [
        'flask',
        'flask-sqlalchemy',
        'flask-login',
        'werkzeug',
        'python-slugify'
    ]
    
    missing_packages = []
    for package in required_packages:
        try:
            pkg_resources.require(package)
        except pkg_resources.DistributionNotFound:
            missing_packages.append(package)
    
    return missing_packages

def list_required_files():
    """List all files needed for local development"""
    required_files = {
        'Python Files': [
            'app.py',
            'main.py',
            'models.py'
        ],
        'Templates': [
            'templates/base.html',
            'templates/index.html',
            'templates/contact.html'
        ],
        'Static Files': [
            'static/css/style.css',
            'static/js/main.js',
            'static/images/data-analytics.svg',
            'static/images/data-warehouse.svg',
            'static/images/predictive-analytics.svg',
            'static/assets/rg-logo.png'
        ]
    }
    
    print("\n📋 Required Files and Directories")
    print("═══════════════════════════════")
    
    for category, files in required_files.items():
        print(f"\n{category}:")
        for file in files:
            print(f"  • {file}")
            
    return required_files

def main():
    """Main setup function"""
    print("🔍 Checking Local Development Setup")
    print("══════════════════════════════════")
    
    # Check Python version
    if not check_python_version():
        return
    
    print("\n✅ Python version check passed")
    
    # Check required packages
    missing_packages = check_required_packages()
    if missing_packages:
        print("\n❌ Missing Python packages:")
        for package in missing_packages:
            print(f"   • {package}")
        print("\n💡 Install missing packages with:")
        print(f"   pip install {' '.join(missing_packages)}")
    else:
        print("✅ All required packages are installed")
    
    # List required files
    required_files = list_required_files()
    
    print("\n🚀 Local Development Instructions")
    print("═══════════════════════════════")
    print("\n1. Create the directory structure shown above")
    print("2. Download and place all files in their respective directories")
    print("3. Open terminal and navigate to your project directory")
    print("4. Run the development server:")
    print("   python main.py")
    print("\n💡 Your website will be available at: http://localhost:5000")
    
if __name__ == "__main__":
    main()
