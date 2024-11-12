 // Função para rolar suavemente até a seção
 document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const sectionId = this.getAttribute('data-target');
        const targetSection = document.getElementById(sectionId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

