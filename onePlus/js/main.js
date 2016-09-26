/**
 * Created by 林安康 on 2016/9/24.
 */
$(function () {
    setInterval(function () {
        if($(document).width()>766)
        {
            $('.drop-item').hide();
        }
    },20);

    $('.p-item > i').click(function () {
        $('.drop-item').slideToggle(500);
    });
    $('.p-introduce > li').click(function () {
        // $('.p-introduce > li >ul').slideToggle(500);
        $(this).find('ul').slideToggle(500);
    });

})
