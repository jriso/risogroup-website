// Shared navbar for subpages — edit here to update all pages
// Not used on the homepage (index.html), which has its own inline navbar.
(function () {
    var scriptSrc = document.currentScript.getAttribute('src');
    var base = scriptSrc.replace('static/js/navbar.js', '');

    // Determine section links based on current page location
    var path = window.location.pathname;
    var insightsHref = base + 'insights/';
    if (path.indexOf('/insights/') !== -1) {
        insightsHref = './';
    }
    var projectsHref = base + 'projects/';
    if (/\/projects\/[^/]*$/.test(path)) {
        projectsHref = './';
    }

    var el = document.getElementById('site-navbar');
    if (!el) return;

    el.innerHTML =
        '<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">' +
            '<div class="container">' +
                '<a class="navbar-brand" href="' + base + '">' +
                    '<img src="' + base + 'static/assets/rg-logo.png" alt="Riso Group" class="navbar-logo" height="40">' +
                    '<span class="navbar-title ms-2">Riso Group</span>' +
                '</a>' +
                '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">' +
                    '<span class="navbar-toggler-icon"></span>' +
                '</button>' +
                '<div class="collapse navbar-collapse" id="navbarNav">' +
                    '<ul class="navbar-nav ms-auto">' +
                        '<li class="nav-item">' +
                            '<a class="nav-link" href="' + base + '#capabilities">Capabilities</a>' +
                        '</li>' +
                        '<li class="nav-item">' +
                            '<a class="nav-link" href="' + insightsHref + '">Insights</a>' +
                        '</li>' +
                        '<li class="nav-item">' +
                            '<a class="nav-link" href="' + base + '#case-studies">Case Studies</a>' +
                        '</li>' +
                        '<li class="nav-item">' +
                            '<a class="nav-link" href="' + base + '#james">James</a>' +
                        '</li>' +
                        '<li class="nav-item">' +
                            '<a class="nav-link" href="' + projectsHref + '">Projects</a>' +
                        '</li>' +
                        '<li class="nav-item">' +
                            '<a class="nav-link" href="' + base + '#contact">Get in Touch</a>' +
                        '</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</nav>';
})();
