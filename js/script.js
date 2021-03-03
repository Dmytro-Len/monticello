$(function() {
  $('.my-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: $('.left-tick'),
      nextArrow: $('.right-tick'),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          }
        },
      ]
    });
    
})
$(function() {
  $('.header__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: false,
    arrows: false,
    appendDots: '.header__dots',
    // prevArrow: $('.header-left-tick'),
    // nextArrow: $('.header-right-tick'),
  })
})