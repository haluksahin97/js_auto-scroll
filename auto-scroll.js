  
  
$(document).ready(function(){

  var ms = window.matchMedia("only screen and (min-width:960px)");
  var id_name_eq_new = "";
  var old_position = $(window).scrollTop();

  if(ms.matches)
  {
    $('body').css('overflow', 'hidden');

    $(document).bind('mousewheel', function(e) {
      clearTimeout($.data(this, 'scrollTimer'));
      $.data(this, 'scrollTimer', setTimeout(function() {
        var delta = e.originalEvent.wheelDelta;
        
        for (var i = 0; i < $('.scroll-auto').length; i++) {
          
          var id_name_eq = $('.scroll-auto:eq( '+ i +' )').attr('id');
          var window_position = $('#' + id_name_eq).offset().top;
          if (old_position === window_position){

            if(delta < 0 && window_position != $('.scroll-auto:eq(2)').offset().top){
              id_name_eq_new = $('.scroll-auto:eq( '+ (i+1) +' )').attr('id');
              old_position = $('#' + id_name_eq_new).offset().top;
              $('html, body').animate({
                scrollTop: $('#' + id_name_eq_new).offset().top
              }, 600)
              break;
            }

            else if(delta > 0 && window_position != 0){
              id_name_eq_new = $('.scroll-auto:eq( '+ (i-1) +' )').attr('id');
              old_position = $('#' + id_name_eq_new).offset().top;
              $('html, body').animate({
                scrollTop: $('#' + id_name_eq_new).offset().top
              }, 600)
              break;
            }
          }
        }
      }, 300));
    });
  }
  else{
    $('body').css('overflow', 'auto');
  }
});