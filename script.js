// JavaScript Document
console.log("hi");

const hamburger = document.getElementById('hamburger');
const navigatie = document.getElementById('navigatie');

hamburger.addEventListener('click', () => {
  navigatie.classList.toggle('active');
});