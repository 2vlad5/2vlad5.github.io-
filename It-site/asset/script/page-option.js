$( document ).ready(function() {
    console.log( "Site was ready to speedily scripts!" );
    slide = 1

    $('.fa-arrow-right').click(function() {
      if(slide == 1){
        $('#Show-Usluga-1').hide();
        $('#Show-Usluga-3').hide();
        $('#Show-Usluga-2').css('display', 'flex');
        $('#Show-Usluga-2').show();
        slide = slide + 1;
        console.log(slide);
      }else if(slide == 2){
        $('#Show-Usluga-1').hide();
        $('#Show-Usluga-2').hide();
        $('#Show-Usluga-3').css('display', 'flex');
        $('#Show-Usluga-3').show();
        slide = slide + 1;
        console.log(slide);
      }else if(slide == 3){
        slide = 1;
        $('#Show-Usluga-2').hide();
        $('#Show-Usluga-3').hide();
        $('#Show-Usluga-1').css('display', 'flex');
        $('#Show-Usluga-1').show();
        console.log(slide);
      }
   });

   $('.fa-arrow-left').click(function() {
     if(slide == 1){
       slide = 3;
       $('#Show-Usluga-1').hide();
       $('#Show-Usluga-2').hide();
       $('#Show-Usluga-3').css('display', 'flex');
       $('#Show-Usluga-3').show();
       console.log(slide);
     }else if(slide == 2){
       $('#Show-Usluga-2').hide();
       $('#Show-Usluga-3').hide();
       $('#Show-Usluga-1').css('display', 'flex');
       $('#Show-Usluga-1').show();
       slide = slide - 1;
       console.log(slide);
     }else if(slide == 3){
       $('#Show-Usluga-1').hide();
       $('#Show-Usluga-3').hide();
       $('#Show-Usluga-2').css('display', 'flex');
       $('#Show-Usluga-2').show();
       slide = slide - 1;
       console.log(slide);
     }
  });

  $('.Usluga--btn-two').click(function() {
    alert("Внимание! IT-Karina перегружена, попробуйте обратиться позже");
 });

   $('.HREF-1').click(function() {
     $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 500);
  });
  $('.HREF-2').click(function() {
    alert("Комментарии не доступны на версии Prototype");
 });
 $('.HREF-3').click(function() {
   alert("Политика использования и т.д. отсутствуют на версии Prototype");
});

  $('#btn-1').click(function() {
    $('.Main-More-Info-Cont').fadeIn(1000);
    $('#Site').show(1000);
  });

  $('#btn-2').click(function() {
    $('.Main-More-Info-Cont').fadeIn(1000);
    $('#Site').show(1000);
  });

  $('#btn-3').click(function() {
    $('.Main-More-Info-Cont').fadeIn(1000);
    $('#Site').show(1000);
  });
  
  $('.Info-Cont--Close').click(function() {
    $('.Main-More-Info-Cont').fadeOut(1000);
    $('#Site').fadeOut(1000);
  });

});

function ScrollImg() {
    var ScrollPos = $(window).scrollTop();
    $('#scroll').css('background', 'repeating-linear-gradient(' + ScrollPos/10 + 'deg, black, transparent 100px)');
}

  $(window).scroll(function() {
     ScrollImg();
  });
