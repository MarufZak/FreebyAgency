$('.slider').slick({
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    adaptiveHeight: true,
    infinite: true,
    draggable: false,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: true,
})

$('.header__burger').click(function () { 
    $('.header__burger').toggleClass('active')
    $('.header__nav').toggleClass('active');  
    if (window.pageYOffset > 400) {
        $('.header').toggleClass('active')  
    }
});

console.log(window.pageYOffset);

window.addEventListener('scroll',function () {  
    if (window.pageYOffset > 20) {
        $('.header').addClass('active');
        $('.header__list').css({
            transform: 'translateY(-25px)'
        })

    } else {
        $('.header').removeClass('active');
        $('.header__list').css({
            transform: 'translateY(0)'
        })
    }
})

$('.work__link').click(function (item) {  
    $('.work__link').removeClass('active')
    $(this).addClass('active')
})


$('.comment__body').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 325,
            settings: {
                arrows: false
            }
        }
    ]
});