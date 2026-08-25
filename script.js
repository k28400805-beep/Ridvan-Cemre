```javascript
// ============================
// AÇILIŞ EKRANI
// ============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1800);

});


// ============================
// SCROLL ANİMASYONU
// ============================

const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});


sections.forEach((section) => {
    observer.observe(section);
});


// ============================
// NAVBAR SCROLL
// ============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(7, 24, 18, .85)";

    } else {

        nav.style.background = "rgba(7, 24, 18, .55)";

    }

});
```
