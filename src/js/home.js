document.addEventListener('DOMContentLoaded', () => {
    const cursorElement = document.createElement('img');
    cursorElement.src = '../storage/img/rightHand.svg'; // Imagen inicial
    cursorElement.style.position = 'absolute';
    cursorElement.style.pointerEvents = 'none';
    cursorElement.style.width = '300px'; // Ajusta el tamaño de la imagen
    cursorElement.style.height = '300px'; // Ajusta el tamaño de la imagen
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
        cursorElement.src = '../storage/img/rightHandClose.svg';    
    });

    document.addEventListener('mouseup', () => {
        // Restablecer la imagen después de un breve período
        clearTimeout(timeoutId); // Limpiar cualquier temporizador anterior
        timeoutId = setTimeout(() => {
            cursorElement.src = '../storage/img/rightHand.svg'; // Volver a la imagen original después de 200 ms
        }, 150);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.potion a');
    const backLink = document.querySelector('#back a');
    const body = document.body;

    // Función para manejar la animación y redirección para los enlaces de potion
    function handlePotionClick(event, url) {
        event.preventDefault(); // Evitar navegación instantánea

        // Añadir la clase para activar la animación de salida para los enlaces de potion
        body.classList.add('body-slide-out');

        // Esperar a que termine la animación (ajusta el tiempo según tu animación)
        setTimeout(function() {
            window.location.href = url; // Redirige a la nueva página
        }, 500); // Ajusta según la duración real de tu animación
    }

    // Función para manejar la animación y redirección para el botón back
    function handleBackClick(event, url) {
        event.preventDefault(); // Evitar navegación instantánea

        // Añadir la clase para activar la animación de salida para el botón back
        body.classList.add('body-slide-out-back');

        // Esperar a que termine la animación (ajusta el tiempo según tu animación)
        setTimeout(function() {
            window.location.href = url; // Redirige a la nueva página
        }, 500); // Ajusta según la duración real de tu animación
    }

    // Asignar el evento a cada enlace de potion con su respectiva página
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.getAttribute('href'); // Obtener el URL del enlace
            handlePotionClick(event, url); // Llamar a la función con la URL correcta
        });
    });

    // Asignar el evento al botón back con su respectiva página
    if (backLink) {
        backLink.addEventListener('click', function(event) {
            const url = this.getAttribute('href'); // Obtener el URL del enlace
            handleBackClick(event, url); // Llamar a la función con la URL correcta
        });
    }
});
