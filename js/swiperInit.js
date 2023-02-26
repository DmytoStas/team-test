const swiper = new Swiper('.swiper', {
  uniqueNavElements: true,
  setWrapperSize: true,
  speed: 250,
  spaceBetween: 20,
  slidesPerView: 2,
  breakpoints: {
    768: {
      spaceBetween: 32,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 4.833,
      grabCursor: true,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});
