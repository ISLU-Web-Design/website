//Loading ao carregar a páginas
window.addEventListener('load', () => {
    // 3 segundos some a tela de loading
    setTimeout(() => {
        document.querySelector('.loading').style.display = 'none';
    },1500);

    // Animação dos números
    counter();
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

function counter() {
    // Animação dos números com a classe .counter 
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Velocidade da animação 
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target'); // Valor final
            const count = +counter.innerText.replace('+', ''); // Valor atual (removendo "+")
            const inc = target / speed; // Incremento por passo 

            if (count < target) {
                counter.innerText = '+' + Math.ceil(count + inc); // Atualiza o valor
                setTimeout(updateCount, 40); // Chama novamente a função
            } else {
                counter.innerText = '+' + target; // Define o valor final
            }
        };

        updateCount();
    });
}