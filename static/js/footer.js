// Shared dark footer — edit here to update all pages
(function () {
    var scriptSrc = document.currentScript.getAttribute('src');
    var base = scriptSrc.replace('static/js/footer.js', '');
    var el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML =
        '<footer class="footer py-5" style="background-color:#1a1a1a;position:relative;overflow:hidden;">' +
            '<img src="' + base + 'static/images/RG logo with transparency.png" alt="" ' +
                'style="position:absolute;right:-30px;bottom:-30px;width:180px;height:180px;opacity:0.08;pointer-events:none;">' +
            '<div class="container text-center" style="position:relative;">' +
                '<p style="color:rgba(255,255,255,0.5);margin:0;font-size:0.9rem;">' +
                    '&copy; 2026 Riso Group, LLC. All rights reserved.<br>' +
                    'Made with \uD83C\uDF55 in New York \u2708\uFE0F New Orleans' +
                '</p>' +
            '</div>' +
        '</footer>';
})();
