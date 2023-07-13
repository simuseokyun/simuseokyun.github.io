var swiper = new Swiper(".mySwiper", {});
var count = 10;

setInterval(() => {
  count -= 1;
  if (count > 0) {
    document.querySelectorAll(".count")[0].innerHTML = count;
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

var colCount = 0;
document.querySelectorAll(".right_btn")[0].addEventListener("click", () => {
  console.log(colCount);
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
  console.log(colCount);
  if (colCount == 1) {
    document.querySelectorAll(".collabo_wrap")[0].style.transform =
      "translateX( calc(100% / -3))";
    colCount--;
  } else if (colCount == 0) {
    document.querySelectorAll(".collabo_wrap")[0].style.transform =
      "translateX( calc(0vw)";
  }
});
// document.querySelectorAll(".left_btn")[0].addEventListener("click", () => {
//   colCount++;
//   if (colCount == 1) {
//     document.querySelectorAll(".collabo_wrap")[0].style.transform =
//       "translateX( calc(100% / -3))";
//   } else if (colCount == 2) {
//     document.querySelectorAll(".collabo_wrap")[0].style.transform =
//       "translateX( calc(200% / -3)";
//   }
// });

document.querySelectorAll(".mob_menu")[0].addEventListener("click", () => {
  console.log(1);

  document.querySelectorAll(".mob_category")[0].style.transform =
    "translate(0)";
});
document.querySelectorAll(".close")[0].addEventListener("click", () => {
  document.querySelectorAll(".mob_category")[0].style.transform =
    "translate(-300px)";
});
