$(function() {
  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');

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
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 30,
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
    autoplay: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 992 ? $("#menu").hide() : $("#menu").show();

  setTimeout(() => {
    $("#menu").show();
  }, 100);
  $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-top shows') : menu.removeClass('offcanvas offcanvas-start');
}