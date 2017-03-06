$(function() {

    /*Change language*/
    var $language = $('.lang');

    $language.on('click', function(){

        $language.removeClass('active')
                 .addClass('passive');

        $(this).addClass('active')
               .removeClass('passive');
    });

    /*Menu blocks*/
    var $menu = $('.screenhot li');

    $menu.on('click',function(){

        $menu.removeClass('active-menu');
        $(this).addClass('active-menu');
    });

    /*prevent default for links*/
        var $a = $('a');
        $a.on('click', function(e){
            e.preventDefault();
        });
});