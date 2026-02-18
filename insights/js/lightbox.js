// Lightbox for insight chart images
// Click any .insight-image-chart to view full-size in an overlay
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".insight-image-chart").forEach(function (img) {
        img.addEventListener("click", function () {
            var overlay = document.createElement("div");
            overlay.className = "insight-lightbox";
            var clone = document.createElement("img");
            clone.src = img.src;
            clone.alt = img.alt;
            overlay.appendChild(clone);
            document.body.appendChild(overlay);
            // trigger transition
            requestAnimationFrame(function () { overlay.classList.add("active"); });
            overlay.addEventListener("click", function () {
                overlay.classList.remove("active");
                setTimeout(function () { overlay.remove(); }, 200);
            });
        });
    });
});
