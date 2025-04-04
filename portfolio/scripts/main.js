// Dados das Categorias
const categories = [
    { "nome": "Landing Page", "icone": "fas fa-home" },
    { "nome": "Website", "icone": "fas fa-globe" },
    { "nome": "E-commerce", "icone": "fas fa-shopping-cart" },
    { "nome": "Sistema Web", "icone": "fas fa-cogs" },
    { "nome": "Logotipo", "icone": "fas fa-paint-brush" },
    // { "nome": "Identidade Visual", "icone": "fas fa-palette" },
    // { "nome": "UX/UI", "icone": "fas fa-desktop" },
    { "nome": "Posts para Redes Sociais", "icone": "fas fa-share-alt" },
    // { "nome": "Carrossel para Instagram", "icone": "fas fa-images" },
    { "nome": "Stories para Instagram", "icone": "fas fa-camera" },
    { "nome": "Criativos para Anúncios", "icone": "fas fa-bullhorn" },
    { "nome": "Banner Digital", "icone": "fas fa-ad" },
    { "nome": "Cartão de Visita", "icone": "fas fa-address-card" },
    // { "nome": "Capa Youtube", "icone": "fas fa-video" },
    { "nome": "Artes Gráficas Diversas", "icone": "fas fa-th" },
    // { "nome": "Reels para Instagram", "icone": "fas fa-film" },
    // { "nome": "Vídeos Diversos", "icone": "fas fa-video" }
];

// Dados de Exemplo dos Projetos (simulando um banco de dados)
const projectsDatabase = {
    "Landing Page": [
        {
            "titulo": "Landing Page - Pulsante Eventos",
            "descricao": "Desenvolvemos a Landing Page da Pulsante Eventos com foco em comunicar sua essência acolhedora e inspiradora. A estrutura destaca a história das fundadoras e o propósito de empoderar mulheres por meio de eventos significativos. Com design responsivo, navegação intuitiva, SEO e integração com WhatsApp, o site reforça a conexão com o público e transmite a identidade única da marca.",
            "imagem": "assets/images/projetos/pulsante_eventos.png",
            "link": "https://pulsanteeventos.com.br/"
        },
        {
            "titulo": "Landing Page - Curso TEA",
            "descricao": "Desenvolvemos a landing page do Curso de Capacitação Presencial sobre TEA, com foco em uma comunicação clara, objetiva e acolhedora. A página foi estruturada para apresentar o conteúdo do curso de forma estratégica, destacando os benefícios da capacitação e incentivando a inscrição. Com design responsivo, otimização para carregamento rápido e integração com canais de contato, a landing page busca transformar o interesse em ação, conectando quem deseja compreender e apoiar melhor pessoas com Transtorno do Espectro Autista (TEA).",
            "imagem": "assets/images/projetos/curso_tea.png",
            "link": "https://cursotea.abracarensinoead.com.br/"
        },
    ],
    "Website": [
        {
            "titulo": "Website - ME Representações",
            "descricao": "Desenvolvemos o site institucional da ME Representações, uma empresa de representação comercial. O projeto incluiu um design moderno e responsivo, estruturação dos serviços, integração de contato via WhatsApp e otimização para SEO, garantindo uma presença digital profissional e eficiente.",
            "imagem": "assets/images/projetos/me_representacoes.png",
            "link": "https://merepresentacoes.com"
        },
        {
            "titulo": "Website - Lune Cria",
            "descricao": "Desenvolvemos o site da Lune Cria, projeto da escritora e professora Dafne Dias, que une literatura e aprendizado de forma criativa. O site conta com design moderno, é responsivo, otimizado para SEO e apresenta os conteúdos de forma clara e envolvente.",
            "imagem": "assets/images/projetos/lune_cria_site.png",
            "link": "https://lunecria.com.br/"
        },
        {
            "titulo": "Website - Associação Restaurando Vidas",
            "descricao": "Desenvolvemos o site da Comunidade Terapêutica Restaurando Vidas com o objetivo de transmitir acolhimento, esperança e transformação. A plataforma apresenta, de forma sensível e clara, o trabalho dedicado da equipe no apoio à recuperação de pessoas em luta contra a dependência química.",
            "imagem": "assets/images/projetos/restaurando_vidas.png",
            "link": "https://assrestaurandovidas.org.br/"
        },
    ],
    "E-commerce":[
        {
            "titulo": "E-commerce - Colombina Pulsante",
            "descricao": "Desenvolvemos o e-commerce Colombina Pulsante com foco em traduzir a essência vibrante e feminina da marca para o ambiente digital. A loja online foi estruturada para oferecer uma navegação fluida, com destaque para produtos que reforçam o autocuidado e a celebração do feminino. O design responsivo, otimização para SEO e integração com canais de contato garantem uma experiência de compra acessível, prática e acolhedora.",
            "imagem": "assets/images/projetos/colombina_pulsante.png",
            "link": "https://colombinapulsante.pulsanteeventos.com.br/"
        },
        {
            "titulo": "E-commerce - Grace Gourmet",
            "descricao": "Desenvolvemos o e-commerce da Grace Gourmet, uma doceria artesanal especializada em doces e confeitaria artesanal, com um design moderno e responsivo. O projeto inclui um sistema de pedidos que simula um delivery, enviando os pedidos dos clientes diretamente para o WhatsApp, além de otimização para SEO e apresentação do cardápio de forma intuitiva.",
            "imagem": "assets/images/projetos/grace_delivery.png",
            "link": "https://deliverygracegourmet.com.br/" 
        }
    ],
    "Sistema Web": [
        {
            "titulo": "Sistema Web - Âbaque",
            "descricao": "Criamos o Âbaque para tornar o raciocínio lógico e o mundo da tecnologia mais acessíveis e divertidos. Através de desafios matemáticos em três níveis de dificuldade, o projeto compara a velocidade humana com a das máquinas, enquanto compartilha curiosidades sobre a evolução tecnológica. Com design lúdico e navegação intuitiva, o Âbaque inspira aprendizado de forma leve e interativa.",
            "imagem": "assets/images/projetos/abaque_site.png",
            "link": "https://amaple28.github.io/abaque/"
        },
        {
            "titulo": "Sistema Web - Abraçar Soluções",
            "descricao": "Criamos a plataforma de Cursos EAD da Abraçar Soluções com foco em destacar oportunidades de crescimento profissional na área da saúde e bem-estar. A plataforma apresenta cursos acessíveis e certificados, organizados de forma estratégica para facilitar a navegação e incentivar a inscrição. Com design moderno, responsivo e otimizado, o site conecta profissionais e estudantes a conteúdos de qualidade, impulsionando carreiras e transformando futuros.",
            "imagem": "assets/images/projetos/abracar_cursos.png",
            "link": "https://abracarensinoead.com.br/public/"
        },
        {
            "titulo": "Sistema Web - Simulador SISU VEMMED",
            "descricao": "Criamos o Simulador SISU Vemmed com foco em facilitar o acesso à informação para quem deseja ingressar no ensino superior. A ferramenta permite que o usuário insira sua nota do Enem e descubra suas chances de aprovação nas instituições desejadas. Com interface intuitiva, design responsivo e resultados rápidos, o simulador orienta estudantes de forma prática e objetiva na busca pela tão sonhada vaga na faculdade.",
            "imagem": "assets/images/projetos/simulador_vemmed.png",
            "link": "https://simuladorsisumed.com/"
        },
        {
            "titulo": "Sistema Web - ITEC Sistem",
            "descricao": "Desenvolvemos a plataforma da ITEC com o propósito de reinventar a experiência de aprendizagem dos jovens no ambiente digital. A proposta une tecnologia, interatividade e acolhimento para tornar o estudo mais atrativo, organizado e prazeroso. Com simuladores, jogos, concursos e suporte emocional, a plataforma busca engajar os alunos, promovendo não só o aprendizado, mas também o bem-estar. O design intuitivo e a navegação dinâmica tornam a jornada educativa mais leve, divertida e eficiente.",
            "imagem": "assets/images/projetos/itec_sistema.png",
            "link": "https://amaple28.github.io/ITECSISTEM2.0/"
        },
    ],
    "Logotipo": [
        {
            "titulo": "Logotipo - Flor'yane",
            "descricao": "A logo da Flor’Yane transmite romantismo e sofisticação, com um arranjo floral detalhado que simboliza delicadeza e afeto. A tipografia clássica e a moldura ornamental reforçam a exclusividade e o charme da marca.",
            "imagem": "assets/images/projetos/floryane_logo.png"
        },
        {
            "titulo": "Logotipo - Arq Control",
            "descricao": "A logo da ARQ Control transmite tecnologia e organização, com um ícone que combina arquivos digitais e circuitos eletrônicos. O esquema de cores moderno e a tipografia futurista reforçam inovação e eficiência.",
            "imagem": "assets/images/projetos/arq_control.png"
        },
        {
            "titulo": "Logotipo - Refúgio Sol & Sossego",
            "descricao": "A logo do Refúgio Sol & Sossego transmite tranquilidade e conexão com a natureza, com uma palmeira inclinada ao pôr do sol. As cores quentes e o design fluido reforçam a sensação de descanso e bem-estar, criando uma identidade visual acolhedora para um refúgio paradisíaco.",
            "imagem": "assets/images/projetos/refugio_sol_logo.png"
        },
        {
            "titulo": "Logotipo - Viviane Nunes",
            "descricao": "A logo da Viviane Nunes transmite profissionalismo e estratégia, com traços minimalistas que remetem ao crescimento e estabilidade. A tipografia elegante e a composição limpa reforçam a seriedade e a confiança da consultoria empresarial.",
            "imagem": "assets/images/projetos/viviane_logo.png"
        },
        {
            "titulo": "Logotipo - Bianca Drinks",
            "descricao": "A logo da Bianca In a Glass transmite sofisticação e elegância, com uma ilustração clássica de uma mulher apreciando uma taça. As linhas artísticas e os tons terrosos evocam requinte e exclusividade, criando uma identidade visual refinada para a marca.",
            "imagem": "assets/images/projetos/bianca_logo.png"
        },
        {
            "titulo": "Logotipo - Ana Pires Psicóloga",
            "descricao": "A logo da Ana Pires Ferreira transmite acolhimento e equilíbrio emocional, com um cérebro estilizado em formato de coração. As cores suaves e o design harmonioso reforçam a empatia e a humanização no atendimento psicológico.",
            "imagem": "assets/images/projetos/psicologa_ana_logo.png"
        },
        {
            "titulo": "Logotipo - Renata Martins Treinadora",
            "descricao": "",
            "imagem": "assets/images/projetos/renata_logo.png"
        },
        {
            "titulo": "Logotipo - Naniih Doces",
            "descricao": "A logo da Naniih Doces transmite delicadeza e carinho, com uma tipografia fluida e detalhes sutis que remetem ao universo da confeitaria. As cores suaves e os elementos visuais reforçam a doçura e o aconchego da marca.",
            "imagem": "assets/images/projetos/naniih_logo.png"
        },
        {
            "titulo": "Logotipo - Gaby Trancista",
            "descricao": "A logo da Gaby Alves Trancista transmite autenticidade e conexão com a natureza, com um girassol estilizado representando vitalidade e criatividade. A tipografia fluida e os tons terrosos reforçam a arte e a tradição das tranças afro.",
            "imagem": "assets/images/projetos/gaby_logo.png"
        },
        {
            "titulo": "Logotipo - Elias Treinador",
            "descricao": "A logo do Elias apresenta um design criativo ao mesclar as letras do nome 'ELIAS' em uma composição geométrica, transmitindo inovação e identidade única. O ícone de kettlebell e pesos reforça a conexão com o universo fitness, enquanto o gradiente azul traz uma sensação de dinamismo e modernidade.",
            "imagem": "assets/images/projetos/elias_logo.png"
        },
        {
            "titulo": "Logotipo - Desafio Renata",
            "descricao": "A logo do Desafio Renata Martins transmite energia e motivação, com um coração levantando pesos, simbolizando força e saúde. As cores vibrantes e a tipografia marcante reforçam dinamismo e proximidade, criando uma identidade visual envolvente para o desafio fitness.",
            "imagem": "assets/images/projetos/desafio_renata_logo.png"
        },
        
    ],
    "Posts para Redes Sociais": [
        {
            "titulo": "Salão Infantil Cabelinhos",
            "descricao": "",
            "imagens": [
                "assets/images/projetos/redes_cabelinhos.png",
            ]
        },
        {
            "titulo": "Ana Pires Psicóloga",
            "descricao": "",
            "imagens": [
                "assets/images/projetos/redes_ana_psicologa.png",
            ]
        },
        {
            "titulo": "Gaby Trancista",
            "descricao": "",
            "imagens": [
                "assets/images/projetos/redes_gaby.png",
            ]
        },
    ],
    "Stories para Instagram": [
        {
            "titulo": "Grace Gourmet",
            "descricao": "",
            "imagem": [
                "assets/images/projetos/redes_grace.png",
            ]
        },
        {
            "titulo": "Bianca Drinks",
            "descricao": "",
            "imagem": [
                "assets/images/projetos/redes_bianca.png",
            ]
        },
    ],
    "Criativos para Anúncios": [
        {
            "titulo": "Abraçar Soluções",
            "descricao": "",
            "imagens": [
                "assets/images/projetos/criativo_abracar.png",
            ]
        },
        {
            "titulo": "Plamev",
            "descricao": "",
            "imagens": [
                "assets/images/projetos/criativo_plamev.png",
            ]
        },
        {
            "titulo": "Mentoria Financeira",
            "descricao": "",
            "imagens": [
                "assets/images/projetos/criativo_viviane.png",
            ]
        },
    ],
    "Banner Digital": [
        {
            "titulo": "Vendinha de Papel",
            "descricao": "",
            "imagem": "assets/images/projetos/banner_vendinha_papel.png"
        },
    ],
    "Cartão de Visita": [
        {
            "titulo": "Ana Pires Psicóloga",
            "descricao": "",
            "imagem": "assets/images/projetos/cartao_ana_psicologa.png"
        },
    ],
    "Artes Gráficas Diversas": [
        {
            "titulo": "Encontro de Voluntários",
            "descricao": "",
            "imagem": "assets/images/projetos/cartao_agradecimento_impacto.png"
        },
        {
            "titulo": "Vitrine Cícero Barbearia",
            "descricao": "",
            "imagem": "assets/images/projetos/vitrine_cicero.png"
        },
    ],
    // "Vídeos Diversos": [
    //     {
    //         "titulo": "Vídeo Institucional - Escola",
    //         "descricao": "Apresentação da estrutura e proposta pedagógica.",
    //         "video": "assets/videos/video-escola.mp4"
    //     }
    // ]
};

// Elementos DOM
const navbarMenu = document.getElementById('navbarMenu');
const categoriesGrid = document.getElementById('categoriesGrid');
const mainContent = document.getElementById('mainContent');
const homeSection = document.getElementById('homeSection');
const navbarToggle = document.getElementById('navbarToggle');

// Função para renderizar as categorias na home
function renderCategories() {
    categoriesGrid.innerHTML = '';
    
    categories.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = `category-card fade-in delay-${index % 3}`;
        categoryCard.innerHTML = `
            <div class="category-icon">
                <i class="${category.icone}"></i>
            </div>
            <h3 class="category-name">${category.nome}</h3>
        `;
        
        categoryCard.addEventListener('click', () => {
            loadCategoryPage(category.nome);
        });
        
        categoriesGrid.appendChild(categoryCard);
    });
}

// Função para renderizar o menu de navegação
function renderNavMenu() {
    navbarMenu.innerHTML = '';
    
    // Versão desktop - dropdown
    if (window.innerWidth > 768) {
        const dropdown = document.createElement('div');
        dropdown.className = 'navbar-dropdown';
        dropdown.innerHTML = `
            <button class="dropdown-btn">
                <i class="fas fa-th"></i>
                Navegar Categorias
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="dropdown-content" id="dropdownContent"></div>
        `;
        
        const dropdownContent = dropdown.querySelector('#dropdownContent');
        
        categories.forEach(category => {
            const menuItem = document.createElement('a');
            menuItem.href = '#';
            menuItem.innerHTML = `<i class="${category.icone}"></i> ${category.nome}`;
            menuItem.addEventListener('click', (e) => {
                e.preventDefault();
                loadCategoryPage(category.nome);
            });
            dropdownContent.appendChild(menuItem);
        });
        
        navbarMenu.appendChild(dropdown);
    } 
    // Versão mobile - scroll horizontal
    else {
        categories.forEach(category => {
            const menuItem = document.createElement('a');
            menuItem.href = '#';
            menuItem.innerHTML = `<i class="${category.icone}"></i> <span>${category.nome}</span>`;
            menuItem.addEventListener('click', (e) => {
                e.preventDefault();
                loadCategoryPage(category.nome);
                closeMobileMenu();
            });
            
            // Prevenir arrastar acidental da página
            menuItem.addEventListener('touchstart', (e) => {
                e.stopPropagation();
            }, { passive: true });
            
            menuItem.addEventListener('touchmove', (e) => {
                e.stopPropagation();
            }, { passive: true });
            
            navbarMenu.appendChild(menuItem);
        });
    }
}

// Funções auxiliares para controle do menu mobile
function toggleMobileMenu() {
    document.body.classList.toggle('navbar-mobile-active');
    navbarMenu.classList.toggle('active');
}

function closeMobileMenu() {
    document.body.classList.remove('navbar-mobile-active');
    navbarMenu.classList.remove('active');
}


// Função auxiliar para carregar projetos 
function loadCategoryProjects(categoryName, container) {
    const projects = projectsDatabase[categoryName] || [];
    
    if (projects.length === 0) {
        container.innerHTML = '<p>Nenhum projeto disponível para esta categoria no momento.</p>';
        return;
    }
    
    // Limpar container antes de adicionar novos projetos
    container.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        if (categoryName === 'Logotipo' || categoryName === 'Identidade Visual') {
            // Projeto de logotipo - apenas imagem
            projectCard.innerHTML = `
                <img src="${project.imagem}" alt="${project.titulo}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.titulo}</h3>
                    <p class="project-description">${project.descricao}</p>
                </div>
            `;
        } 
        else if (categoryName === 'Website' || categoryName === 'E-commerce' || categoryName === 'Landing Page' || categoryName === 'Sistema Web') {
            // Projeto de website - imagem + botão para acessar
            projectCard.innerHTML = `
                <img src="${project.imagem}" alt="${project.titulo}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.titulo}</h3>
                    <p class="project-description">${project.descricao}</p>
                    <a href="${project.link}" target="_blank" class="project-link">Visitar Site</a>
                </div>
            `;
        }
        else if (categoryName === 'Posts para Redes Sociais' || categoryName === 'Carrossel para Instagram' || categoryName === 'Criativos para Anúncios') {
            // Projeto com múltiplas imagens - carrossel
            projectCard.innerHTML = `
                <div class="carousel">
                    <div class="carousel-inner" id="carousel-${project.titulo.replace(/\s+/g, '-').toLowerCase()}">
                        ${project.imagens.map(img => `
                            <div class="carousel-item">
                                <img src="${img}" alt="${project.titulo}" class="project-image">
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.titulo}</h3>
                    <p class="project-description">${project.descricao}</p>
                </div>
            `;
        }
        else if (categoryName === 'Vídeos Diversos' || categoryName === 'Reels para Instagram') {
            // Projeto de vídeo - player
            projectCard.innerHTML = `
                <div class="video-player">
                    <video controls class="project-image">
                        <source src="${project.video}" type="video/mp4">
                        Seu navegador não suporta vídeos HTML5.
                    </video>
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.titulo}</h3>
                    <p class="project-description">${project.descricao}</p>
                </div>
            `;
        }
        else {
            // Layout padrão para outros tipos de projeto
            projectCard.innerHTML = `
                <img src="${project.imagem || 'assets/images/default-project.jpg'}" alt="${project.titulo}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.titulo}</h3>
                    <p class="project-description">${project.descricao}</p>
                </div>
            `;
        }
        
        container.appendChild(projectCard);
    });
    
    // Inicializar carrosséis se necessário
    if (categoryName === 'Posts para Redes Sociais' || categoryName === 'Carrossel para Instagram') {
        initializeCarousels();
    }
}

// Adicione esta variável no início do arquivo para controlar o estado
let currentCategory = null;

// Modifique a função loadCategoryPage
function loadCategoryPage(categoryName) {
    // Evitar recarregar a mesma categoria
    if (currentCategory === categoryName) return;
    currentCategory = categoryName;

    // Mostrar a navbar
    document.querySelector('.navbar').style.display = 'block';
    
    // Esconder a seção home
    homeSection.style.display = 'none';
    
    // Remover todas as seções de categoria existentes
    document.querySelectorAll('.category-section').forEach(section => {
        section.remove();
    });
    
    // Atualizar URL sem disparar hashchange
    if (window.location.hash !== `#${categoryName.replace(/\s+/g, '-').toLowerCase()}`) {
        window.history.pushState(null, null, `#${categoryName.replace(/\s+/g, '-').toLowerCase()}`);
    }

    // Criar container para a nova categoria
    const categorySection = document.createElement('section');
    categorySection.className = 'category-section container fade-in';
    categorySection.id = `category-${categoryName.replace(/\s+/g, '-').toLowerCase()}`;
    
    // Botão de voltar
    const backButton = document.createElement('a');
    backButton.className = 'back-button';
    backButton.href = '#';
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Voltar para Home';
    backButton.addEventListener('click', (e) => {
        e.preventDefault();
        currentCategory = null;
        document.querySelectorAll('.category-section').forEach(section => {
            section.remove();
        });
        homeSection.style.display = 'block';
        document.querySelector('.navbar').style.display = 'none';
        window.history.pushState(null, null, window.location.pathname);
        window.scrollTo(0, 0);

        if (window.innerWidth <= 768) {
            navbarMenu.classList.remove('active');
        }
    });
    
    // Cabeçalho da categoria
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    categoryHeader.innerHTML = `<h2>${categoryName}</h2>`;
    
    // Container de projetos
    const projectsContainer = document.createElement('div');
    projectsContainer.className = 'projects-container';
    
    // Adicionar elementos ao DOM
    categorySection.appendChild(backButton);
    categorySection.appendChild(categoryHeader);
    categorySection.appendChild(projectsContainer);
    mainContent.appendChild(categorySection);
    
    // Carregar projetos da categoria
    loadCategoryProjects(categoryName, projectsContainer);
    
    // Rolagem suave para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Função para inicializar carrosséis
function initializeCarousels() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        
        // Criar controles de navegação
        const controls = document.createElement('div');
        controls.className = 'carousel-controls';
        controls.innerHTML = `
            <button class="carousel-control prev"><i class="fas fa-chevron-left"></i></button>
            <button class="carousel-control next"><i class="fas fa-chevron-right"></i></button>
        `;
        carousel.appendChild(controls);
        
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        
        // Atualizar posição do carrossel
        function updateCarousel() {
            inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        // Event listeners para os botões
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        });
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        });
        
        // Inicializar
        updateCarousel();
    });
}

// Menu toggle para mobile
navbarToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
});

// Fechar menu ao clicar em um item (mobile)
document.addEventListener('click', (e) => {
    if (navbarMenu.classList.contains('active') && 
        !navbarMenu.contains(e.target) && 
        e.target !== navbarToggle) {
        closeMobileMenu();
    }
});

// Prevenir scroll da página quando menu está aberto
navbarMenu.addEventListener('touchmove', (e) => {
    if (navbarMenu.classList.contains('active')) {
        e.preventDefault();
    }
}, { passive: false });

// Atualizar hash da URL ao navegar
window.addEventListener('hashchange', () => {
    if (!window.location.hash) {
        homeSection.style.display = 'block';
        document.querySelector('.category-section')?.remove();
    }
});

// Atualizar menu ao redimensionar
window.addEventListener('resize', () => {
    renderNavMenu();
}); 

// Atualize a função handleHashChange
function handleHashChange() {
    const hash = window.location.hash.substring(1).replace(/-/g, ' ');
    
    if (!hash) {
        if (currentCategory !== null) {
            currentCategory = null;
            document.querySelectorAll('.category-section').forEach(section => {
                section.remove();
            });
            homeSection.style.display = 'block';
            document.querySelector('.navbar').style.display = 'none';
        }
        return;
    }
    
    // Verificar se a categoria existe e é diferente da atual
    const categoryExists = categories.some(cat => 
        cat.nome.toLowerCase() === hash.toLowerCase()
    );
    
    if (categoryExists && (!currentCategory || currentCategory.toLowerCase() !== hash.toLowerCase())) {
        loadCategoryPage(hash);
    }
}

// Modifique o evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    renderNavMenu();
    renderCategories();
    
    // Usar setTimeout para garantir que o hashchange seja processado após a renderização inicial
    setTimeout(() => {
        handleHashChange();
    }, 0);
});

// Atualize o event listener de hashchange
window.addEventListener('hashchange', handleHashChange);