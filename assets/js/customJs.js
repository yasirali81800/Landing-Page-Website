jQuery(document).ready(function ($) {
     console.log("test");
    var $mainDiv = $('.main-content'); // change selector if needed

    $(window).on('scroll', function () {
        console.log("scrolllllllll");
        if ($(this).scrollTop() > 150) {
            $mainDiv.addClass('scrolled');
        } else {
            $mainDiv.removeClass('scrolled');
        }
    });
});