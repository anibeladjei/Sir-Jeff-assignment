const swiper = new Swiper('.swiper', {
    // Optional parameters
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 3,
    slidesPerView: "auto",
    spaceBetween: 14,
    direction: 'vertical',
    freeMode: false,
    autoplay: {
        delay: 5000,
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
        }
    },
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });