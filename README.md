# Portfólio Minimalista de Arquitetura (ARQ. HAAG)

Um portfólio digital moderno, bilíngue (Português/Inglês) e responsivo, desenvolvido especificamente para arquitetos e designers de interiores. O projeto adota uma estética minimalista, focando na usabilidade e na valorização das imagens dos projetos.

🌍 **[Ver Projeto Online (Live Demo)](#)** *(Substitua aqui pelo seu link do GitHub Pages)*

---

## ✨ Funcionalidades Principais

* **Arquitetura SPA (Single Page Application):** Navegação fluida sem recarregar a página, controlada via JavaScript Vanilla (Hashes de URL).
* **Sistema Bilíngue (I18n):** Troca instantânea de idioma (PT/EN) de toda a interface e do banco de dados, sem refresh.
* **Galeria Interativa:** Carrossel de imagens customizado para visualização detalhada dos projetos com legendas dinâmicas.
* **Gerenciamento Descomplicado:** Todo o conteúdo (textos, imagens e projetos) é gerenciado em um único objeto JavaScript, dispensando a necessidade de banco de dados e facilitando a manutenção.
* **100% Responsivo:** Design adaptado perfeitamente para desktops, tablets e smartphones.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido sem o uso de frameworks pesados, garantindo carregamento ultrarrápido e facilidade na hospedagem estática.

* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização responsiva (Flexbox/Grid), variáveis de cor e animações suaves.
* **JavaScript (ES6):** Lógica de roteamento, renderização dinâmica de HTML e tradução.
* **FontAwesome:** Biblioteca de ícones (Rodapé).

---

## 📂 Como Atualizar o Portfólio (Para o Arquiteto)

Toda a inteligência e os dados do site estão no arquivo `app.js`. Você não precisa mexer no código HTML ou CSS para adicionar novos projetos.

1. Abra o arquivo `app.js`.
2. Procure pela constante `portfolioData`.
3. Para adicionar um novo projeto, basta copiar a estrutura de um projeto existente dentro da lista `projects: [...]` e colar logo abaixo, alterando as informações:

\`\`\`javascript
{
    id: 'nome-do-novo-projeto', // Sem espaços
    categoryId: 'interiores',   // Categoria existente
    title: { pt: 'Título em PT', en: 'Title in EN' },
    // ... preencha o restante dos dados
}
\`\`\`

---

## 🚀 Como Rodar o Projeto Localmente

Como é um projeto estático (Vanilla JS), a instalação é extremamente simples:

1. Clone o repositório:
   \`git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git\`
2. Abra a pasta do projeto.
3. Não é necessário `npm install`. Basta usar a extensão **Live Server** do VS Code ou abrir o arquivo `index.html` diretamente no seu navegador.

---

## 🌐 Hospedagem

Este projeto está configurado para ser hospedado gratuitamente no **GitHub Pages**.

---

## 👨‍💻 Desenvolvedor

Desenvolvido com ☕ por **[Seu Nome/Usuário]**
* **Formação:** Engenheiro de Software & Análise de Dados.
* **Contato:** [Seu LinkedIn](https://www.linkedin.com/in/seu-perfil)