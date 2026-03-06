const watermelonBtn = document.getElementById('watermelonBtn');
const jsConfetti = new JSConfetti();

watermelonBtn.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🍉'],
        emojiSize: 80,
        confettiNumber: 20,
    });
});

// Tab title change on blur/focus
window.addEventListener('blur', () => {
    document.title = "Come back! 💥";
});
window.addEventListener('focus', () => {
    document.title = "Mohamed Adem Mosbah";
});

// Cursor glow
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
});

// Header scroll shadow
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
});

// Scroll reveal
const reveals = document.querySelectorAll('.about-card, .project-card, .tut-card, .section-title, .section-label, .contact-sub, .social-btn, .hero-content, .hero-avatar');

reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.navigation ul');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Close menu on link click
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navList.classList.remove('open'));
});
