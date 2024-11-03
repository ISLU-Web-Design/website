//import projetos from "./itensProjects.js";
import { projetos } from './itensProjects.js'; 

// Seleciona o container onde os cards serão inseridos
const containerProjects = document.getElementById("projects-container");

// Gera os cards de cada projeto na página projects.html 
projetos.forEach(projeto => {
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
    containerProjects.appendChild(col);
});
