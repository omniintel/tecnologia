document.addEventListener("DOMContentLoaded", () => {
    // Elementos DOM principais
    const intro = document.querySelector('.intro');
    const background = document.querySelector('body');
    const header = document.querySelector('header');
    const menuButton = document.getElementById('abremenu');
    const menuLateral = document.getElementById('enimenu');
    
    // Controle do menu lateral
    menuButton?.addEventListener('click', () => {
        menuLateral?.classList.toggle('menulat-open');
    });

    // Fecha menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menuLateral?.contains(e.target) && !menuButton?.contains(e.target)) {
            menuLateral?.classList.remove('menulat-open');
        }
    });

    // Animação de reflexo do título
    const addReflectAnimation = () => {
        const tipage = header?.querySelector('h1.tipage');
        if (!tipage || !tipage.textContent.includes('OMNIINTEL')) return;

        tipage.style.transition = 'none';
        tipage.style.position = 'relative';
        
        const reflectOverlay = document.createElement('div');
        reflectOverlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transform: translateX(100%);
            animation: reflectSlide 0.8s ease-in-out;
            pointer-events: none;
        `;
        
        tipage.appendChild(reflectOverlay);
        
        setTimeout(() => {
            reflectOverlay.remove();
        }, 800);
    };

    const reflectAnimationInterval = setInterval(addReflectAnimation, 5000);

    // Estilos para animações
    const addKeyframes = () => {
        const styles = `
            @keyframes reflectSlide {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
            @keyframes reflectEffect {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
            }
        `;
        
        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    };

    addKeyframes();

    // Cleanup on page unload
    window.addEventListener('unload', () => {
        clearInterval(reflectAnimationInterval);
    });
});
