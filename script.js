document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");
    const year = document.getElementById("year");


    /* =====================================================
       FOOTER YEAR
    ====================================================== */

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    function closeMenu() {

        if (!nav || !menuToggle) {
            return;
        }

        nav.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

        const icon =
            menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );
        }
    }


    function openMenu() {

        if (!nav || !menuToggle) {
            return;
        }

        nav.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add(
            "menu-open"
        );

        const icon =
            menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );
        }
    }


    /* =====================================================
       MENU TOGGLE
    ====================================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const isOpen =
                    nav.classList.contains("active");

                if (isOpen) {
                    closeMenu();
                } else {
                    openMenu();
                }
            }
        );


        /* =================================================
           CLOSE AFTER NAVIGATION
        ================================================== */

        const navLinks =
            nav.querySelectorAll(
                "a[href^='#']"
            );

        navLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {
                        closeMenu();
                    }
                );
            }
        );


        /* =================================================
           CLOSE WHEN CLICKING OUTSIDE
        ================================================== */

        document.addEventListener(
            "click",
            function (event) {

                const clickedInsideNav =
                    nav.contains(event.target);

                const clickedMenuButton =
                    menuToggle.contains(event.target);

                if (
                    !clickedInsideNav &&
                    !clickedMenuButton
                ) {
                    closeMenu();
                }
            }
        );


        /* =================================================
           RESET MENU ON DESKTOP
        ================================================== */

        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth > 760) {
                    closeMenu();
                }
            }
        );
    }


    /* =====================================================
       ESCAPE KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                nav &&
                nav.classList.contains("active")
            ) {
                closeMenu();
            }
        }
    );

});