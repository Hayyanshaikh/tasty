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
    slidesPerView: 5,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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