
const menuButton = document.querySelector('.hamburger');
const nav = document.querySelector('.menu');
const sluitButton = document.querySelector('.sluit');

menuButton.addEventListener('click', () => {
  nav.classList.add('toonMenu');
});

sluitButton.addEventListener('click', () => {
  nav.classList.remove('toonMenu');
});


