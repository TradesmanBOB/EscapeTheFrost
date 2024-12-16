// May contain incorrect code due to being AI gen'd

// Nav Open/Closer for all device types

// Select the navigation button and the menu appears
const navToggle = document.getElementById('mobileMenuButton', 'tabletmenubutton');
const navMenu = document.getElementById('navMenu');

// Add an event listener to the navigation button
navToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the nav menu
  navMenu.classList.toggle('active');
});