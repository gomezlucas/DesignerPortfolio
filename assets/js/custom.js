(function ($) {
    "use strict"; // Start of use strict

 
    // Loader Option 
    //window.addEventListener("load", function () {
     //   document.querySelector(".preloader-container").style.display = "none";
    //})


    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 50) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar link is clicked 
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    //  scroll actions
    $(window).scroll(navbarCollapse);
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });


    // Page Marker Actions
    if (document.body.getAttribute('data-theme') == "dark") {
        $('.position__image').attr('src', "./assets/images/markers/about-dark.svg");
    } else {
        $('.position__image').attr('src', "./assets/images/markers/about.svg");
    }

    $(window).scroll(function () {
        if ($(document).scrollTop() == 0 && $(document).scrollTop() < 333) {

            if (document.body.getAttribute('data-theme') == "dark") {
                $('.position__image').attr('src', "./assets/images/markers/about-dark.svg");
            } else {
                $('.position__image').attr('src', "./assets/images/markers/about.svg");
            }

        } else if ($(document).scrollTop() > 333 && $(document).scrollTop() < 3100) {
           
            if (document.body.getAttribute('data-theme') == "dark") {
                $('.position__image').attr('src', "./assets/images/markers/portfolio-dark.svg");
            } else {
                $('.position__image').attr('src', "./assets/images/markers/portfolio.svg");
            }

        } else if ($(document).scrollTop() > 3100 && $(document).scrollTop() < 3600) {
            if (document.body.getAttribute('data-theme') == "dark") {
                $('.position__image').attr('src', "./assets/images/markers/resume-dark.svg");
            } else {
                $('.position__image').attr('src', "./assets/images/markers/resume.svg");
            }

        } else if ($(document).scrollTop() > 3600) {
            if (document.body.getAttribute('data-theme') == "dark") {
                $('.position__image').attr('src', "./assets/images/markers/contact-dark.svg");
            } else {
                $('.position__image').attr('src', "./assets/images/markers/contact.svg");
            }
        }
    });


    //Switch theme 

    const toggleSwitch = document.querySelector('#switch-toggle');
    let switchTheme = (event) => {
        if (event.target.checked) {
            document.body.setAttribute('data-theme', 'dark');
            $('.position__image').attr('src', "./assets/images/markers/about-dark.svg");
        }else{
            document.body.removeAttribute('data-theme')
            $('.position__image').attr('src', "./assets/images/markers/about.svg");
        }
    }

    toggleSwitch.addEventListener('click', switchTheme)


    //initiliaze AOS
    AOS.init(
        {
            offset: 100,
            disable: function () {
                var maxWidth = 650;
                return window.innerWidth < maxWidth;
            }
        }
    );


})(jQuery); // End of use strict
