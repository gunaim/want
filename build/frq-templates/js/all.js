$( document ).ready(function() {




    /*responsive menu*/

    $('button.navbar-toggler').click(function () {
        $(this).parent().toggleClass("menu__responsive");
    });


    /*sticky menu*/

    $(window).scroll(function () {
        let scrollTop=$(this).scrollTop();
        if(scrollTop >70){
            $('.menu__nav').addClass('menu__sticky');
            $('.menu img:nth-child(1)').addClass('d-none');
            $('.menu img:nth-child(2)').removeClass('d-none').addClass('d-inline-block');
            // $('.nav-link').removeClass('white-text').addClass('black-text');
        }
        else {
            $('.menu__nav').removeClass('menu__sticky');
            $('.menu img:nth-child(1)').removeClass('d-none');
            $('.menu img:nth-child(2)').addClass('d-none').removeClass('d-inline-block');
            // $('.nav-link').addClass('white-text').removeClass('black-text');
        }
    });


    /*scroll top animation*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.scroll-up').fadeIn("slow").css("display", "block");
        } else {
            $('.scroll-up').fadeOut("slow").css("display", "none");
        }
    });

    $(".scroll-up").click(function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

    /*modal */
    $(document).on("click", ".modal-btn", function () {
        $('main,header,footer').addClass('blur');
    });

    var modalClose= function modalClose() {
        $('main,header,footer').removeClass('blur');

    };

    $(document).on("click", ".close",function () {
        modalClose();
    });



    var f=(function() {
        var $sidebar = $(".personal__account"),
            $window = $(window),
            $offset = $sidebar.offset();

        var width = $sidebar.outerWidth();
        console.log(window.innerWidth > 767);
        console.log($window.scrollTop() > $offset.top);
        if (window.innerWidth > 767 && $sidebar.length > 0) {
            $window.on('scroll',function () {
                    if ($window.scrollTop() > $offset.top) {
                        $sidebar.css({'position': 'fixed', 'top': 90, 'width': width})
                    }
                    else {
                        $sidebar.css({'position': 'static', 'width': '100%'});
                    }
                }
            );
        }
    });
    f();
    $( window ).resize(f());

    // var stickyFunc;
    // (stickyFunc=function() {
    //     var stickySide = $('.sticky');
    //     if(stickySide.length > 0) {
    //
    //         var posTop = stickySide.offset().top - 10;
    //         var width = stickySide.outerWidth();
    //         var height = $('main').outerHeight() - stickySide.outerHeight() + 30;
    //
    //         $(window).scroll(function(){
    //
    //             if($(this).scrollTop()>=posTop && window.innerWidth>767 && $(this).scrollTop() < height ){
    //                 stickySide.css({'position' : 'fixed' , 'top' : 10  , 'width' : width})
    //             }
    //             else {
    //                 stickySide.css({'position' : 'static' , 'width' : '100%'})
    //             }
    //         });
    //     }

    var f1=(function() {
        var $sidebar = $(".question__side"),
            $window = $(window),
            $offset = $sidebar.offset();

        var width = $sidebar.outerWidth();
        console.log(window.innerWidth > 767);
        console.log($window.scrollTop() > $offset.top);
        if (window.innerWidth > 767 && $sidebar.length > 0) {
            $window.on('scroll',function () {
                    if ($window.scrollTop() > $offset.top) {
                        $sidebar.css({'position': 'fixed', 'top': 90, 'width': width})
                    }
                    else {
                        $sidebar.css({'position': 'static', 'width': '100%'});
                    }
                }
            );
        }
    });
    f1();
    $( window ).resize(f1());

    /*user settings*/

    $('.user__title').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
                countNum: countTo
            },

            {

                duration: 3000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });



    });



});
