$( document ).ready(function() {

function ScrollImg() {
    var ScrollPos = $(window).scrollTop();
    $('.--Img-Block--Img').css('background-position', '35%' + ScrollPos/10 + '%');
    console.log(ScrollPos);
}

function ScrollImgTxt() {
    var ScrollPos = $(window).scrollTop();
    $('.--Img-Block--TXT').css('background', 'linear-gradient(' + ScrollPos/10 + 'deg, #ff000061, #fff70061');
    console.log(ScrollPos);
}

$(window).scroll(function() {
   ScrollImg();
   ScrollImgTxt();
});

$('#Back').click(function() {
  document.location.href='https://2vlad5.github.io';
});

});
