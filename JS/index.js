$(function () {

    // SHOW SEARCH BAR
    $(".search-button").click(function () {
        $(".search-bar").addClass("active");
    });
    // HIDE SEARCH BAR
    $(".search-bar .close-btn").click(function () {
        $(".search-bar").removeClass("active");
    });

    // HIDE/SHOW MOBILE MENU
    $(".mobile-navbar .menu-open").click(function () {
        $("body").addClass("menu-showing");
    });
    $(".mobile-navbar .menu-close").click(function () {
        $("body").removeClass("menu-showing");
    });

    // HIDE/SHOW MOBILE MENU ITEMS
    toggleMobileNav();
    window.onresize = toggleMobileNav;

    function toggleMobileNav() {
        const mediaQuery = window.matchMedia('(max-width: 1199px)');

        if (mediaQuery.matches) {
            $("nav .submenu, nav .submenu-category").slideUp();
            $("nav .menu-item .toggle-menu").click(function () {
                $(this).siblings(".submenu").slideToggle();
                $(this).toggleClass("rotate");
            });
            $("nav .submenu-item .toggle-menu").click(function () {
                $(this).siblings(".submenu-category").slideToggle();
                $(this).toggleClass("rotate");
            });
        }
        else
            $("nav .submenu, nav .submenu-category").slideDown("fast");
    }


    // TOGGLE TESTIMONIAL CLIENT REVIEWS ON HOME 3

    let currentReview = 0;

    let reviewSlide = setInterval(() => { nextReview2() }, 3000);

    $(".client-reviews").hover(
        () => {
            // pause on mouse over
            clearInterval(reviewSlide);
        },
        () => {
            // resume on mouse out
            reviewSlide = setInterval(() => { nextReview2() }, 3000);
        }
    );

    $(".nav-dots .dot-outer").click(function () {
        nextReview1(parseInt($(this).attr("data-index")));
    });

    function nextReview1(index) {
        $(".client-review").removeClass("active");
        $(`.client-review:eq(${index})`).addClass("active");

        $(".nav-dots .dot-outer").removeClass("active");
        $(`.nav-dots .dot-outer:eq(${index})`).addClass("active");

        currentReview = index + 1;
        if (currentReview === 3)
            currentReview = 0;
    }

    function nextReview2() {
        nextReview1(currentReview);
    }
});

