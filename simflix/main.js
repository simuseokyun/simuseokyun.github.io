// 비주얼 슬라이드 시작

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 슬라이드 끝

// 검색창 나오기
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
// 검색창 끝

// 영화 슬라이드 시작
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
// 영화 슬라이드 끝

// json에서 데이터 받아오는 작업
fetch("./movie.json")
  .then((res) => res.json())
  .then((data) => {
    var data = data.movie;
    document.querySelectorAll(".search")[0].addEventListener("input", () => {
      let 입력값길이 = document.querySelectorAll(".search")[0].value.length;
      let 입력값 = document.querySelectorAll(".search")[0].value;
      if (입력값길이 >= 1) {
        document.querySelectorAll(".search_category")[0].innerHTML = "";
        data.forEach((a, i) => {
          if (a.title.includes(입력값) == true) {
            console.log(1221);
            let 템플릿 = `
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
        document.querySelectorAll(".search_category")[0].innerHTML =
          "검색 결과가 없습니다";
      }
    });
    // 영화 검색하기
    for (
      let i = 0;
      i < document.querySelectorAll(".slide_button").length;
      i++
    ) {
      document
        .querySelectorAll(".slide_button")
        [i].addEventListener("click", (e) => {
          document.querySelectorAll(".detail_page_bg")[0].innerHTML = "";

          let 아이디찾은거 = e.target.dataset.id;
          let 찾은거 = data.find((data) => {
            return data.id == 아이디찾은거;
          });
          console.log(찾은거);
          let 템플릿 = `<div class="detail_page">
        <div class="detail_top">
         <div class="detail_image">
           <img src=${찾은거.photo} alt="sd">
         </div>  
         <h4>${찾은거.title}</h4>  
         <button class="playbutton">
           <i class="fa-solid fa-play"></i>
           <span>재생</span>
         </button>
         <button class="closebutton">
           <i class="fa-solid fa-x"></i>
         </button>
        </div>
        <div class="detail_content">
         <div class="content_produce">
           <h4>소개</h4>
           <p>${찾은거.content}</p>
         </div>
         <div class="detail_produce">
           <h4>출연</h4>
           <p>홍길동</p>
         </div>
        </div>
       </div>`;
          document
            .querySelectorAll(".detail_page_bg")[0]
            .insertAdjacentHTML("beforeend", 템플릿);
          document.querySelectorAll(".detail_page_bg")[0].style.display =
            "block";
          document
            .querySelectorAll(".closebutton")[0]
            .addEventListener("click", () => {
              document.querySelectorAll(".detail_page_bg")[0].style.display =
                "none";
            });
          setTimeout(() => {
            document
              .querySelectorAll(".detail_page")[0]
              .classList.add("transitionOn");
          }, 0);
        });
    }
    for (
      let i = 0;
      i < document.querySelectorAll(".left_header li").length;
      i++
    ) {
      document
        .querySelectorAll(".left_header li")
        [i].addEventListener("click", () => {
          document
            .querySelectorAll(".left_header li")[0]
            .classList.remove("hoveron");
          document
            .querySelectorAll(".left_header li")[1]
            .classList.remove("hoveron");
          document
            .querySelectorAll(".left_header li")[2]
            .classList.remove("hoveron");
          document
            .querySelectorAll(".left_header li")[3]
            .classList.remove("hoveron");
          document
            .querySelectorAll(".left_header li")
            [i].classList.add("hoveron");
        });
    }
  });
document.querySelectorAll(".categoryOn")[0].addEventListener("click", () => {
  document
    .querySelectorAll(".left_category")[0]
    .classList.toggle("toggle_category");
});
document
  .querySelectorAll(".left_header li")[0]
  .addEventListener("click", () => {
    document
      .querySelectorAll(".left_category")[0]
      .classList.remove("toggle_category");
  });
document
  .querySelectorAll(".left_header li")[2]
  .addEventListener("click", () => {
    document
      .querySelectorAll(".left_category")[0]
      .classList.remove("toggle_category");
  });
document
  .querySelectorAll(".left_header li")[3]
  .addEventListener("click", () => {
    document
      .querySelectorAll(".left_category")[0]
      .classList.remove("toggle_category");
  });
// 로그인 폼
document.querySelectorAll(".login")[0].addEventListener("click", () => {
  document.querySelectorAll(".login_wrap")[0].style.opacity = 1;
  document.querySelectorAll(".login_wrap")[0].style.visibility = "visible";
});
document.querySelectorAll(".login2")[0].addEventListener("click", () => {
  document.querySelectorAll(".login_wrap")[0].style.opacity = 1;
  document.querySelectorAll(".login_wrap")[0].style.visibility = "visible";
});
document.querySelectorAll(".login_bg")[0].addEventListener("click", (e) => {
  if (e.target == document.querySelectorAll(".real_form")[0]) {
    document.querySelectorAll(".login_wrap")[0].style.opacity = 0;
    document.querySelectorAll(".login_wrap")[0].style.visibility = "hidden";
  }
});
document.querySelectorAll(".loginbtn")[0].addEventListener("click", (e) => {
  console.log(document.querySelectorAll(".pw")[0].value);
  if (
    document.querySelectorAll(".pw")[0].value == "" ||
    document.querySelectorAll(".pw")[0].previousSibling.innerHTML == ""
  ) {
    alert("아이디나 비밀번호를 입력해주세요");
    e.preventDefault();
  }
});
// 로그인 폼 끝
