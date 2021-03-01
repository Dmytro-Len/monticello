$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: false,
    variableWidth: true,
    // appendDots: '#mainSlider__dots1',
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

  $('.header__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: false,
    variableWidth: true,
    // appendDots: '#mainSlider__dots1',
    prevArrow: $('.left-tick'),
    nextArrow: $('.right-tick'),
  })