document.addEventListener("DOMContentLoaded", function() {
    const boxLanguage = document.getElementById('boxlanguage');
    const languageModal = document.getElementById('language-modal');
    const closeModal = document.getElementById('close-modal');
    const startButton = document.getElementById('startButton');

    // Inicialmente, el modal debería estar oculto (esto es redundante ya que ya lo tienes en CSS)
    languageModal.style.display = 'none'; // Asegúrate de que esté oculto

    // Escuchar el evento de clic en el botón de "Language"
    boxLanguage.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la navegación instantánea
        languageModal.style.display = 'flex'; // Mostrar el modal
    });

    // Escuchar el evento de clic en el botón de "Close"
    closeModal.addEventListener('click', function() {
        languageModal.style.display = 'none'; // Ocultar el modal
    });

    // Escuchar el evento de clic en el botón de "Start"
    startButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la navegación instantánea
        document.body.classList.add('slide-out');

        setTimeout(function() {
            window.location.href = "./src/viewsEnglish/home.html"; // Redirigir tras la animación
        }, 400); // Coincide con la duración de la animación
    });
});
