document.getElementById('boxlanguage').addEventListener('click', function () {
    document.getElementById('language-modal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('language-modal').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');

    // Escuchar el evento de clic en el botón de "Start"
    startButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la navegación instantánea

        // Añadir la clase para deslizar todo el contenido hacia la izquierda
        document.body.classList.add('slide-out');

        // Esperar a que termine la animación antes de redirigir a la siguiente página
        setTimeout(function() {
            window.location.href = "./src/viewsEnglish/home.html"; // Redirigir tras la animación
        }, 400); // Coincide con la duración de la animación
    });
});


