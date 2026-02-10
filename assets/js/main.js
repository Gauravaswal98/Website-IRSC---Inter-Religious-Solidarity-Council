// IRSC Site Logic
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navItems = document.querySelector('.md\\:flex.space-x-8');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // Logic to toggle a mobile menu drawer could be implemented here
            console.log('Mobile menu toggled');
        });
    }

    // Scroll Observer for Navbar Shadow
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('shadow-md');
        } else {
            nav.classList.remove('shadow-md');
        }
    });

    // Simple Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message. An IRSC representative will reach out shortly.');
            contactForm.reset();
        });
    }
});