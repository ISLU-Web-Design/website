// Dados das Categorias
const categories = [
    { "nome": "Landing Page", "icone": "fas fa-home" },
    { "nome": "Website", "icone": "fas fa-globe" },
    { "nome": "E-commerce", "icone": "fas fa-shopping-cart" },
    { "nome": "Sistema Web", "icone": "fas fa-cogs" },
    { "nome": "Logotipo", "icone": "fas fa-paint-brush" },
    // { "nome": "Identidade Visual", "icone": "fas fa-palette" },
    { "nome": "UX/UI", "icone": "fas fa-desktop" },
    { "nome": "Posts para Redes Sociais", "icone": "fas fa-share-alt" },
    // { "nome": "Carrossel para Instagram", "icone": "fas fa-images" },
    { "nome": "Stories para Instagram", "icone": "fas fa-camera" },
    { "nome": "Criativos para Anúncios", "icone": "fas fa-bullhorn" },
    { "nome": "Banner Digital", "icone": "fas fa-ad" },
    { "nome": "Cartão de Visita", "icone": "fas fa-address-card" },
    { "nome": "Capa Youtube", "icone": "fas fa-video" },
    { "nome": "Artes Gráficas Diversas", "icone": "fas fa-th" },
    { "nome": "Reels para Instagram", "icone": "fas fa-film" },
    { "nome": "Vídeos Diversos", "icone": "fas fa-video" }
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
        {
            "titulo": "Landing Page - Layout Produto Digital",
            "descricao": "Desenvolvemos um exemplo de landing page inspirado em um produto digital fictício, com foco total em performance, conversão e experiência do usuário. Utilizamos estratégias modernas de design, copywriting e usabilidade para mostrar como um produto pode ser apresentado de forma clara, atrativa e eficiente.",
            "imagem": "assets/images/projetos/layout_landing_page.png",
            "link": "https://isluwebdesign.com.br/landing_page"
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
            "descricao": "A logo transmite força e determinação com a ilustração detalhada de um lobo, simbolizando liderança e resiliência. A tipografia moderna e marcante em tons de roxo reforça a energia e a confiança, enquanto o fundo sutil cria um equilíbrio entre intensidade e sofisticação, representando a essência da treinadora.",
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
            "titulo": "Logotipo - La Maré Mode",
            "descricao": "O logotipo apresenta o nome “La Maré” em uma tipografia serifada dourada, elegante e imponente, com traços fluidos que remetem à feminilidade e ao movimento natural da moda. Abaixo, o termo “MODE” aparece em uma fonte sans-serif minimalista, também em dourado, reforçando o contraste entre o clássico e o moderno.",
            "imagem": "assets/images/projetos/lamare_logo.png"
        },
        {
            "titulo": "Logotipo - Exemplo Brasão",
            "descricao": "Logotipo inspirado em brasões tradicionais, com elementos que representam força, história e identidade regional. Uma referência visual rica para futuras criações institucionais.",
            "imagem": "assets/images/projetos/brasao_colegio.png"
        },
        {
            "titulo": "Logotipo - Desafio Renata",
            "descricao": "A logo do Desafio Renata Martins transmite energia e motivação, com um coração levantando pesos, simbolizando força e saúde. As cores vibrantes e a tipografia marcante reforçam dinamismo e proximidade, criando uma identidade visual envolvente para o desafio fitness.",
            "imagem": "assets/images/projetos/desafio_renata_logo.png"
        },
        {
            "titulo": "Logotipo - Miau Kick Dojo",
            "descricao": "A logo do MiauKick Dojo traz um gato lutador carismático em ação, com visual vibrante e postura determinada. Com cores fortes e um estilo dinâmico, transmite energia, foco e diversão — perfeita para academias infantis, jogos ou projetos com espírito de luta e aventura.",
            "imagem": "assets/images/projetos/miaukick_dojo.png"
        },
        {
            "titulo": "Logotipo - ConnectUp",
            "descricao": "",
            "imagem": "assets/images/projetos/connectup_logo.png"
        },
        {
            "titulo": "Logotipo - Dexer Energia Solar",
            "descricao": "",
            "imagem": "assets/images/projetos/dexer_logo.png"
        },
        {
            "titulo": "Logotipo - Luari Nails",
            "descricao": "",
            "imagem": "assets/images/projetos/luari_logo.png"
        },
        {
            "titulo": "Logotipo - ECOALERT",
            "descricao": "",
            "imagem": "assets/images/projetos/ecoalert_logo.png"
        },
        {
            "titulo": "Logotipo - Renovex",
            "descricao": "",
            "imagem": "assets/images/projetos/renovex_logo.png"
        },
        {
            "titulo": "Logotipo - PAB",
            "descricao": "",
            "imagem": "assets/images/projetos/pab_logo.png"
        },
        
    ],
    "UX/UI": [
        {
            "titulo": "ECOALERT",
            "descricao": "",
            "imagem": "assets/images/projetos/ecoalert_uxui.png"
        },
        {
            "titulo": "Dexer Energia Solar",
            "descricao": "",
            "imagem": "assets/images/projetos/dexer_uxui.png"
        },
    ],
    "Posts para Redes Sociais": [
        {
            "titulo": "Salão Infantil Cabelinhos",
            "descricao": "Criação de artes personalizadas para as redes sociais do Salão Infantil Cabelinho, transmitindo leveza, alegria e conexão com o público infantil. O design lúdico, com cores vibrantes e elementos gráficos divertidos, reforça a identidade acolhedora do salão. As postagens celebram momentos especiais, como eventos temáticos e atendimentos personalizados, destacando a dedicação da equipe e a experiência encantadora oferecida às crianças.",
            "imagens": [
                "assets/images/projetos/redes_cabelinhos.png",
            ]
        },
        {
            "titulo": "Ana Pires Psicóloga",
            "descricao": "Desenvolvimento de conteúdo visual para divulgação de serviços psicológicos. Design clean e acolhedor, transmitindo sensibilidade e profissionalismo, com foco no fortalecimento da autoestima e bem-estar emocional.",
            "imagens": [
                "assets/images/projetos/redes_ana_psicologa.png",
            ]
        },
        {
            "titulo": "MFABIAN",
            "descricao": "",
            "imagens": [
                "assets/images/projetos/redes_mfabian.png",
            ]
        },
        {
            "titulo": "Palestra Empreender Para Crescer",
            "descricao": "",
            "imagens": [
                "assets/images/projetos/redes_viviane.png",
            ]
        },
        {
            "titulo": "Luari Nails",
            "descricao": "",
            "imagens": [
                "assets/images/projetos/redes_luari.png",
            ]
        },
        {
            "titulo": "Gaby Trancista",
            "descricao": "Criação de materiais para divulgação de serviços capilares. Identidade visual harmônica e inspiradora, ressaltando a beleza natural e os cuidados essenciais para manter os fios saudáveis e estilosos.",
            "imagens": [
                "assets/images/projetos/redes_gaby.png",
            ]
        },
    ],
    "Stories para Instagram": [
        {
            "titulo": "Grace Gourmet",
            "descricao": "Artes visuais para a campanha promocional de um evento gastronômico. Design vibrante e atrativo, destacando sabores e a experiência única do festival, incentivando a participação do público.",
            "imagem": [
                "assets/images/projetos/redes_grace.png",
            ]
        },
        {
            "titulo": "Bianca Drinks",
            "descricao": "Criação de identidade visual para divulgação de drinks especiais. Design sofisticado e elegante, transmitindo requinte e qualidade para atrair clientes interessados em eventos e coquetéis exclusivos.",
            "imagem": [
                "assets/images/projetos/redes_bianca.png",
            ]
        },
        {
            "titulo": "Live Canal do Empreendedor",
            "descricao": "",
            "imagem": [
                "assets/images/projetos/live_viviane.png",
            ]
        },
        {
            "titulo": "Grace Gourmet",
            "descricao": "",
            "imagem": [
                "assets/images/projetos/redes_grace2.png",
            ]
        },
    ],
    "Criativos para Anúncios": [
        {
            "titulo": "Abraçar Soluções",
            "descricao": "Cursos Online Gratuitos – Criativos destacam oportunidades de capacitação gratuita em diversas áreas, como estética, saúde e atendimento. O design vibrante, com tipografia chamativa e cores contrastantes, reforça a urgência e atratividade das vagas abertas.",
            "imagens": [
                "assets/images/projetos/criativo_abracar.png",
            ]
        },
        {
            "titulo": "Plamev",
            "descricao": "Plano de Saúde para Pets – Publicação promocional anuncia um novo plano de saúde para cães e gatos, enfatizando proteção e bem-estar. O layout usa cores acolhedoras e imagens de pets para criar uma conexão emocional com o público.",
            "imagens": [
                "assets/images/projetos/criativo_plamev.png",
            ]
        },
        {
            "titulo": "Mentoria Financeira",
            "descricao": "Criativo voltado para quem busca organizar suas finanças, oferecendo mentoria online e presencial. A comunicação transmite credibilidade e proximidade, com um design elegante e informativo, destacando a chamada para ação.",
            "imagens": [
                "assets/images/projetos/criativo_viviane.png",
            ]
        },
    ],
    "Banner Digital": [
        {
            "titulo": "Vendinha de Papel",
            "descricao": "Criação de arte vibrante e colorida para campanha de volta às aulas. O design utiliza um fundo roxo com elementos escolares como lápis, réguas, tesouras e clips, transmitindo um clima dinâmico e educativo. ",
            "imagem": "assets/images/projetos/banner_vendinha_papel.png"
        },
    ],
    "Cartão de Visita": [
        {
            "titulo": "Ana Pires Psicóloga",
            "descricao": "O cartão reforça a identidade acolhedora da marca, utilizando tons suaves e um design limpo. A ilustração do cérebro com coração reforça a empatia e equilíbrio emocional. A tipografia moderna e os ícones sutis criam um material profissional e acessível.",
            "imagem": "assets/images/projetos/cartao_ana_psicologa.png"
        },
    ],
    "Capa Youtube": [
        {
            "titulo": "Canal do Empreendedor",
            "descricao": "",
            "imagem": "assets/images/projetos/capas_yt.png"
        },
    ],
    "Artes Gráficas Diversas": [
        {
            "titulo": "Encontro de Voluntários",
            "descricao": "Uma identidade visual vibrante e inspiradora, destacando união e solidariedade. Os ícones das pessoas comemorando reforçam o espírito de coletividade e gratidão, criando uma identidade envolvente e motivadora.",
            "imagem": "assets/images/projetos/cartao_agradecimento_impacto.png"
        },
        {
            "titulo": "Marca-página Personalizado",
            "descricao": "Criado para a charmosa papelaria Vendinha de Papel, este marca-página delicado combina praticidade e inspiração. Com um design floral suave, calendário anual no verso e a frase motivacional 'Não pare até se orgulhar de você!', ele é o companheiro ideal para suas leituras ao longo do ano.",
            "imagem": "assets/images/projetos/marca_paginas.png"
        },
        {
            "titulo": "Vitrine Cícero Barbearia",
            "descricao": "Design exclusivo para a vitrine da Cícero Barbearia, destacando a sofisticação e a versatilidade dos serviços oferecidos. A composição moderna em preto, branco e dourado reforça a identidade premium da marca, enquanto as imagens geométricas apresentam cortes e estilos masculinos e femininos. A vitrine comunica profissionalismo e elegância, além de reforçar o atendimento personalizado, incluindo serviços em domicílio.",
            "imagem": "assets/images/projetos/vitrine_cicero.png"
        },
        {
            "titulo": "Cartão Lembrancinha ",
            "descricao": "",
            "imagem": "assets/images/projetos/cartao_lembrancinha_luari.png"
        },
        {
            "titulo": "Banner Aulas Particulares",
            "descricao": "",
            "imagem": "assets/images/projetos/aulas_particulares.png"
        },
        {
            "titulo": "Vitrine MFABIAN",
            "descricao": "Arte criada especialmente para a vitrine da sala de reuniões da MFABIAN - Consultoria & Desenvolvimento Cosmético. Com uma identidade visual elegante e profissional, a composição valoriza a marca, transmite credibilidade e reforça a atuação no setor cosmético. O design harmoniza suavidade e sofisticação com elementos que destacam o propósito da empresa.",
            "imagem": "assets/images/projetos/vitrine_mfabian.png"
        },
        {
            "titulo": "Delivery Grace Gourmet",
            "descricao": "Essas três peças foram desenvolvidas especialmente para transformar cada pedido da Grace Gourmet em uma experiência mágica para os clientes. Com uma linguagem leve, afetuosa e divertida, as artes acompanham os pedidos de delivery para acolher, encantar e arrancar sorrisos!",
            "imagem": "assets/images/projetos/delivery_grace.png"
        },
        {
            "titulo": "Banner Luari",
            "descricao": "",
            "imagem": "assets/images/projetos/banner_luari.png"
        },
    ],
    "Reels para Instagram": [
        {
            "titulo": "Reels - Embalando Pedido",
            "descricao": "",
            "video": "assets/videos/pedido_grace.mp4"
        }, 
    ],
    "Vídeos Diversos": [
        {
            "titulo": "Vídeo Institucional - AM.A.P.L.E.",
            "descricao": "",
            "video": "assets/videos/comercial_amaple.mp4"
        },
        {
            "titulo": "Vídeo Empreender Para Crescer - Palestra",
            "descricao": "",
            "video": "assets/videos/palestra.mp4"
        }, 
    ],
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
        else if (categoryName === 'Vídeos Diversos') {
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
        else if (categoryName === 'Reels para Instagram') {
            // Projeto de vídeo - player
            projectCard.innerHTML = `
                <div class="video-player-reels">
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