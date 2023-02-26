const swiperRest = new Swiper('.restaurant-swiper', {
  uniqueNavElements: true,
  setWrapperSize: true,
  speed: 300,
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

const swiper = new Swiper('.hotel-swiper', {
  uniqueNavElements: true,
  setWrapperSize: true,
  speed: 300,
  spaceBetween: 20,
  slidesPerView: 2,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});
