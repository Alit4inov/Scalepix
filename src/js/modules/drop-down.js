var dropdown = function() {

    var $window = $(window);

    if ($window.width() > 768) {
        $('.has-drop').on("click", function(event) {
            event.stopPropagation();
            $(this).toggleClass('opened');
        });
    }

    $('.dropdown').on("click", function() {
        $(this).toggleClass('opened');
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest(".dropdown").length) {
            $(".dropdown").removeClass("opened");
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest(".has-drop").length) {
            $(".has-drop").removeClass("opened");
        }
    });

};

export default dropdown;