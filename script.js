```javascript
// ==========================================
// Rıdvan & Cemre
// Sude Sitesi
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------------
    // SCROLL ANİMASYONLARI
    // ------------------------------------------

    const elements = document.querySelectorAll(".reveal");

    if (elements.length > 0) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.1
        });

        elements.forEach(function (element) {
            observer.observe(element);
        });

    }


    // ------------------------------------------
    // NAVBAR SCROLL EFEKTİ
    // ------------------------------------------

    const navbar = document.querySelector("nav");

    function navbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", navbarScroll);

    navbarScroll();


    // ------------------------------------------
    // MENÜ LİNKLERİ
    // ------------------------------------------

    const menuLinks = document.querySelectorAll(
        'nav a[href^="#"]'
    );

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const id = link.getAttribute("href");

            if (!id || id === "#") {
                return;
            }

            const target = document.querySelector(id);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // ------------------------------------------
    // HİKÂYE KARTLARI
    // ------------------------------------------

    const cards = document.querySelectorAll(
        ".story-card, .person-card, .place-card"
    );

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "";

        });

    });


    // ------------------------------------------
    // HERO HAREKET EFEKTİ
    // ------------------------------------------

    const hero = document.querySelector(".hero");

    if (hero && window.innerWidth > 700) {

        hero.addEventListener("mousemove", function (event) {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 8;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 8;

            hero.style.transform =
                `translate(${x}px, ${y}px)`;

        });

        hero.addEventListener("mouseleave", function () {

            hero.style.transform = "";

        });

    }


    // ------------------------------------------
    // SAYFA HAZIR
    // ------------------------------------------

    console.log(
        "Rıdvan & Cemre sitesi başarıyla yüklendi 🌳"
    );

});


// ==========================================
// SAYFA TAMAMEN YÜKLENDİ
// ==========================================

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});
```
