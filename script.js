document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (!menuButton || !navLinks) {
        return;
    }

    // Open / close mobile menu
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });


    // Close menu when a navigation link is clicked
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });

    });


    // Close menu when clicking outside the navigation
    document.addEventListener("click", function (event) {

        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {
            navLinks.classList.remove("active");
        }

    });


    // Close menu when screen becomes desktop size
    window.addEventListener("resize", function () {

        if (window.innerWidth > 700) {
            navLinks.classList.remove("active");
        }

    });

});