const abilitiesSlider = () => {
  const swiper = new Swiper('.abilities__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // For trackpad
    mousewheel: {
      invert: true,
      forceToAxis: true,
    },

    on: {
      activeIndexChange: function () {
        if (document.documentElement.clientWidth > 767) {
          if (((this.activeIndex - 11) % 2) === 1) {
            let paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
            
            setTimeout(() => {
              if (this.activeIndex - 11 - 1 !== 10) {
                paginationBullets[this.activeIndex - 11 - 1].classList.add("swiper-pagination-bullet-active")
              }
            }, 1)
            
          }
        }
      },
    }
  });
}

export {abilitiesSlider};