// =========================================
// MOBILE NAVIGATION
// =========================================

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");


// Make sure the elements exist before adding events
if (menuButton && navLinks) {

    // Open / close menu
    menuButton.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", isOpen);

        document.body.classList.toggle("menu-open", isOpen);

    });


    // Close menu when a navigation link is clicked
    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            document.body.classList.remove("menu-open");

        });

    });


    // Close menu when clicking outside the navigation
    document.addEventListener("click", function (event) {

        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);


        if (
            navLinks.classList.contains("active") &&
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            document.body.classList.remove("menu-open");

        }

    });


    // Close menu with Escape key
    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            document.body.classList.remove("menu-open");

            menuButton.focus();

        }

    });


    // Close mobile menu automatically when returning
    // to desktop size
    window.addEventListener("resize", function () {

        if (window.innerWidth > 700) {

            navLinks.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            document.body.classList.remove("menu-open");

        }

    });

}