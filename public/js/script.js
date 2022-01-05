/* add listener to mobile menu icon */
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-nav');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('revealedMenu');
  menuIcon.classList.toggle('closeMenu');
});
