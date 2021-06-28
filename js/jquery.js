$(window).on('resize', function(){
    $('.navbar-expand-sm').toggleClass('sticky-top', $(window).width() > 582);
});