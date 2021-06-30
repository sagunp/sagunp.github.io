$(window).on('resize', function(){
    $('.navbar-expand-md').toggleClass('sticky-top', $(window).width() > 693);    
});