$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                loop: true,
                nav: true,
                items: 1,
            },
        320: {
                items: 3,
                loop: true,
                nav: true,
            },
        },
    });
});
