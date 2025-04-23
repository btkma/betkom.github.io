const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  speed: 800,
  effect: "fade",
});
