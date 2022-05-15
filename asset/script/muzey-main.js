$( document ).ready(function() {

function ScrollImg() {
    var ScrollPos = $(window).scrollTop();
    $('.--Img-Block--Img').css('background-position', '35%' + ScrollPos/10 + '%');
    console.log(ScrollPos);
}

function ScrollImgTxt() {
    var ScrollPos = $(window).scrollTop();
    $('.--Img-Block--TXT').css('background', 'linear-gradient(' + ScrollPos/10 + 'deg, #0006ff61, #000000');
    console.log(ScrollPos);
}

$(window).scroll(function() {
   ScrollImg();
   ScrollImgTxt();
});

$('#Back').click(function() {
  document.location.href='https://2vlad5.github.io';
});

sanslide = 1

$('#San-Ar-Left').click(function() {
  if(sanslide == 1){
    $('#Saintist1').hide();
    $('#Saintist3').hide();
    $('#Saintist2').css('display', 'flex');
    $('#Saintist2').show();
    sanslide = sanslide + 1;
    console.log(sanslide);
  }else if(sanslide == 2){
    $('#Saintist1').hide();
    $('#Saintist2').hide();
    $('#Saintist3').css('display', 'flex');
    $('#Saintist3').show();
    sanslide = sanslide + 1;
    console.log(sanslide);
  }else if(sanslide == 3){
    sanslide = 1;
    $('#Saintist2').hide();
    $('#Saintist3').hide();
    $('#Saintist1').css('display', 'flex');
    $('#Saintist1').show();
    console.log(sanslide);
  }
});

$('#San-Ar-Right').click(function() {
 if(sanslide == 1){
   sanslide = 3;
   $('#Saintist1').hide();
   $('#Saintist2').hide();
   $('#Saintist3').css('display', 'flex');
   $('#Saintist3').show();
   console.log(sanslide);
 }else if(sanslide == 2){
   $('#Saintist2').hide();
   $('#Saintist3').hide();
   $('#Saintist1').css('display', 'flex');
   $('#Saintist1').show();
   sanslide = sanslide - 1;
   console.log(sanslide);
 }else if(sanslide == 3){
   $('#Saintist1').hide();
   $('#Saintist3').hide();
   $('#Saintist2').css('display', 'flex');
   $('#Saintist2').show();
   sanslide = sanslide - 1;
   console.log(sanslide);
 }
});

tellide = 1

$('#Tel-Ar-Left').click(function() {
  if(tellide == 1){
    $('#Tel1').hide();
    $('#Tel3').hide();
    $('#Tel2').css('display', 'flex');
    $('#Tel2').show();
    tellide = tellide + 1;
    console.log(tellide);
  }else if(tellide == 2){
    $('#Tel1').hide();
    $('#Tel2').hide();
    $('#Tel3').css('display', 'flex');
    $('#Tel3').show();
    tellide = tellide + 1;
    console.log(tellide);
  }else if(tellide == 3){
    tellide = 1;
    $('#Tel2').hide();
    $('#Tel3').hide();
    $('#Tel1').css('display', 'flex');
    $('#Tel1').show();
    console.log(tellide);
  }
});

$('#Tel-Ar-Right').click(function() {
 if(tellide == 1){
   tellide = 3;
   $('#Tel1').hide();
   $('#Tel2').hide();
   $('#Tel3').css('display', 'flex');
   $('#Tel3').show();
   console.log(tellide);
 }else if(tellide == 2){
   $('#Tel2').hide();
   $('#Tel3').hide();
   $('#Tel1').css('display', 'flex');
   $('#Tel1').show();
   tellide = tellide - 1;
   console.log(tellide);
 }else if(tellide == 3){
   $('#Tel1').hide();
   $('#Tel3').hide();
   $('#Tel2').css('display', 'flex');
   $('#Tel2').show();
   tellide = tellide - 1;
   console.log(tellide);
 }
});

});
