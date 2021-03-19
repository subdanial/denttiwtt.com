/* -----------------------------------------------
					Js Main
--------------------------------------------------
    Template Name: Elmiz - Personal Portfolio Template
--------------------------------------------------

Table of Content

	. Preloader
    . Menu
    . Progress Bar
    . mixItUp
    . MagnificPopup
    . Testimonials
    . WOW

 
----------------------------------- */


(function ($) {
    "use strict";

    /* -----------------------------------
            Preloader
    ----------------------------------- */
        $('.loading').delay(500).fadeOut(500);


    /* -----------------------------------
            Menu
    ----------------------------------- */
    $('.js-toggle-menu').on('click',function (e) {
        e.preventDefault();
        $('.menu').slideToggle();
        $(this).toggleClass('open');
    });
  

    /* -----------------------------------
            Progress Bar
    ----------------------------------- */
    $(window).on('scroll', function () {
        $(".skill-progress .skill-progress-bar").each(function () {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if (bottom_window > bottom_object) {
                $(this).css({
                    width: progressWidth
                });
            }
        });
    });
  
    /* -----------------------------------
            mixItUp
    ----------------------------------- */
        $('.works-items').mixItUp();
   
    /* -----------------------------------
	       magnificPopup
    -----------------------------------*/
        $(".view-work").magnificPopup({
            rtl: true,
            type: "image",
            gallery: {
                enabled: true
            }
        });

    /* -----------------------------------
           testimonials
    -----------------------------------*/ 
    $(".owl-carousel").owlCarousel({
            loop: true,
            stagePadding:10,
            margin: 30,
            nav: false,
            rtl: true,
            autoplay: true,
            center: false,
            dots: true,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                991: {
                    margin: 30,
                    items:2,
                },
            }
        });



    /* -----------------------------------
                WOW
    -----------------------------------*/
        new WOW().init();

    
})(jQuery);


	    function ConvertNumberToPersion() {

        persian = {0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹'};
        function traverse(el) {
            if (el.nodeType == 3) {
                var list = el.data.match(/[0-9]/g);
                if (list != null && list.length != 0) {
                    for (var i = 0; i < list.length; i++)
                        el.data = el.data.replace(list[i], persian[list[i]]);
                }
            }
            for (var i = 0; i < el.childNodes.length; i++) {
                traverse(el.childNodes[i]);
            }
        }

        traverse(document.body);
    }
	
	ConvertNumberToPersion();