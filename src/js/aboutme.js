document.addEventListener('DOMContentLoaded', () => {
    const cursorElement = document.createElement('img');
    cursorElement.src = '../storage/img/rightHand.svg'; // Imagen inicial
    cursorElement.style.position = 'absolute';
    cursorElement.style.pointerEvents = 'none';
    cursorElement.style.width = '350px'; // Ajusta el tamaño de la imagen
    cursorElement.style.height = '350px'; // Ajusta el tamaño de la imagen
    cursorElement.style.transform = 'translate(-120px, -160px)'; // Ajusta la posición para centrar el clic
    cursorElement.style.zIndex = '10'; // Z-index moderado para no afectar otros elementos
    document.body.appendChild(cursorElement);

    // Cargar la posición del cursor desde localStorage
    const storedX = localStorage.getItem('cursorX');
    const storedY = localStorage.getItem('cursorY');

    if (storedX && storedY) {
        cursorElement.style.left = `${storedX}px`;
        cursorElement.style.top = `${storedY}px`;
    }

    // Función para actualizar la visibilidad del cursor
    function updateCursorVisibility() {
        if (window.innerWidth > 1040) {
            cursorElement.style.display = 'block'; // Mostrar cursor en pantallas grandes
            document.body.style.cursor = 'none'; // Ocultar cursor por defecto
        } else {
            cursorElement.style.display = 'none'; // Ocultar cursor en pantallas pequeñas
            document.body.style.cursor = 'default'; // Cursor por defecto
        }
    }

    updateCursorVisibility();

    // Mover el cursor con el mouse
    document.addEventListener('mousemove', (event) => {
        cursorElement.style.left = `${event.clientX}px`;
        cursorElement.style.top = `${event.clientY}px`;
        // Almacenar la posición actual en localStorage
        localStorage.setItem('cursorX', event.clientX);
        localStorage.setItem('cursorY', event.clientY);
    });

    // Actualizar visibilidad al redimensionar la ventana
    window.addEventListener('resize', updateCursorVisibility);

    // Cambiar imagen al hacer clic y restaurarla
    let timeoutId;
    document.addEventListener('mousedown', () => {
        cursorElement.src = '../storage/img/rightHandClose.svg'; // Imagen de "presionado"
    });
    document.addEventListener('mouseup', () => {
        clearTimeout(timeoutId); // Limpiar cualquier temporizador anterior
        timeoutId = setTimeout(() => {
            cursorElement.src = '../storage/img/rightHand.svg'; // Restaurar la imagen original
        }, 100);
    });

    // -----------------------------------------
    // Aquí comienza la parte de la animación
    const handImage = document.querySelector('#handbotton img'); // Imagen del botón
    const particle = document.getElementById('particle'); // Partícula
    const bubbles = document.querySelectorAll('[id^="boubleparticle"]'); // Todas las burbujas

    // Inicialmente ocultar los elementos de animación
    particle.style.display = 'none';
    bubbles.forEach(bubble => bubble.style.display = 'none');

    // Función que activa las animaciones y espera que todas terminen
    function activateAnimations() {
        // Mostrar los elementos antes de la animación
        particle.style.display = 'block'; // Cambia a display block o flex según sea necesario
        bubbles.forEach(bubble => bubble.style.display = 'block');

        if (particle) particle.classList.add('particleout');
        bubbles.forEach(bubble => bubble.classList.add('animate-bubblesout'));

        // Esperar a que terminen las animaciones
        const elements = [...bubbles, particle]; // Combina las burbujas y la partícula
        Promise.all(elements.map(el => new Promise(resolve => el.addEventListener('animationend', resolve))))
            .then(() => {
                // Redirigir a la nueva página solo después de que las animaciones terminen
                window.location.href = handImage.parentElement.href;
            });
    }

    // Añade el evento de click en la imagen
    if (handImage) {
        handImage.addEventListener('click', (event) => {
            event.preventDefault(); // Evita redirección inmediata
            activateAnimations();
        });
    }
});
