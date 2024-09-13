$(function() {
  var forms = $('.needs-validation');
  forms.each(function() {
    $(this).on('submit', function(event) {
      event.preventDefault();
      if (this.checkValidity() === false) {
        event.stopPropagation();
      }
      $(this).addClass('was-validated');
    });
  });

  var heroSlider = new Swiper('.hero_slider', {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var categoriesSlider = new Swiper('.categories_slider', {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // When window width is <= 1200px
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      // When window width is <= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      // When window width is <= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // When window width is <= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
    },
  });


  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');
});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 992 ? $("#menu").hide() : $("#menu").show();

  setTimeout(() => {
    $("#menu").show();
  }, 100);
  $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-start') : menu.removeClass('offcanvas offcanvas-start');
}