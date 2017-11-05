var carousel = function() {

    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: false,
        rewind: false
    });

    $(".owl-carousel").on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function(event) {
        if (!event.namespace) return;
        var carousel = event.relatedTarget,
            element = event.target,
            current = carousel.current();
        $('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
        $('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
    });

};

export default carousel;