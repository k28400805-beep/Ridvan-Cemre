```javascript
// ======================================
// RıDVAN & CEMRE - SCRIPT.JS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ==================================
    // SCROLL ANİMASYONLARI
    // ==================================

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    // ==================================
    // NAVBAR
    // ==================================

    const navbar = document.querySelector("nav");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    // ==================================
    // YUMUŞAK MENÜ GEÇİŞLERİ
    // ==================================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // ==================================
    // HERO PARLAKLIK EFEKTİ
    // ==================================

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.addEventListener("mousemove", (event) => {

            const x = (event.clientX / window.innerWidth - 0.5) * 10;
            const y = (event.clientY / window.innerHeight - 0.5) * 10;

            hero.style.transform =
                `translate(${x}px, ${y}px)`;

        });

        hero.addEventListener("mouseleave", () => {

            hero.style.transform = "translate(0, 0)";

        });

    }


    // ==================================
    // KARTLARA HOVER EFEKTİ
    // ==================================

    const cards = document.querySelectorAll(
        ".person-card, .story-card, .place-card"
    );

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = "transform .3s ease";

        });

    });

});


// ======================================
// SAYFA TAM YÜKLENDİĞİNDE
// ======================================

window.addEventListener("load", () => {

    console.log("Rıdvan & Cemre sitesi hazır! 🌳");

});
```
