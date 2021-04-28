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
    $('.header__nav').toggleClass('active');    
});