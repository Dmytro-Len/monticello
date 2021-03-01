$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    prevArrow: $('.left-tick'),
    nextArrow: $('.right-tick')
  });