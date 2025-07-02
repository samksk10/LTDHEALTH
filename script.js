// Animation du header au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Animation du texte hero
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('#hero p');
    heroText.classList.add('animate-text');
});

// Animation des liens de navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', (e) => {
        e.target.classList.add('link-hover');
    });

    link.addEventListener('mouseout', (e) => {
        e.target.classList.remove('link-hover');
    });
});

// Animation au défilement pour les sections
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Animation fade-in-up au scroll
document.addEventListener("DOMContentLoaded", function () {
    const fadeEls = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeEls.forEach(el => {
        observer.observe(el);
    });
});