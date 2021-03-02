$(function() {
  $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: false,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: $('.left-tick'),
      nextArrow: $('.right-tick'),
      responsive: [
        {
          breakpoint: 698,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
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