```javascript
// Açılış ekranını kaldır
window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }
    }, 1500);
});


// Sayfadaki bölümlerin animasyonu
const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.1
});

sections.forEach(function (section) {
    observer.observe(section);
});


// Navbar animasyonu
window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(7, 24, 18, .90)";
    } else {
        nav.style.background = "rgba(7, 24, 18, .55)";
    }

});
```
