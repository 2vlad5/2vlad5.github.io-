$( document ).ready(function() {

function ScrollImg() {
    var ScrollPos = $(window).scrollTop();
    $('#scroll').css('background-position', '0%' + ScrollPos/10 + '%');
}

$(window).scroll(function() {
   ScrollImg();
});

$('#Open-Muzey').click(function() {
  document.location.href='https://2vlad5.github.io/Page/';
});

});
