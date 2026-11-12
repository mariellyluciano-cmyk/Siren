// O programador revisou e garantiu que a performance do scroll seja limpa e eficiente.
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos que devem aparecer suavemente ao rolar a página
    const faders = document.querySelectorAll('.fade-in-scroll');

    // Configurações do Intersection Observer
    const appearOptions = {
        threshold: 0.15, // Dispara quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de atingir o fundo
    };

    // Cria o observador
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Adiciona a classe que engatilha o CSS de transição
                entry.target.classList.add('visible');
                // Para de observar após o elemento aparecer a primeira vez
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Aplica o observador em cada seção
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});