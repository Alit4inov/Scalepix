var navopener = function() {

    $('.nav-opener').on("click", function() {
        $('.main-nav').toggleClass('nav-open');
    });
    $('.nav-close').on("click", function() {
        $('.main-nav').removeClass('nav-open');
    });

};

export default navopener;