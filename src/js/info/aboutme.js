const roll = document.getElementById('roll');

roll.addEventListener('animationend', () => {
  roll.classList.add('enter-done');
});