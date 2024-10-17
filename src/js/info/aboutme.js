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
  animatedElements.forEach(el => el.style.visibility = 'hidden');

  // Detecta cuando la animación del body termina
  bodyElement.addEventListener('animationend', () => {
      // Una vez que la animación del body termina, muestra y permite las otras animaciones
      animatedElements.forEach(el => {
          el.style.visibility = 'visible';
          el.classList.add('enter-done'); // Asegura que las animaciones empiecen
      });
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
