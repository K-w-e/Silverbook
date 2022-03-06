$(document).ready(function () {
    $('.slider').slick({
      slidesToShow: 2,
      arrows: true,
      responsive: [
        {
          breakpoint: 2048,
          settings: {
            centerMode: false,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            centerMode: false,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }          
        }
      ]
    });
  });