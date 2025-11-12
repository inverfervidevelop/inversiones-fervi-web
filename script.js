document.addEventListener("DOMContentLoaded", function() {
    
    // Lógica para el carrusel de fondo
    const images = document.querySelectorAll('.bg-image');
    let currentIndex = 0;

    // Asegurarse de que la primera imagen esté activa al cargar
    if (images.length > 0) {
        images[0].classList.add('active');
    }

    setInterval(() => {
        // Quita la clase 'active' de la imagen actual
        images[currentIndex].classList.remove('active');
        
        // Calcula el índice de la siguiente imagen
        currentIndex = (currentIndex + 1) % images.length;
        
        // Añade la clase 'active' a la nueva imagen
        images[currentIndex].classList.add('active');
    }, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)

    // Lógica para el scroll suave de la navegación
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula la posición del elemento, restando el alto de la nav
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});