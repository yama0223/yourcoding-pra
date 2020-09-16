$(function(){

    // アコーディオン
    $('.faq-question').click(function(){
        $(this).next('.faq-answer').slideToggle();
        $(this).toggleClass("open");
    });
    
    // スムーススクロール
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html,body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    // ハンバーガーメニュー
    $('.nav-drawer__menu a[href]').on('click',function(event){
        $('.nav-drawer__checkbox').trigger('click');
    });


    // スワイパー
    var swiper = new Swiper ('.swiper-container',{
        loop: true,
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 2,
        speed: 600,
        autoplay:{
            delay: 5000,
        },
        centeredSlides: true,
        breakpoints: {
            1024:{
                slidesPerView: 3.6,
                spaceBetween: 30,
            },
            767:{
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            413:{
                slidesPerView: 1.3,
                spaceBetween: 20,
            }
        },
    });

    // フォームとプライバシーポリシーの連携
    const $submitBtn =$('#js-submit')
    $('#form input,#form textarea').on('change',function(){
        if(
            $('#form input[type="text"]').val() !== "" &&
            $('#form input[type="email"]').val() !== "" &&
            $('#form input[type="checkbox"]').val() !== "" &&
            $('#form #privacy-check').prop('checked') === true
        ) {
        $submitBtn.prop('disabled', false);

        } else {
        $submitBtn.prop('disabled', true);
        };
    });

});

