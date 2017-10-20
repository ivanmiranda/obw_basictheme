// Add class active in labels with inputs
require([
    'jquery'
], function($) {
    $(function() {
      validateActive();
      setInterval(validateActive, 100);
      // setTimeout(function(){ jQuery('.validate-password').val('');}, 50);
      $('body').on('focusin', 'input[type="text"],input[type="password"]', function(event){
          var padre=$(this).parent().parent();
              if( !padre.hasClass('active') ){
                  padre.addClass('active');
                  //padre.next().show();
              }
      });
      $('body').on('focusout', 'input[type="text"],input[type="password"]', function(event){
          var padre=$(this).parent().parent();
              if($(this).val() == '' && padre.hasClass('active')){                
                  padre.removeClass('active');          
              }
      });
      function validateActive(){
        $('input[type="text"],input[type="password"]').each(function(index){
          var padre=$(this).parent().parent();
          if($(this).val() != '' && !padre.hasClass('active')){                
            padre.addClass('active');          
          }
        });     
      }     
    });
});