// Add class active in inputs and radio
require([
    'jquery'
], function($) {
    $(function() {
        //Hide Header on on scroll down
        var didScrollMenu;
        var lastScrollTopMenu = 0;
        var deltaMenu = 5;
        var navbarHeightMenu = 0;
        
        $(window).scroll(function(event){
                didScrollMenu = true;
            });
            setInterval(function() {
                if (didScrollMenu) {
                    hasScrolledMenu();
                    didScrollMenu = false;
                }
        }, 250);
        function hasScrolledMenu() {
            var st = $(this).scrollTop();
            var navbarHeight = $('.page-header').height();
            $('body').addClass('nav-sticky');
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTopMenu - st) <= deltaMenu)
                return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if ( st > navbarHeight){
                // Scroll Down
                //jQuery('.page-header').removeClass('nav-down').addClass('nav-up');
                $('body').removeClass('nav-down').addClass('nav-up');
            } 
            if(st <= navbarHeight){
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    //jQuery('.page-header').removeClass('nav-up').addClass('nav-down');
                    $('body').removeClass('nav-up').addClass('nav-down');
                }
            }
            lastScrollTopMenu = st;
        }     
    });
});