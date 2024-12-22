import os
from flask import Flask, render_template, request, flash, redirect, url_for, abort
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from werkzeug.utils import secure_filename
from flask_mail import Mail, Message
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Configure upload folder
UPLOAD_FOLDER = os.path.join('static', 'uploads')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'svg'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)
app = Flask(__name__)

# Configuration
app.secret_key = os.environ.get("FLASK_SECRET_KEY") or "dev_key_only_for_development"
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL", "sqlite:///riso.db")
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_recycle": 300,
    "pool_pre_ping": True,
}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SERVER_NAME'] = 'localhost:5000'

# Email Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_USERNAME')

mail = Mail(app)

# Ensure upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

db.init_app(app)

# Import routes after app initialization
from models import Project, ContactMessage
from flask_login import LoginManager
from werkzeug.security import generate_password_hash, check_password_hash
from slugify import slugify

from datetime import datetime

@app.route('/')
def index():
    # Load content from files
    with open('content/sections/capabilities.html', 'r') as f:
        capabilities_content = f.read()
    with open('content/sections/talent.html', 'r') as f:
        talent_content = f.read()
    
    projects = Project.query.order_by(Project.created_at.desc()).all()
    return render_template('index.html', 
                         projects=projects, 
                         capabilities_content=capabilities_content,
                         talent_content=talent_content,
                         year=datetime.now().year)

@app.route('/project/<slug>')
def project_detail(slug):
    try:
        with open(f'content/projects/{slug}.html', 'r') as f:
            content = f.read()
        return render_template('project_detail.html', 
                             content=content,
                             year=datetime.now().year)
    except FileNotFoundError:
        abort(404)

@app.route('/admin/projects', methods=['GET'])
def admin_projects():
    projects = Project.query.order_by(Project.created_at.desc()).all()
    return render_template('admin/projects.html', projects=projects)

@app.route('/admin/projects/new', methods=['GET', 'POST'])
def admin_new_project():
    if request.method == 'POST':
        title = request.form.get('title')
        content = request.form.get('content')
        category = request.form.get('category')
        slug = slugify(title)
        
        project = Project(
            title=title,
            content=content,
            category=category,
            slug=slug
        )
        
        # Handle image upload
        if 'image' in request.files:
            file = request.files['image']
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                project.image_url = url_for('static', filename=f'uploads/{filename}')
        
        db.session.add(project)
        db.session.commit()
        flash('Project created successfully!', 'success')
        return redirect(url_for('admin_projects'))
        
    return render_template('admin/new_project.html')



def create_sample_projects():
    """Create sample projects if none exist."""
    if not Project.query.first():
        projects = [
            {
                'title': 'Predictive LTV model Improved Meta spend efficiency x% for PLG company',
                'subtitle': 'Enhancing marketing ROI through data-driven predictions',
                'content': '''
                <p>Developed a sophisticated predictive lifetime value model that significantly enhanced marketing spend efficiency on Meta platforms.</p>
                <h3>Challenge</h3>
                <p>The client needed to optimize their marketing spend across Meta platforms by better understanding customer lifetime value early in the customer journey.</p>
                <h3>Solution</h3>
                <p>Implemented an advanced machine learning model that predicts customer LTV based on early behavioral signals, enabling more targeted marketing spend.</p>
                <h3>Results</h3>
                <p>Achieved significant improvement in marketing ROI through more efficient customer acquisition spending.</p>
                ''',
                'category': 'Data Science',
                'slug': 'predictive-ltv-model',
                'image_url': '/static/images/data-analytics.svg'
            },
            {
                'title': 'Merchant-facing metrics and dashboards for e-commerce SaaS solution',
                'subtitle': 'Empowering merchants with actionable insights',
                'content': '''
                <p>Created comprehensive analytics dashboards providing merchants with actionable insights and key performance metrics for their e-commerce operations.</p>
                <h3>Challenge</h3>
                <p>Merchants needed a clear view of their performance metrics and actionable insights to optimize their operations.</p>
                <h3>Solution</h3>
                <p>Designed and implemented intuitive dashboards that surface key metrics and insights in real-time.</p>
                <h3>Results</h3>
                <p>Enabled data-driven decision making for merchants, leading to improved operational efficiency.</p>
                ''',
                'category': 'Analytics',
                'slug': 'merchant-metrics-dashboard',
                'image_url': '/static/images/data-warehouse.svg'
            },
            {
                'title': 'Data warehouse for legal services company',
                'subtitle': 'Building a foundation for data-driven legal services',
                'content': '''
                <p>Designed and implemented a scalable data warehouse solution enabling efficient data management and analytics capabilities for legal service delivery.</p>
                <h3>Challenge</h3>
                <p>The client needed a centralized, efficient way to manage and analyze large volumes of legal service data.</p>
                <h3>Solution</h3>
                <p>Implemented a modern data warehouse architecture that consolidates data from multiple sources and enables efficient analysis.</p>
                <h3>Results</h3>
                <p>Significantly improved data accessibility and analysis capabilities, enabling better service delivery and decision-making.</p>
                ''',
                'category': 'Data Infrastructure',
                'slug': 'legal-data-warehouse',
                'image_url': '/static/images/predictive-analytics.svg'
            }
        ]
        
        for project_data in projects:
            project = Project(**project_data)
            db.session.add(project)
        
        db.session.commit()

# Create tables
with app.app_context():
    db.create_all()
    create_sample_projects()
