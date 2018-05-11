$(document).ready( function () {
    var catalogJsPopupFlag = false;
    $('.catalog-js-popup').on('click', function () {
        if (catalogJsPopupFlag === false)
        {
            $('.catalog__popup-goods').addClass('d-block');
            catalogJsPopupFlag = true;
        } else {
            $('.catalog__popup-goods').removeClass('d-block');
            catalogJsPopupFlag = false;
        }
    });

    $('.catalog__main-consultation-link').on('click', function () {
       $('.catalog__popup-consultation').addClass('d-block');
    });

    $('.catalog__popup-consultation').mouseleave(function(){
        $('.catalog__popup-consultation').removeClass('d-block');
    });

    $('.catalog__popup-consultation .col-xl-4').on('click', '.catalog__popup-consultation-title:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.catalog__popup-consultation').find('.catalog__popup-consultation-wrapper').removeClass('active').eq($(this).index()).addClass('active');
    });
});