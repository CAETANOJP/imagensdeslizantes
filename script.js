document.addEventListener("DOMContentLoaded", () => {
    const imagens = [
        "./img/carro1.jpg",
        "./img/carro2.jpg",
        "./img/carro3.jpg",
        "./img/carro4.jpg",
        "./img/carro5.jpg",
        "./img/carro6.jpeg" 
    ];
    
    const imagemDisplay = document.querySelector('.imagem-display');
    const navButtons = document.querySelectorAll('.nav-button');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.deslizante-navegador');

    // Alternar o menu
    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });

    // Função para atualizar a imagem e o destaque do botão
    const updateDisplay = (index) => {
        navButtons.forEach((btn, i) => {
            btn.setAttribute('aria-selected', i === index ? 'true' : 'false');
        });
        imagemDisplay.style.backgroundImage = `url('${imagens[index]}')`;
    };

    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            updateDisplay(index);
            menuList.classList.remove('active'); // Fecha o menu ao selecionar uma imagem
        });
    });

    // Botões de controle para navegar entre as imagens
    document.querySelector('.deslizante-controle--buttonprev-button').addEventListener('click', () => {
        const currentSelected = Array.from(navButtons).findIndex(btn => btn.getAttribute('aria-selected') === 'true');
        const prevIndex = (currentSelected - 1 + navButtons.length) % navButtons.length;
        updateDisplay(prevIndex);
    });

    document.querySelector('.deslizante-controle--buttonnext-button').addEventListener('click', () => {
        const currentSelected = Array.from(navButtons).findIndex(btn => btn.getAttribute('aria-selected') === 'true');
        const nextIndex = (currentSelected + 1) % navButtons.length;
        updateDisplay(nextIndex);
    });

    // Navegação por teclado
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            document.querySelector('.deslizante-controle--buttonprev-button').click();
        } else if (event.key === 'ArrowRight') {
            document.querySelector('.deslizante-controle--buttonnext-button').click();
        }
    });
});
