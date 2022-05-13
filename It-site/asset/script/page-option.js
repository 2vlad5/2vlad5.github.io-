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

});
