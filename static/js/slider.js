var swiper = new Swiper(".site-container", {
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  // loop: true,
  speed: 1800,
  scrollbar: {
    el: ".swiper-scrollbar",
    clickable: true,
    draggable: true
  },
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 10000,
    // stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next-block",
    // prevEl: ".swiper-button-prev",
  },
});


$("body").click(function () {
  swiper.autoplay.stop();
});

var swiper2 = new Swiper(".community-slider", {
  slidesPerView: 1,
  spaceBetween: 60,
  // centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    560 : {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    
  },
});
