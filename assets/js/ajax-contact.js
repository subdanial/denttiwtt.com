				(function ($) {
    'use strict';

    var form = $('.contact_form'),
        message = $('.contact_msg'),
        form_data;

    function fail_func() {
 $('.contact_msg').fadeIn().removeClass('alert-success').addClass('alert-success');
     
        $('.contact_msg').text('پیام با موفقیت ارسال شد');
        setTimeout(function () {
            $('.contact_msg').fadeOut();
        }, 2000);
    }

    form.submit(function (e) {

        e.preventDefault();
			fail_func();

    });

})(jQuery);