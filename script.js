window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");
let navContainer=document.getElementById('nav-container')

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top")
    navbar.classList.add("fixed-top")
    navContainer.style.padding="0px";
    navContainer.style.boxShadow="0px 0px 10px gold";
  } else {
    navbar.classList.remove("fixed-top");
    navContainer.style.padding="15px";
    navContainer.style.boxShadow="0px 0px 0px gold";

  }
}