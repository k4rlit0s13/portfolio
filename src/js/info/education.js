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
