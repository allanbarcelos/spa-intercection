

// Função para destacar a seção ativa no menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function highlightMenu() {
    let currentSection = null;

    // Percorrer as seções para encontrar a visível
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        // Verificar se a seção está visível
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });

    // Destacar o link do menu correspondente à seção visível
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('data-target');
        if (sectionId === currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Adicionar evento de rolagem para atualizar o menu
window.addEventListener('scroll', highlightMenu);