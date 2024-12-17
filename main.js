// Select both the mobile and tablet menu buttons
const navToggles = document.querySelectorAll('#mobileMenuButton, #tabletMenuButton');

// Select the navigation menu
const navMenu = document.getElementById('navMenu');

// Add event listener to each of the navigation buttons
navToggles.forEach(navToggle => {
  navToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the nav menu
    navMenu.classList.toggle('active');
  });
});
