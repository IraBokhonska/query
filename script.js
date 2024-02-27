let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header .menu__body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

// -----------------------------------------------------

const swiper = new Swiper(".find-style__swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  loop: true,
});

const swiperProducts = new Swiper(".products__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    960: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  },
});

const swiperPartners = new Swiper(".partners__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 9,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 7,
      spaceBetween: 20,
    },

    960: {
      slidesPerView: 6,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
