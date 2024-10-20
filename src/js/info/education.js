const boxEducation = document.getElementById('boxeducation');
let isDown = false;
let startX;
let scrollLeft;

// Evento cuando el mouse es presionado
boxEducation.addEventListener('mousedown', (e) => {
    isDown = true;
    boxEducation.classList.add('active');
    startX = e.pageX - boxEducation.offsetLeft;
    scrollLeft = boxEducation.scrollLeft;
});

// Evento cuando el mouse es levantado
boxEducation.addEventListener('mouseleave', () => {
    isDown = false;
    boxEducation.classList.remove('active');
});

boxEducation.addEventListener('mouseup', () => {
    isDown = false;
    boxEducation.classList.remove('active');
});

// Evento cuando el mouse se mueve (drag)
boxEducation.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // Detener si no se está presionando el mouse
    e.preventDefault();   // Prevenir la selección de texto accidental
    const x = e.pageX - boxEducation.offsetLeft;
    const walk = (x - startX) * 2; // Velocidad del desplazamiento
    boxEducation.scrollLeft = scrollLeft - walk;
});
