// May contain incorrect code due to being AI gen'd

// Nav Open/Closer for Mobile

// Toggle function for opening and closing the menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}