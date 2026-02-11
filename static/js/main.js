document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Handle navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 100;

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Hide navbar logo when hero is visible
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        navbar.classList.add('navbar-hero-visible');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navbar.classList.add('navbar-hero-visible');
                } else {
                    navbar.classList.remove('navbar-hero-visible');
                }
            });
        }, { threshold: 0.4 });
        observer.observe(heroSection);
    }

    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }, 5000);
    });

    // Smooth scroll for anchor links + close mobile menu
    const navbarCollapse = document.querySelector('#navbarNav');
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href !== "#") {
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
                }
            }
        });
    });
});
