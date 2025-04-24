// Toggle the mobile navigation menu when the button is clicked
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});