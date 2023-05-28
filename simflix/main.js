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
    document.querySelectorAll(".search_background")[0].style.display = "block";
  } else {
    document.querySelectorAll(".search")[0].style.opacity = 0;
    document.querySelectorAll(".search_background")[0].style.display = "none";
  }
});

for (let i = 0; i < 4; i++) {
  document
    .querySelectorAll(".right_button")
    [i].addEventListener("click", () => {
      document.querySelectorAll(".recom_content")[i].style.transform =
        "translateX(-50%)";
    });

  document.querySelectorAll(".left_button")[i].addEventListener("click", () => {
    document.querySelectorAll(".recom_content")[i].style.transform =
      "translateX(0)";
  });
}

fetch("./movie.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.movie);
    var data = data.movie;
    console.log(data);

    document.querySelectorAll(".search")[0].addEventListener("input", () => {
      var 입력값길이 = document.querySelectorAll(".search")[0].value.length;
      var 입력값 = document.querySelectorAll(".search")[0].value;
      if (입력값길이 >= 1) {
        document.querySelectorAll(".search_category")[0].innerHTML = "";
        data.forEach((a, i) => {
          if (a.title.includes(입력값) == true) {
            console.log(1221);
            var 템플릿 = `
            <div class="search_list">
  <div class="search_image">
    <img src="${a.photo}" alt="" />
  </div>
  <h4>${a.title}</h4>
</div>`;
            document
              .querySelectorAll(".search_category")[0]
              .insertAdjacentHTML("beforeend", 템플릿);
            document.querySelectorAll(
              ".search_category"
            )[0].style.justyfyContent = "none";
          }
        });
      } else if (입력값길이 < 1) {
        document.querySelectorAll(".search_category")[0].innerHTML = "";

        var 템플릿 = `
        <div class="category_list">
              <i class="fa-solid fa-tv"></i>
              <h4>시리즈</h4>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="category_list">
              <i class="fa-solid fa-video"></i>
              <h4>영화</h4>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="category_list">
              <i class="fa-solid fa-face-smile"></i>
              <h4>예능</h4>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
        `;
        document
          .querySelectorAll(".search_category")[0]
          .insertAdjacentHTML("beforeend", 템플릿);
      }
    });
    // 영화 검색하기
  });
