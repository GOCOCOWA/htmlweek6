import './assets/scss/all.scss';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 24,
  breakpoints: {
    // 手機 (0px 以上)
    0: {
      slidesPerView: 1.1, // 一次只顯示 1 張
    },
    // 平板 (768px 以上)
    768: {
      slidesPerView: 2, // 一次顯示 2 張
    },
    // 桌機 (992px 以上)
    992: {
      slidesPerView: 3, // 一次顯示 3 張
    }
  }
});