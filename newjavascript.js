// index of image current
var count = 0;
$(document).ready(function () {
    //when click menu flag=1 else flag =0
    var clickMenu = 0;
    // list menu
    var menu = $('.menu__js');
    //width of image
    var coutRight = $('.list_info__item__js li').width();
    //click Menu
    $('.menu__js').click(function () {
        var index = $(this).index();
        if (clickMenu === 0)
        {
            clickMenu = 1;
            $('.menu').show();
        } else {
            clickMenu = 0;
            SetNoneOtherMenu(index);
            count = index;
            animate(index);
        }
    });
    //Click previous
    $('.pre__nav__js').click(function () {
        count = count - 1;
        if (count < 0) {
            count = menu.length - 1;
        }
        SetNoneOtherMenu(count);
        animate(count);
    });
    //CLick next
    $('.next__nav__js').click(function () {
        count = count + 1;
        if (count >= menu.length) {
            count = 0;
        }
        SetNoneOtherMenu(count);
        animate(count);
    });
    //hide others menu except menu chose
    function SetNoneOtherMenu(index) {
        for (var i = 0; i < menu.length; i++)
        {
            $(menu[i]).hide();
        }
        $(menu[index]).show();
    }
    ;
    /* funtion animate 
     * params: count
     */
    function animate(count) {
        $('.list_info__item__js').animate({right: count * coutRight}, 600);
    }
    var swipe = $('.list_info__item__js li');
    $(swipe).on("swipeleft", swipeLeft);
    $(swipe).on("swiperight", swipeRight);
    
    //Funtion check count index of inmage
    function checkSwipe(count) {
        if (count >= swipe.length) {
            {
                return 1;
            }
        } else {
            return 0;
        }
    }
    ;
    //when swipe left run funtion
    function swipeLeft() {
        count = $(this).index() + 1;
        if (checkSwipe(count) === 1)
        {
            count = swipe.length - 1;
        }
        SetNoneOtherMenu(count);
        animate(count);
    }
    ;
    //when swipe right run funtion
    function swipeRight() {
        count = $(this).index() - 1;
        if (checkSwipe(count) === 1)
        {
            count = swipe.length - 1;
        } else
        {
            count = 0;
        }
        SetNoneOtherMenu(count);
        animate(count);
    }
    ;
});

