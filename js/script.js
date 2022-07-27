"use strict";
// фоновое изображение start
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
// фоновое изображение end

// адаптивное меню start
const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
const body = document.body;

iconMenu.addEventListener("click", function () {
  iconMenu.classList.toggle("active");
  menuBody.classList.toggle("active");
  body.classList.toggle("lock");
});

// адаптивное меню end

//sliders start
if ($(".slider__body").length > 0) {
  $(".slider__body").slick({
    dots: true,
    arrows: false,
    accessibility: false,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {},
      },
    ],
  });
}
//sliders end
