document.addEventListener('DOMContentLoaded', () => {
    const cvButton = document.getElementById('viewCvBtn');

    // Click event for CV button
    cvButton.addEventListener('click', () => {
        alert('Opening CV...');
        // To link to a PDF, use: window.open('your-cv-file.pdf', '_blank');
    });

    // Entrance Animation for cards and profile
    const animatedElements = document.querySelectorAll('.info-card, .profile-wrapper');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 }); // ببدأ الأنيميشن لما يبين جزء من الكرت

    revealElements.forEach(el => scrollObserver.observe(el));
});