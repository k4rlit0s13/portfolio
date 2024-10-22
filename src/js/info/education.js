document.addEventListener('DOMContentLoaded', () => {
    const cursorElement = document.createElement('img');
    cursorElement.src = '../../storage/img/handpointselect.svg'; // Imagen inicial
    cursorElement.style.position = 'absolute';
    cursorElement.style.pointerEvents = 'none';
    cursorElement.style.width = '350px'; // Ajusta el tamaño de la imagen
    cursorElement.style.height = '350px'; // Ajusta el tamaño de la imagen
    cursorElement.style.transform = 'translate(-30px, -60px)'; // Ajusta la posición para centrar el clic
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
        cursorElement.src = '../../storage/img/handpointselectclick.svg'; // Imagen de "presionado"
    });
    document.addEventListener('mouseup', () => {
        clearTimeout(timeoutId); // Limpiar cualquier temporizador anterior
        timeoutId = setTimeout(() => {
            cursorElement.src = '../../storage/img/handpointselect.svg'; // Restaurar la imagen original
        }, 100);
    });
});







const boxEducation = document.getElementById('boxeducation');
let isDown = false;
let startX;
let scrollLeft;
let isDragging = false;

// Prevenir la selección de texto e imágenes
boxEducation.style.userSelect = 'none'; // Evitar la selección de texto o imágenes

// Evento al presionar el mouse
boxEducation.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false; // Reseteamos la variable
    boxEducation.classList.add('active');
    startX = e.pageX - boxEducation.offsetLeft;
    scrollLeft = boxEducation.scrollLeft;
});

// Evento al mover el mouse (arrastre)
boxEducation.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Solo ejecuta si el mouse está presionado
    e.preventDefault(); // Prevenir el comportamiento por defecto
    isDragging = true; // Marca que estamos arrastrando
    const x = e.pageX - boxEducation.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad del desplazamiento
    boxEducation.scrollLeft = scrollLeft - walk;
});

// Al soltar el mouse, restablece las variables
boxEducation.addEventListener('mouseup', () => {
    isDown = false;
    boxEducation.classList.remove('active');
});

// Prevenir el comportamiento de arrastrar imágenes
boxEducation.querySelectorAll('img, a').forEach(el => {
    el.setAttribute('draggable', 'false'); // Evita que se arrastren las imágenes y enlaces
});

// Evita que se active el enlace si hubo arrastre
boxEducation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault(); // Previene la acción del enlace si arrastraste
        }
    });
});

// Evento cuando el mouse sale del área del contenedor
boxEducation.addEventListener('mouseleave', () => {
    isDown = false;
    boxEducation.classList.remove('active');
});



document.addEventListener("DOMContentLoaded", init);

function init() {
    const backButton = document.getElementById("backbutton");
    backButton.addEventListener("click", handleBackClick);
}

function handleBackClick(event) {
    event.preventDefault(); // Prevenir la redirección inmediata
    document.body.classList.add("back-animation"); // Agregar la clase para iniciar la animación

    // Esperar a que termine la animación (1s en este caso) antes de redirigir
    document.body.addEventListener("animationend", () => {
        window.location.href = event.target.closest("a").href; // Redirigir después de la animación
    }, { once: true });
}
