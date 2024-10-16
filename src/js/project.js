// home.js
document.addEventListener('DOMContentLoaded', () => {
    const cursorElement = document.createElement('img');
    cursorElement.src = '../storage/img/leftHand.svg'; // Imagen inicial
    cursorElement.style.position = 'absolute';
    cursorElement.style.pointerEvents = 'none';
    cursorElement.style.width = '350px'; // Ajusta el tamaño de la imagen
    cursorElement.style.height = '350px'; // Ajusta el tamaño de la imagen
    cursorElement.style.transform = 'translate(-120px, -160px)'; // Ajusta la posición para centrar el clic
    document.body.appendChild(cursorElement);

    // Cargar la posición del cursor desde localStorage
    const storedX = localStorage.getItem('cursorX');
    const storedY = localStorage.getItem('cursorY');
    
    if (storedX && storedY) {
        cursorElement.style.left = `${storedX}px`;
        cursorElement.style.top = `${storedY}px`;
    }

    function updateCursorVisibility() {
        if (window.innerWidth > 1040) {
            cursorElement.style.display = 'block'; // Mostrar cursor en pantallas grandes
            document.body.style.cursor = 'none'; // Ocultar cursor por defecto
        } else {
            cursorElement.style.display = 'none'; // Ocultar cursor en pantallas pequeñas
            document.body.style.cursor = 'default'; // Asegúrate de que el cursor sea el predeterminado
        }
    }

    updateCursorVisibility();

    document.addEventListener('mousemove', (event) => {
        cursorElement.style.left = `${event.clientX}px`;
        cursorElement.style.top = `${event.clientY}px`;

        // Almacenar la posición actual en localStorage
        localStorage.setItem('cursorX', event.clientX);
        localStorage.setItem('cursorY', event.clientY);
    });

    window.addEventListener('resize', updateCursorVisibility);

    // Almacena el ID del temporizador
    let timeoutId;

    document.addEventListener('mousedown', () => {
        // Cambiar a la imagen de "presionado"
        cursorElement.src = '../storage/img/leftHandClose.svg';    
    });

    document.addEventListener('mouseup', () => {
        // Restablecer la imagen después de un breve período
        clearTimeout(timeoutId); // Limpiar cualquier temporizador anterior
        timeoutId = setTimeout(() => {
            cursorElement.src = '../storage/img/leftHand.svg'; // Volver a la imagen original después de 200 ms
        }, 100);
    });
});



function handleBackClick(event, url) {
    event.preventDefault();

    const handElement = document.getElementById('hand');
    const titleElement = document.getElementById('title');
    let animationsEnded = 0;

    [handElement, titleElement].forEach(element => {
        element.classList.add(element.id === 'hand' ? 'slideOutBottom' : 'slideOutLeft');
        element.addEventListener('animationend', () => {
            animationsEnded++;
            if (animationsEnded === 2) window.location.href = url;
        });
    });
}

document.getElementById('backbutton').addEventListener('click', function(event) {
    const url = this.querySelector('a').getAttribute('href');
    handleBackClick(event, url);
});