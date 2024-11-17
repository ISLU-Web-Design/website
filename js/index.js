//Loading ao carregar a páginas
window.addEventListener('load', () => {
    // 3 segundos some a tela de loading
    setTimeout(() => {
        document.querySelector('.loading').style.display = 'none';
    },1500);
});


// Animação ao rolar a página
// Seleciona todas as seções com a classe "animate" 
const sections = document.querySelectorAll('.animate');

// Configura o Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Adiciona a classe "in-view"
        }
    });
}, {
    threshold: 0.2 // Ativa quando 20% da seção está visível
});

// Observa cada seção
sections.forEach((section) => observer.observe(section));
