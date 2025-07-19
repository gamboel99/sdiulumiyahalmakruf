let index = 0;
const slides = document.querySelectorAll(".slider img");

function showNextSlide() {
  slides.forEach((slide, i) => {
    slide.style.opacity = (i === index) ? "1" : "0";
  });
  index = (index + 1) % slides.length;
}

setInterval(showNextSlide, 3000);
window.onload = showNextSlide;
