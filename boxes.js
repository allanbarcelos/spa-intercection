
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.boxes');
    const boxes = document.querySelectorAll('.box');

    // Função para animar as caixas ao entrar na seção
    function showBoxes() {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('visible');
            }, index * 100); // Atraso em cascata para montagem
        });
    }

    // Função para desmontar as caixas ao sair da seção
    function hideBoxes() {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.remove('visible');
            }, index * 100); // Atraso em cascata para desmontagem
        });
    }

    // Configurar IntersectionObserver para o container
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando o container entra na viewport, mostra as caixas
                showBoxes();
            } else {
                // Quando o container sai da viewport, esconde as caixas
                hideBoxes();
            }
        });
    }, { threshold: 0.5 });

    // Observar o container
    if (container) {
        observer.observe(container);
    }

    // Atribuir direções de animação às caixas
    boxes.forEach((box, index) => {
        if (index % 3 === 0) {
            box.classList.add('from-left');
        } else if (index % 3 === 1) {
            box.classList.add('from-right');
        } else {
            box.classList.add('from-bottom');
        }
    });
});