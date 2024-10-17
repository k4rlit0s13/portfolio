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
});




document.addEventListener('DOMContentLoaded', () => {
    const handImage = document.querySelector('#handbotton img'); // Selecciona la imagen dentro del botón

    // Selecciona las partículas y burbujas
    const particle = document.getElementById('particle');
    const bubbles = [
        document.getElementById('boubleparticle1'),
        document.getElementById('boubleparticle2'),
        document.getElementById('boubleparticle3'),
        document.getElementById('boubleparticle4'),
        document.getElementById('boubleparticle5')
    ];

    // Función que activa las animaciones
    function activateAnimations() {
        // Activa la animación en el div #particle
        if (particle) {
            particle.classList.add('particleout');
        }

        // Activa la animación en cada burbuja
        bubbles.forEach(bubble => {
            if (bubble) {
                bubble.classList.add('animate-bubblesout');
            }
        });
    }

    // Añade el evento de click en la imagen dentro del div #handbotton
    if (handImage) {
        handImage.addEventListener('click', (event) => {
            event.preventDefault(); // Esto evita que redirija la página inmediatamente al hacer clic.
            activateAnimations();
            setTimeout(() => {
                window.location.href = handImage.parentElement.href; // Redirige después de la animación
            }, 1500); // Ajusta el tiempo si es necesario
        });
    }
});
