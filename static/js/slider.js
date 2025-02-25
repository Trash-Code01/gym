// -----------------------------------------
// script for slider 💕

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   script for text animation 
// ❤️❤️
const text = document.querySelector(".sec-text");
const text3 = document.querySelector(".sec-text3");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = " Train hard ";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Don't give up";
  }, 3000);
  setTimeout(() => {
    text.textContent = "You can do this";
  }, 2000); //1s = 1000 milliseconds
};

textLoad();
setInterval(textLoad, 12000);