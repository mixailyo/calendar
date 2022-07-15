const animations = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const scrollItems = document.querySelectorAll(".scroll-item");
    const scrollItemsEnd = document.querySelectorAll(".scroll-item-end");
  
    if (scrollItems.length) {
      const scrollAnimation = () => {
        scrollItems.forEach((el) => {
          let elementPosY = document.documentElement.clientHeight - el.offsetHeight;
          if (
            el.getBoundingClientRect().top < elementPosY ||
            el.getBoundingClientRect().top <
              document.documentElement.clientHeight / 1.15
          ) {
            el.classList.add("is-active");
          }
        });
      };
  
      scrollAnimation();
      window.addEventListener("scroll", () => {
        scrollAnimation();
      });
    }

    if (scrollItemsEnd.length) {
      const scrollAnimation = () => {
        scrollItemsEnd.forEach((el) => {
          console.log(el.getBoundingClientRect().top)
          if (
            el.getBoundingClientRect().top < -(el.offsetHeight / 3)
          ) {
            el.classList.add("is-active");
          }
        });
      };
  
      scrollAnimation();
      window.addEventListener("scroll", () => {
        scrollAnimation();
      });
    }
  });
}

export {animations};