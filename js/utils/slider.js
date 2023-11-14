const gallerySwiper = new Swiper(".gallery__swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slideToClickedSlide: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    1400: {
      slidesPerView: 1,
    }
  }
});
