document.addEventListener("DOMContentLoaded", function() {
    const boxLanguage = document.getElementById('boxlanguage');
    const languageModal = document.getElementById('language-modal');
    const closeModal = document.getElementById('close-modal');
    const startButton = document.getElementById('startButton');

    // Inicialmente, el modal debería estar oculto
    languageModal.style.display = 'none'; 

    // Mostrar el modal de idioma al hacer clic en 'Language'
    boxLanguage.addEventListener('click', function(event) {
        event.preventDefault();
        languageModal.style.display = 'flex'; 
    });

    // Ocultar el modal al hacer clic en 'Close'
    closeModal.addEventListener('click', function() {
        languageModal.style.display = 'none';
    });

    // Activar la animación y redirigir al hacer clic en 'Start'
    startButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar navegación instantánea

        // Añadir la clase para activar la animación de salida
        document.body.classList.add('body-slide-out');

        // Esperar a que termine la animación (400ms) antes de redirigir
        setTimeout(function() {
            window.location.href = "./src/viewsEnglish/home.html"; // Cambia a la nueva página
        }, 1000); // Coincide con la duración de la animación CSS
    });
});
