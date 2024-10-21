const roll = document.getElementById('roll');

roll.addEventListener('animationend', () => {
  roll.classList.add('enter-done');
});


document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});


document.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.querySelector('body');
  const animatedElements = document.querySelectorAll('#roll, #rollLeft, #rollCenter, #rollRight, #leftHand, #rightHand');

  // Oculta las otras animaciones al principio
  animatedElements.forEach(el => {
      el.style.visibility = 'visible';
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const particleElement = document.getElementById('particle');
  const bodyParticleElement = document.getElementById('bodyparticle');

  // Desactivar el scroll
  document.body.style.overflow = 'hidden';

  // Espera a que la animación termine en #particle y #bodyparticle
  bodyParticleElement.addEventListener('animationend', () => {
      particleElement.style.display = 'none';
      bodyParticleElement.style.display = 'none';

      // Volver a habilitar el scroll
      document.body.style.overflow = 'auto';
  });
});




// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  const backLink = document.querySelector('#backbutton a'); // Selecciona el enlace dentro del backbutton

  backLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir la acción predeterminada del enlace

      // Iniciar la animación
      document.body.style.animation = 'back 2s forwards'; // Aplica la animación al body

      // Esperar a que la animación termine antes de redirigir
      setTimeout(function() {
          window.location.href = '../home.html'; // Redirigir a la página de inicio
      }, 1000); // 3000 ms corresponde a la duración de la animación
  });
});



document.getElementById("backbutton").addEventListener("click", function(event) {
  event.preventDefault(); // Evita la redirección inmediata
  document.body.classList.add("animate-back"); // Añade la clase que activa la animación
  
  // Añadir el overflow hidden inmediatamente al iniciar la animación
  document.body.style.overflow = "hidden";

  // Espera a que termine la animación antes de redirigir (1s = 1000ms)
  setTimeout(function() {
      window.location.href = event.target.href; // Redirige después de 1 segundo
  }, 1000); // Duración de la animación (1s)
});

