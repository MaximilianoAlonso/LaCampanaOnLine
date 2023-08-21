const swiper = new Swiper(".mySwiper", {
    zoom: false,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
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


  const verMas = document.querySelector(".verMas")
  verMas.addEventListener("click", () => {
    var postId = item.id
    var url = "/posts/detail/" + postId;
    window.location.href = url;
  })