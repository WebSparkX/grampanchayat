
$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      // nav:true,
      autoplay:true,
      // autoHeight: true,
      // autoWidth:true,
      dots: true,
      autoplayTimeout:2000,
      autoplaySpeed:2000,
      paginationSpeed : 2000,
      slideSpeed : 2000,
      responsive:{
          300:{
              items:1
          },
          500:{
              items:2
          },
          900:{
              items:3
          },
          1200:{
              items:3
          }

      }

  });

  $(".nav-link").click(function () {
    $(".collapse").removeClass("show");
  });

});

$(window).scroll(function() {
  let position = $(this).scrollTop();
  if(position >= 200) {
    $('.nav-menu').addClass('custom-navbar');
  }
  else {
    $('.nav-menu').removeClass('custom-navbar');
  }
});
