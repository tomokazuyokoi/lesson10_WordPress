$(function () {
    var topBtn = $('#pageTop');

    topBtn.on('click', function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});