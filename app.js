/* ==================================================================
   0. IDIOMA ATUAL (Controlador de Idioma)
================================================================== */
let currentLang = 'pt';

/* ==================================================================
   1. BANCO DE DADOS VETERINÁRIO (Dados Reais: Melissa Baraldi)
================================================================== */

const portfolioData = {
    // --- Textos da Interface ---
    ui: {
        menu_projects: { pt: "Áreas de Atuação", en: "Services" },
        menu_about: { pt: "Sobre Mim", en: "About Me" },
        menu_contact: { pt: "Contato", en: "Contact" },
        contact_title: { pt: "Entre em Contato", en: "Get in Touch" },
        footer_rights: { pt: "© 2026. Medicina Veterinária Integrativa.", en: "© 2026. Integrative Veterinary Medicine." },
        not_found_cat: { pt: "Categoria não encontrada.", en: "Category not found." },
        not_found_proj: { pt: "Serviço não encontrado.", en: "Service not found." },
        home_breadcrumb: { pt: "Início", en: "Home" },
        projects_breadcrumb: { pt: "Serviços", en: "Services" },
        back_btn: { pt: "Voltar", en: "Back" },
        the_project: { pt: "Detalhes da Experiência", en: "Experience Details" },
        coming_soon: { pt: "Em breve novas atualizações.", en: "Updates coming soon." }
    },

    // --- Informações Pessoais (Baseado no CV) ---
    info: {
        name: "Melissa Baraldi",
        title: { pt: "Médica Veterinária | Equinos e Bovinos", en: "Veterinarian | Equine & Bovine" },
        heroImage: "img/equinos/hipismo3.jpg.jpeg", // Lembre de colocar uma foto dela aqui
        aboutText: {
            pt: [
                "Sou Médica Veterinária formada em 2024, com sólida experiência prática em propriedades rurais, haras e colégios agrícolas. Minha trajetória é marcada pela atuação direta no campo, focando em manejo sanitário, bem-estar animal e suporte técnico ao produtor.",
                "Possuo vivência prática em reprodução equina, incluindo acompanhamento de ciclo e cuidados com potros, adquirida no Haras Sacramento (SP). Também atuo com equoterapia e manejo diário de cavalos atletas.",
                "Na bovinocultura, tenho experiência com manejo de ordenha, nutrição e sanidade, reforçada por capacitações em IATF e vacinação contra Brucelose e Tuberculose. Sou uma profissional proativa, adaptável e comprometida com resultados."
            ],
            en: [
                "I am a Veterinarian graduated in 2024, with solid practical experience in rural properties, stud farms, and agricultural colleges. My career is marked by direct work in the field, focusing on sanitary management, animal welfare, and technical support to the producer.",
                "I have practical experience in equine reproduction, including cycle monitoring and foal care, acquired at Haras Sacramento (SP). I also work with equine therapy and daily management of athletic horses.",
                "In cattle farming, I have experience with milking management, nutrition, and sanitation, reinforced by training in IATF and vaccination against Brucellosis and Tuberculosis. I am a proactive, adaptable professional committed to results."
            ]
        },
        aboutImage: "img/equinos/capa-hipismo.jpg.jpeg", // Foto de perfil
        
        // Links de Contato Reais do CV
        whatsappLink: "https://wa.link/115he4", // Telefone do CV formatado para link
        linkedin: "https://www.linkedin.com/in/melissa-baraldi-b3b100351/" // Coloquei o e-mail no botão secundário por enquanto
    },

    // --- Categorias de Trabalho ---
    categories: [
        { id: 'equinos', title: { pt: 'Medicina e Manejo Equino', en: 'Equine Medicine & Management' }, cover: 'img/equinos/estagio2.jpg.jpeg' },
        { id: 'bovinos', title: { pt: 'Bovinocultura (Leite e Corte)', en: 'Cattle Farming (Dairy & Beef)' }, cover: 'img/bovinos/bovinos1.jpeg' },
        { id: 'tecnica', title: { pt: 'Formação e Técnica', en: 'Education & Technical Skills' }, cover: 'img/equinos/estagio1.jpg.jpeg' }
    ],

    // --- Lista de Serviços/Casos (Baseado nas Experiências do CV) ---
    projects: [
        // --- PROJETOS DE EQUINOS ---
        {
            id: 'reproducao-clinica-equina',
            categoryId: 'equinos',
            title: { pt: 'Reprodução e Clínica Equina', en: 'Equine Reproduction & Clinical Care' },
            location: { pt: 'Haras Sacramento - Avaré/SP', en: 'Haras Sacramento - Avaré/SP' },
            description: { 
                pt: 'Experiência prática intensiva em rotina de haras. Atuação direta no apoio clínico, reprodução e transferência de embriões. Realização de palpação retal, acompanhamento de ciclo reprodutivo e administração de medicamentos. Cuidados neonatais com potros recém-nascidos e tratamento de ferimentos.', 
                en: 'Intensive practical experience in stud farm routine. Direct involvement in clinical support, reproduction, and embryo transfer. Performance of rectal palpation, reproductive cycle monitoring, and medication administration. Neonatal care for newborn foals and wound treatment.' 
            },
            cover: 'img/equinos/estagio1.jpg.jpeg',
            gallery: [
                { src: 'img/equinos/estagio2.jpg.jpeg', desc: { pt: 'Cuidados com eguas prenhas.', en: 'Care for pregnant mares.' } },
                { src: 'img/equinos/estagio5.jpg.jpeg', desc: { pt: 'Administração de medicamentos e suporte clínico.', en: 'Medication administration and clinical support.' } }
            ],
        },
        {
            id: 'equoterapia-manejo',
            categoryId: 'equinos',
            title: { pt: 'Manejo, Equitação e Equoterapia', en: 'Management, Riding & Equine Therapy' },
            location: { pt: 'CT Ayrton da Silva / HP Horsinho', en: 'Foz do Iguaçu - PR' },
            description: { 
                pt: 'Suporte técnico em aulas de equoterapia e equitação clássica (salto e três tambores). Responsável pelo manejo diário dos animais, incluindo alimentação, hidratação e primeiros cuidados veterinários. Foco no bem-estar animal integrado à atividade esportiva e terapêutica.', 
                en: 'Technical support in equine therapy and classic riding classes (jumping and barrel racing). Responsible for daily animal management, including feeding, hydration, and veterinary first aid. Focus on animal welfare integrated with sports and therapeutic activities.' 
            },
            cover: 'img/equinos/hipismo2.jpg.jpeg',
            gallery: [
                { src: 'img/equinos/hipismo3.jpg.jpeg', desc: { pt: 'Auxílio em equoterapia.', en: 'Assistance in equine therapy.' } },
                { src: 'img/equinos/hipismo5.jpg.jpeg', desc: { pt: 'Manejo nutricional diário.', en: 'Daily nutritional management.' } }
            ],
        },

        // --- PROJETOS DE BOVINOS ---
        {
            id: 'bovinocultura-leiteira',
            categoryId: 'bovinos',
            title: { pt: 'Bovinocultura e Sanidade', en: 'Cattle Farming & Health' },
            location: { pt: 'Colégio Agrícola - Foz do Iguaçu', en: 'Agricultural College - Foz do Iguaçu' },
            description: { 
                pt: 'Atuação completa na rotina de gado leiteiro, incluindo ordenha, manejo nutricional e sanitário. Capacitação técnica em Inseminação Artificial em Tempo Fixo (IATF) e vacinação contra Brucelose e Tuberculose, garantindo a saúde do rebanho e a qualidade da produção.', 
                en: 'Complete involvement in dairy cattle routine, including milking, nutritional, and sanitary management. Technical training in Fixed-Time Artificial Insemination (FTAI) and vaccination against Brucellosis and Tuberculosis, ensuring herd health and production quality.' 
            },
            cover: 'img/bovinos/bovinos17.jpeg',
            gallery: [
                { src: 'img/bovinos/bovinos1.jpeg', desc: { pt: 'Ordenha e manejo nutricional.', en: 'Milking and nutritional management.' } },
                { src: 'img/bovinos/bovinos9.jpeg', desc: { pt: 'Vacinação e sanidade.', en: 'Vaccination and health programs.' } }
            ],
        }
    ]
};

/* ==================================================================
   2. LÓGICA DO SITE (Não precisa alterar nada abaixo daqui)
================================================================== */
const contentArea = document.getElementById('content-area');

function changeLanguage(lang) {
    currentLang = lang;
    document.getElementById('lang-pt').classList.toggle('active', lang === 'pt');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(portfolioData.ui[key]) {
            el.innerText = portfolioData.ui[key][currentLang];
        }
    });
    router(); 
}

function router() {
    const hash = window.location.hash;
    window.scrollTo(0,0);

    if (hash === '' || hash === '#home') { renderHome(); } 
    else if (hash === '#sobre') { renderAbout(); } 
    else if (hash.startsWith('#cat/')) { renderCategoryPage(hash.split('/')[1]); } 
    else if (hash.startsWith('#proj/')) { renderProjectPage(hash.split('/')[1]); }
}

function renderHome() {
    let categoriesHTML = '';
    portfolioData.categories.forEach(cat => {
        categoriesHTML += `
            <a href="#cat/${cat.id}" class="cat-card">
                <img src="${cat.cover}" alt="${cat.title[currentLang]}">
                <h3>${cat.title[currentLang]}</h3>
            </a>
        `;
    });

    contentArea.innerHTML = `
        <section class="hero" style="background-image: url('${portfolioData.info.heroImage}')">
            <div class="hero-content">
                <h1>${portfolioData.info.name}</h1>
                <h2>${portfolioData.info.title[currentLang]}</h2>
            </div>
        </section>
        <section class="container category-grid">
            ${categoriesHTML}
        </section>
    `;
    updateActiveLink('home');
}

function renderAbout() {
    let paragraphsHTML = portfolioData.info.aboutText[currentLang].map(p => `<p>${p}</p>`).join('');
    contentArea.innerHTML = `
        <section class="container about-section">
            <div class="about-img">
                <img src="${portfolioData.info.aboutImage}" alt="${portfolioData.info.name}">
            </div>
            <div class="about-text">
                <h1>${portfolioData.ui.menu_about[currentLang]}</h1>
                ${paragraphsHTML}
            </div>
        </section>
    `;
    updateActiveLink('sobre');
}

function renderCategoryPage(catId) {
    const category = portfolioData.categories.find(c => c.id === catId);
    const catProjects = portfolioData.projects.filter(p => p.categoryId === catId);

    if (!category) { contentArea.innerHTML = `<h2>${portfolioData.ui.not_found_cat[currentLang]}</h2>`; return; }

    let projectsHTML = '';
    catProjects.forEach(proj => {
        projectsHTML += `
            <a href="#proj/${proj.id}" class="project-card">
                <div class="thumb-container">
                    <img src="${proj.cover}" alt="${proj.title[currentLang]}">
                </div>
                <div class="project-info">
                    <h3>${proj.title[currentLang]}</h3>
                    <span>${proj.location[currentLang]}</span>
                </div>
            </a>
        `;
    });

    contentArea.innerHTML = `
        <section class="container category-header">
            <h4><a href="#home">${portfolioData.ui.home_breadcrumb[currentLang]}</a> / ${portfolioData.ui.projects_breadcrumb[currentLang]}</h4>
            <h1>${category.title[currentLang]}</h1>
        </section>
        <section class="container project-grid">
            ${projectsHTML.length ? projectsHTML : `<p>${portfolioData.ui.coming_soon[currentLang]}</p>`}
        </section>
    `;
    updateActiveLink('');
}

let currentSlideIndex = 0; 
function renderProjectPage(projId) {
    const project = portfolioData.projects.find(p => p.id === projId);
    if (!project) { contentArea.innerHTML = `<h2>${portfolioData.ui.not_found_proj[currentLang]}</h2>`; return; }
    currentSlideIndex = 0;
    
    let slidesHTML = '';
    project.gallery.forEach((item, index) => {
        slidesHTML += `
            <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                <img src="${item.src}" alt="${item.desc[currentLang]}">
                <div class="carousel-caption">${item.desc[currentLang]}</div>
            </div>
        `;
    });

    contentArea.innerHTML = `
         <section class="container category-header">
             <h4><a href="#home">${portfolioData.ui.home_breadcrumb[currentLang]}</a> / <a href="#cat/${project.categoryId}">${portfolioData.ui.back_btn[currentLang]}</a></h4>
         </section>
        <section class="container project-detail">
            <h1>${project.title[currentLang]}</h1>
            <p class="location"><i class="fa-solid fa-location-dot"></i> ${project.location[currentLang]}</p>
            <img src="${project.cover}" class="main-project-img">
            <div class="project-description">
                <h3>${portfolioData.ui.the_project[currentLang]}</h3>
                <p>${project.description[currentLang]}</p>
            </div>
            ${project.gallery.length > 0 ? `
            <div class="project-carousel">
                <div class="carousel-inner">${slidesHTML}</div>
                <button class="carousel-btn prev" onclick="moveSlide(-1)">&#10094;</button>
                <button class="carousel-btn next" onclick="moveSlide(1)">&#10095;</button>
            </div>` : ''}
        </section>
    `;
    updateActiveLink('');
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
    slides[currentSlideIndex].classList.add('active');
}

function updateActiveLink(page) {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const activeBtn = document.getElementById('btn-' + page);
    if(activeBtn) activeBtn.classList.add('active');
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
    // Tenta atualizar o link do WhatsApp se o botão existir
    const whatsappBtn = document.getElementById('contact-whatsapp');
    if (whatsappBtn) whatsappBtn.href = portfolioData.info.whatsappLink;
    
    // Tenta atualizar o link do Email/LinkedIn se o botão existir
    const linkedinBtn = document.getElementById('contact-linkedin');
    if (linkedinBtn) linkedinBtn.href = portfolioData.info.linkedin;

    changeLanguage(currentLang);
});