const swiper = new Swiper(".mySwiper", {
    zoom: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      780: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
    
  });