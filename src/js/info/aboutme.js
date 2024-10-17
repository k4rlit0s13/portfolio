const roll = document.getElementById('roll');

roll.addEventListener('animationend', () => {
  roll.classList.add('enter-done');
});


document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});
