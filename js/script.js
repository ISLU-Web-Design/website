//import projetos from "./itensProjects.js";
import { projetos } from './itensProjects.js';

// Seleciona o container onde os cards serão inseridos
const container = document.getElementById("project-container");

// Gera os cards de cada projeto na página index.html (somente os 6 primeiros)
projetos.slice(0, 6).forEach(projeto => {
    // Cria a coluna com a classe "col-md-4"
    const col = document.createElement("div");
    col.classList.add("col-md-4");
    col.classList.add("col-6");
    col.classList.add("mb-2");

    // Cria o card com as informações do projeto
    const card = document.createElement("div");
    card.classList.add("card");

    // Define o conteúdo do card
    card.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.titulo}" class="card-img-top">
        <div class="more-info text-center">
            <h5 class="card-title"><b>${projeto.titulo}</b></h5>
            <p class="card-text">${projeto.descricao}</p>
            <a href="${projeto.link}" class="btn">
                <i class="fas fa-link" style="color: #fff;"></i>
            </a>
        </div>
    `;

    // Adiciona o card dentro da coluna
    col.appendChild(card);

    // Adiciona a coluna ao container
    container.appendChild(col);
});



// Services 
// Array com os URLs das imagens
const logos = [
    "img/services/1.svg",
    "img/services/2.svg",
    "img/services/3.svg",
    "img/services/4.svg",
    "img/services/5.svg",
    "img/services/6.svg",
    "img/services/7.svg",
    "img/services/8.svg"
];

// Seleciona o contêiner do carrossel
const carousel = document.getElementById('carousel');

// Função para criar e adicionar as imagens ao carrossel
function populateCarousel(images) {
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Serviço";
        carousel.appendChild(img);
    });
    // Duplica as imagens para criar o efeito de loop infinito
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Serviço";
        carousel.appendChild(img);
    });
}

// Alimenta o carrossel com as imagens
populateCarousel(logos);
