var control = true;
var id_name_eq_new = "";

var old_scroll = $(window).scrollTop();

$(window).scroll(function(event) {

  setTimeout(function(){

    if(control) {

      var yeni_scroll = $(window).scrollTop();

      for (var i = 0; i < $('.scroll-auto').length; i++) {
        
        var id_name_eq = $('.scroll-auto:eq( '+ i +' )').attr('id');
        var yuksekkk = $('#' + id_name_eq).offset().top;
        if (old_scroll === yuksekkk){

          if(old_scroll < yeni_scroll){
            id_name_eq_new = $('.scroll-auto:eq( '+ (i+1) +' )').attr('id');
            old_scroll = $('#' + id_name_eq_new).offset().top;
            $('html, body').animate({
              scrollTop: $('#' + id_name_eq_new).offset().top
            }, 900)
            control = false;
            setTimeout(function(){ control = true }, 1000);
            break;
          }

          else if(old_scroll > yeni_scroll){
            id_name_eq_new = $('.scroll-auto:eq( '+ (i-1) +' )').attr('id');
            old_scroll = $('#' + id_name_eq_new).offset().top;
            $('html, body').animate({
              scrollTop: $('#' + id_name_eq_new).offset().top
            }, 900)
            control = false;
            setTimeout(function(){ control = true }, 1000);
            break;
          }

        }

        else if(i == 2){
          old_scroll = $(window).scrollTop();
        }

      }
    }
    
  }, 0);
});