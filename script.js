// Find the menu button
const menuButton = document.querySelector(".menu-button");

// Find the navigation links
const navLinks = document.querySelector(".nav-links");

// When the menu button is clicked
menuButton.addEventListener("click", function () {

    // Open or close the navigation menu
    navLinks.classList.toggle("active");

});