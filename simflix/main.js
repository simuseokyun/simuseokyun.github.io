var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var searchCount = 0;
document.querySelectorAll(".search_button")[0].addEventListener("click", () => {
  searchCount++;
  if (searchCount % 2 == 1) {
    document.querySelectorAll(".search")[0].style.opacity = 1;
  } else {
    document.querySelectorAll(".search")[0].style.opacity = 0;
  }
});

document.querySelectorAll(".right_button")[0].addEventListener("click", () => {
  document.querySelectorAll(".recom_content")[0].style.transform =
    "translateX(-50%)";
});

document.querySelectorAll(".left_button")[0].addEventListener("click", () => {
  document.querySelectorAll(".recom_content")[0].style.transform =
    "translateX(0)";
});
