// Add class active in inputs and radio
require([
    'jquery'
], function($) {
    $(function() {
        $('input[type="checkbox"],input[type="radio"]').each(function(){
            if($(this).is(':checked')){
                $(this).parent().addClass('active');
            }
        });
        $('body').on('click', 'input[type="checkbox"]', function(event){
                if($(this).parent().hasClass('active')) {
                    $(this).parent().removeClass('active');
                } else {
                    $(this).parent().addClass('active');
                }
            });
        $('body').on('click', 'input[type="radio"]', function(event){
            $('input[type="radio"]:not(:checked)').parent().removeClass('active');
            $('input[type="radio"]:checked').parent().addClass('active');
        });
    });
});