document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no rodapé
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Animação simples para os números estatísticos
    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Anima os números quando a seção é visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue('stat1', 0, 10000, 2000);
                animateValue('stat2', 0, 99, 1500);
                animateValue('stat3', 0, 7, 1000);
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.5});
    
    const statsSection = document.querySelector('.highlight');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Adiciona classe de hover aos cards de preço
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) { 
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            }
        });
    });

});

