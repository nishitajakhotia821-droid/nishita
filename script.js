/*=========================================
VS CODE ACADEMY
script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    MOBILE MENU
    =========================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });

    }

    /*=========================================
    SMOOTH SCROLL
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*=========================================
    BACK TO TOP
    =========================================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=========================================
    SCROLL PROGRESS BAR
    =========================================*/

    const progress = document.querySelector(".scroll-progress");

    window.addEventListener("scroll", () => {

        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

        const progressHeight = (window.pageYOffset / totalHeight) * 100;

        if (progress) {

            progress.style.width = progressHeight + "%";

        }

    });

    /*=========================================
    FAQ ACCORDION
    =========================================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            item.classList.toggle("active");

            const answer = item.querySelector(".faq-answer");

            if (item.classList.contains("active")) {

                answer.style.maxHeight = answer.scrollHeight + "px";

            } else {

                answer.style.maxHeight = null;

            }

        });

    });

    /*=========================================
    COUNTER
    =========================================*/

    const counters = document.querySelectorAll(".counter");

    const runCounter = () => {

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            const speed = target / 200;

            const update = () => {

                let count = +counter.innerText;

                if (count < target) {

                    counter.innerText = Math.ceil(count + speed);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target.toLocaleString();

                }

            };

            update();

        });

    };

    let counterStarted = false;

    window.addEventListener("scroll", () => {

        const stats = document.querySelector(".statistics");

        if (!stats) return;

        if (!counterStarted && window.scrollY > stats.offsetTop - 500) {

            counterStarted = true;

            runCounter();

        }

    });

    /*=========================================
    SCROLL REVEAL
    =========================================*/

    const revealElements = document.querySelectorAll(

        ".glass-card,.feature-card,.feature-box,.language-card,.extension-card,.stats-card,.roadmap-step,.debug-card,.tip-box,.testimonial-card"

    );

    const reveal = () => {

        const trigger = window.innerHeight - 100;

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < trigger) {

                el.classList.add("show");

            }

        });

    };

    window.addEventListener("scroll", reveal);

    reveal();

    /*=========================================
    ACTIVE NAV LINK
    =========================================*/

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (pageYOffset >= top && pageYOffset < top + height) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*=========================================
    TYPING EFFECT
    =========================================*/

    const heroTitle = document.querySelector(".hero h1 span");

    if (heroTitle) {

        const text = heroTitle.innerText;

        heroTitle.innerText = "";

        let i = 0;

        function typing() {

            if (i < text.length) {

                heroTitle.innerHTML += text.charAt(i);

                i++;

                setTimeout(typing, 90);

            }

        }

        typing();

    }

    /*=========================================
    DARK MODE
    =========================================*/

    const darkToggle = document.createElement("button");

    darkToggle.innerHTML = "🌙";

    darkToggle.id = "darkToggle";

    document.body.appendChild(darkToggle);

    Object.assign(darkToggle.style, {

        position: "fixed",
        bottom: "100px",
        right: "30px",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
        zIndex: "999",
        background: "#0F172A",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,.2)"

    });

    darkToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

    });

});

/*=========================================
DARK MODE STYLES
=========================================*/

const style = document.createElement("style");

style.innerHTML = `

.dark-mode{

background:#0F172A!important;
color:#fff!important;

}

.dark-mode section{

background:#0F172A!important;

}

.dark-mode .glass-card,
.dark-mode .feature-card,
.dark-mode .feature-box,
.dark-mode .language-card,
.dark-mode .stats-card,
.dark-mode .extension-card,
.dark-mode .debug-card,
.dark-mode .tip-box,
.dark-mode .roadmap-step,
.dark-mode .testimonial-card,
.dark-mode .faq-item,
.dark-mode table,
.dark-mode .contact-form,
.dark-mode .info-card{

background:#1E293B!important;
color:#fff!important;

}

.dark-mode h1,
.dark-mode h2,
.dark-mode h3{

color:#fff!important;

}

.dark-mode p,
.dark-mode li,
.dark-mode td,
.dark-mode th{

color:#CBD5E1!important;

}

.dark-mode .header{

background:rgba(15,23,42,.9)!important;

}

.dark-mode .nav-links a{

color:#fff!important;

}

`;

document.head.appendChild(style);