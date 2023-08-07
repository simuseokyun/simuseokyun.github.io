var swiper = new Swiper(".mySwiper", {});
let topCount = 10;

setInterval(() => {
  topCount -= 1;
  if (topCount > 0) {
    document.querySelectorAll(".count")[0].innerHTML = topCount;
  } else {
    document.querySelectorAll(".surprise")[0].style.display = "none";
  }
}, 1000);

setTimeout(() => {
  document.querySelectorAll(".header")[0].style.top = 0;
}, 10000);

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1) {
    document.querySelectorAll(".header")[0].style.backgroundColor =
      "rgba(255,255,255,0.9)";
  } else if (window.scrollY < 1) {
    document.querySelectorAll(".header")[0].style.backgroundColor =
      "rgba(255,255,255)";
  }
});

let colCount = 0;
document.querySelectorAll(".right_btn")[0].addEventListener("click", () => {
  if (colCount == 0) {
    document.querySelectorAll(".collabo_wrap")[0].style.transform =
      "translateX( calc(100% / -3))";
    colCount++;
  } else if (colCount == 1) {
    document.querySelectorAll(".collabo_wrap")[0].style.transform =
      "translateX( calc(200% / -3)";
  }
});
document.querySelectorAll(".left_btn")[0].addEventListener("click", () => {
  if (colCount == 1) {
    document.querySelectorAll(".collabo_wrap")[0].style.transform =
      "translateX( calc(100% / -3))";
    colCount--;
  } else if (colCount == 0) {
    document.querySelectorAll(".collabo_wrap")[0].style.transform =
      "translateX( calc(0vw)";
  }
});

document.querySelectorAll(".mob_menu")[0].addEventListener("click", () => {
  document.querySelectorAll(".mob_category")[0].style.transform =
    "translate(0)";
});
document.querySelectorAll(".close")[0].addEventListener("click", () => {
  document.querySelectorAll(".mob_category")[0].style.transform =
    "translate(-300px)";
});
