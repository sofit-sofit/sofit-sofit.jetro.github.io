$(function(){



$('.slaider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    asNavFor: '.slaider__nav',
    prevArrow:'<button class="slick-arrow slick-prev"><img src="images/slider/prev.svg"></button>',
    nextArrow:'<button class="slick-arrow slick-next"><img src= "images/slider/next-1.svg"></button>',
  });
  $('.slaider__nav').slick({
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.slaider__inner',
    focusOnSelect: true,
    variableWidth: true,
    arrow: false,
    responsive: [
      {
         breakpoint: 921,
         settings: {
            slidesToShow: 5,
          
            
         
         }
      },
      {
         breakpoint: 700,
         settings: {
            slidesToShow: 4,
            prevArrow: false,
            nextArrow: false,
         }
      },
      {
         breakpoint: 601,
         settings: {
            slidesToShow: 3,
            prevArrow: false,
            nextArrow: false,
         }
      },
      {
         breakpoint: 466,
         settings: {
            slidesToShow: 2,
            prevArrow: false,
            nextArrow: false,
         }
      },
   ]
  });



  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });

});

