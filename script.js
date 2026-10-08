/* =========================================================
   SAI SANJIVANI MULTI FITNESS HEALTH GYM
========================================================= */


/* PRELOADER */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 500);

});


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = mobileMenu.querySelectorAll("a");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("active");
        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");

    });

});


/* HEADER SCROLL EFFECT */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(8,8,8,.96)";
    } else {
        header.style.background = "rgba(8,8,8,.8)";
    }

});


/* SIMPLE REVEAL ANIMATION */

const revealElements = document.querySelectorAll(
    ".section, .training-card, .review-card, .facility-item, .stat"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


/* CLOSE MENU WITH ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        menuBtn.classList.remove("active");
        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");

    }

});