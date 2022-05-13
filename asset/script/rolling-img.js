function ScrollImg() {
    var ScrollPos = $(window).scrollTop();
    $('#scroll').css('background-position', '0%' + ScrollPos/10 + '%');
}

$(window).scroll(function() {
   ScrollImg();
});
