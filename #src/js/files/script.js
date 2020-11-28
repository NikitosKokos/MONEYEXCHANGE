
document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.slider__body', {
        slidesPerView: 2,
        spaceBetween: 75,
        navigation: {
          nextEl: '.slider__next',
          prevEl: '.slider__prev',
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            992: {
              slidesPerView: 2
            },
          }
      })

});