document.addEventListener('DOMContentLoaded', () => {
    const cursorElement = document.createElement('img');
    cursorElement.src = './src/storage/img/handpointselect.svg'; // Imagen inicial
    cursorElement.style.position = 'absolute';
    cursorElement.style.pointerEvents = 'none';
    cursorElement.style.width = '350px'; // Ajusta el tamaño de la imagen
    cursorElement.style.height = '350px'; // Ajusta el tamaño de la imagen
    cursorElement.style.transform = 'translate(-30px, -60px)'; // Ajusta la posición para centrar el clic
    cursorElement.style.zIndex = '10'; // Z-index moderado para no afectar otros elementos
    document.body.appendChild(cursorElement);

    // Función para actualizar la visibilidad del cursor
    function updateCursorVisibility() {
        if (window.innerWidth > 1040) {
            cursorElement.style.display = 'block'; // Mostrar cursor en pantallas grandes
            document.body.style.cursor = 'none'; // Ocultar cursor por defecto
        } else {
            cursorElement.style.display = 'none'; // Ocultar cursor en pantallas pequeñas
            document.body.style.cursor = 'default'; // Mostrar cursor por defecto
        }
    }

    updateCursorVisibility();

    // Mover el cursor con el mouse
    document.addEventListener('mousemove', (event) => {
        cursorElement.style.left = `${event.clientX}px`;
        cursorElement.style.top = `${event.clientY}px`;
    });

    // Actualizar visibilidad al redimensionar la ventana
    window.addEventListener('resize', updateCursorVisibility);

    // Cambiar imagen al hacer clic y restaurarla
    document.addEventListener('mousedown', () => {
        cursorElement.src = './src/storage/img/handpointselectclick.svg'; // Imagen de "presionado"
    });
    document.addEventListener('mouseup', () => {
        setTimeout(() => {
            cursorElement.src = './src/storage/img/handpointselect.svg'; // Restaurar la imagen original
        }, 100);
    });
});





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
        }, 500); // Ajusta esto según la duración real de tu animación        
    });
});