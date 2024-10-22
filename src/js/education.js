document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("handbutton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir la redirección inmediata

        const curtineBox = document.getElementById("curtinebox");

        // Iniciar la animación
        curtineBox.classList.add("animatecurtine");

        // Escuchar el evento 'animationend' para redirigir
        curtineBox.addEventListener('animationend', function() {
            window.location.href = event.target.closest("a").href; // Redirigir después de la animación
        }, { once: true }); // Asegura que este evento se escuche solo una vez
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
            if (animationsEnded === 1) window.location.href = url;
        });
    });
}

document.getElementById('backbutton').addEventListener('click', function(event) {
    const url = this.querySelector('a').getAttribute('href');
    handleBackClick(event, url);
});



const box = document.getElementById('boxeducation');
let isDown = false;
let startX;
let scrollLeft;

// Cuando el usuario hace clic y mantiene presionado
box.addEventListener('mousedown', (e) => {
    isDown = true;
    box.classList.add('active');
    box.style.cursor = 'grabbing'; // Cambia el cursor a "grabbing"
    startX = e.pageX - box.offsetLeft;
    scrollLeft = box.scrollLeft;
});

// Cuando el usuario mueve el mouse
box.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Si no está presionando, no hacer nada
    e.preventDefault();
    const x = e.pageX - box.offsetLeft;
    const walk = (x - startX) * 2; // Controla la velocidad del desplazamiento
    box.scrollLeft = scrollLeft - walk;
});

// Cuando el usuario suelta el clic
box.addEventListener('mouseup', () => {
    isDown = false;
    box.style.cursor = 'grab'; // Cambia el cursor de nuevo a "grab"
});

// Cuando el usuario saca el mouse del contenedor
box.addEventListener('mouseleave', () => {
    isDown = false;
    box.style.cursor = 'grab'; // Asegura que el cursor vuelva a "grab"
});


