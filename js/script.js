//import projetos from "./itensProjects.js";
import { projetos } from './itensProjects.js';

// Seleciona o container onde os cards serão inseridos
const container = document.getElementById("project-container");

// se nao tiver nenhum projeto, exibe a mensagem

if (projetos.length == 0) { 
    const col = document.createElement("div");
    col.classList.add("col-md-12");
    col.classList.add("col-6");
    col.classList.add("mb-4");

    const card = document.createElement("div"); 

    card.innerHTML = `
        <div class="text-center">
            <h5 >
            <b>
                Novidades em breve!
            </b>
            </h5>
        </div>
    `;
    col.appendChild(card);
    container.appendChild(col);
}

// Gera os cards de cada projeto na página index.html (somente os 6 primeiros)
projetos.slice(0, 6).forEach(projeto => {
    // Cria a coluna com a classe "col-md-4"
    const col = document.createElement("div");
    col.classList.add("col-md-4");
    col.classList.add("col-6");
    col.classList.add("mb-4");

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


// Importa os serviços
import { services } from './itensServices.js';

// Seleciona o container onde os cards serão inseridos
const containerS = document.getElementById("services-container");

// Gera os cards de cada serviço na página index.html  
services.forEach(service => {
    // Cria a coluna principal
    const col = document.createElement("div");
    col.classList.add("mb-8", "col-xs-12", "col-sm-6", "col-md-4", "listar-feature-item-wrapper", "listar-feature-with-image", "listar-height-changed");
    col.setAttribute("data-aos", "fade-zoom-in");
    col.setAttribute("data-aos-group", "features");
    col.setAttribute("data-line-height", "25.2px");

    // Estrutura principal do card
    const card = `
        <div class="listar-feature-item listar-feature-has-link">
            <div class="listar-feature-item-inner">
                <div class="listar-feature-right-border border-${service.color}"></div>
                <div class="listar-feature-block-content-wrapper">
                    <div class="listar-feature-icon-wrapper">
                        <div class="listar-feature-icon-inner">
                            <div>
                                <img alt="${service.titulo}" class="listar-image-icon" src="${service.imagem}">
                            </div>
                        </div>
                    </div>
                    <div class="listar-feature-content-wrapper" style="margin-top: -60px;">
                        <div class="listar-feature-item-title listar-feature-counter-added">
                            <span>${service.titulo}</span>
                        </div>
                        <div class="listar-feature-item-excerpt">
                            ${service.descricao}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
    `;

    // Adiciona o HTML à coluna
    col.innerHTML = card;

    // Adiciona a coluna ao container
    containerS.appendChild(col);
}); 

// Clients
// Array com os URLs das imagens
const clients = [
    "img/clients/2.png",
    "img/clients/3.png",
    "img/clients/4.png",
    "img/clients/5.png",
    "img/clients/6.png",
    "img/clients/7.png",
    "img/clients/8.png",
    "img/clients/9.png",
    "img/clients/10.png",
    "img/clients/11.png",
    "img/clients/12.png",
    "img/clients/13.png",
    "img/clients/14.png",
    "img/clients/15.png",
    "img/clients/16.png",
    "img/clients/17.png",
    "img/clients/18.png"
];

// Seleciona o contêiner do carrossel
const carousel = document.getElementById('carousel-clients');

// Função para criar e adicionar as imagens ao carrossel
function populateCarousel(images) {
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Cliente";
        carousel.appendChild(img);
    });
    // Duplica as imagens para criar o efeito de loop infinito
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Cliente";
        carousel.appendChild(img);
    });
}

//embaralha as imagens
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // Enquanto ainda houver elementos para embaralhar
    while (currentIndex != 0) {

        // Escolhe um elemento restante
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // E troca com o elemento atual
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
shuffle(clients);

// Alimenta o carrossel com as imagens
populateCarousel(clients);

