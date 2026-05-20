// Aguarda o HTML completo carregar na tela
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. SISTEMA DE DESTAQUE NO MENU (Scroll Spy)
    // ==========================================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar nav a");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Verifica se a página rolou até a altura da seção atual
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Remove a classe 'active' de todos os links e adiciona no que está visível
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSectionId)) {
                link.classList.add("active");
            }
        });
    });

    // ==========================================
    // 2. CONTROLE DOS FORMULÁRIOS PROFISSIONAIS
    // ==========================================
    // Esta função controla a animação de sucesso em qualquer formulário
    const gerenciarFormulario = (classeForm, mensagemSucesso, corSucesso) => {
        const form = document.querySelector(classeForm);
        if (form) {
            form.addEventListener("submit", (event) => {
                event.preventDefault(); // Impede a página de recarregar sozinha

                const nomeInput = form.querySelector("input[type='text']").value;
                const botao = form.querySelector(".btn-submit");
                const textoOriginal = botao.innerText;
                
                // Animação de sucesso profissional
                botao.style.backgroundColor = corSucesso;
                botao.innerText = `🔥 ${mensagemSucesso}, ${nomeInput}!`;
                botao.disabled = true; // Desativa o botão para evitar múltiplos cliques

                // Limpa os campos do formulário
                form.reset();
                
                // Volta o botão ao normal depois de 4 segundos
                setTimeout(() => {
                    botao.style.backgroundColor = "";
                    botao.innerText = textoOriginal;
                    botao.disabled = false;
                }, 4000);
            });
        }
    };

    // Ativa o formulário dos Fãs (Verde)
    gerenciarFormulario(".fan-form", "Proposta enviada", "#22c55e");
    
    // Ativa o formulário Comercial (Azul)
    gerenciarFormulario(".business-form", "E-mail comercial enviado", "#007acc");
});