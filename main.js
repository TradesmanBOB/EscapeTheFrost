// May contain incorrect code due to being AI gen'd

// Nav Open/Closer for Mobile

// Toggle function for opening and closing the menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
  
    // Check if the menu is open or closed
    if (navMenu.style.left === '-250px') {
      navMenu.style.left = '0';  // Show the menu
    } else {
      navMenu.style.left = '-250px';  // Hide the menu
    }
  }