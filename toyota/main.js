window.addEventListener("DOMContentLoaded", function () {
  페이드인("h2", 0, 1, 2);
  페이드인("p", 0, 1, 1);
  트랜지션("h2", 0);
  트랜지션("p", 0);
  setTimeout(() => {
    document.querySelectorAll(".background_content p")[0].style.transform =
      "translateX(0)";
  }, 1000);
});

// 세대별 차량 시작
document.querySelectorAll(".category_list")[0].addEventListener("click", () => {
  document.querySelectorAll(".sec1_content")[0].innerHTML = "";
  removeOn(0);
  removeOn(1);
  removeOn(2);
  removeOn(3);
  document.querySelectorAll(".category_list")[0].classList.add("on");

  var 템플릿 = `<div class="sec1_content">
<div class="model1">
  <div class="model1_image">
    <img src="./images/MODEL1.png" alt="top1" />
  </div>
  <div class="model1_range">
    <span>1위</span>
  </div>
</div>
<div class="sec1_content_right">
  <h2>1위. RAV4 Hybrid</h2>
  <div class="another_model">
    <div class="model2">
      <img src="./images/model2.png" alt="model2" />
      <h2>2위. SIENNA</h2>
    </div>
    <div class="model3">
      <img src="./images/model3_11.png" alt="model3" />
      <h2>3위. CAMRY hybrid</h2>
    </div>
  </div>
</div>
</div>`;
  document
    .querySelectorAll(".sec1_content")[0]
    .insertAdjacentHTML("beforebegin", 템플릿);
});

document.querySelectorAll(".category_list")[1].addEventListener("click", () => {
  document.querySelectorAll(".sec1_content")[0].innerHTML = "";
  removeOn(0);
  removeOn(1);
  removeOn(2);
  removeOn(3);
  document.querySelectorAll(".category_list")[1].classList.add("on");
  var 템플릿 = `<div class="sec1_content">
<div class="model1">
  <div class="model1_image">
    <img src="./images/model2.png" alt="top1" />
  </div>
  <div class="model1_range">
    <span>1위</span>
  </div>
</div>
<div class="sec1_content_right">
  <h2>1위. SIENNA</h2>
  <div class="another_model">
    <div class="model2">
      <img src="./images/MODEL1.png" alt="model2" />
      <h2>2위. RAV4 hybrid</h2>
    </div>
    <div class="model3">
      <img src="./images/model3_11.png" alt="model3" />
      <h2>3위. CAMRY hybrid</h2>
    </div>
  </div>
</div>
</div>`;
  document
    .querySelectorAll(".sec1_content")[0]
    .insertAdjacentHTML("beforebegin", 템플릿);
});

document.querySelectorAll(".category_list")[2].addEventListener("click", () => {
  document.querySelectorAll(".sec1_content")[0].innerHTML = "";
  removeOn(0);
  removeOn(1);
  removeOn(2);
  removeOn(3);
  document.querySelectorAll(".category_list")[2].classList.add("on");
  var 템플릿 = `<div class="sec1_content">
<div class="model1">
  <div class="model1_image">
    <img src="./images/model3_11.png" alt="top1" />
  </div>
  <div class="model1_range">
    <span>1위</span>
  </div>
</div>
<div class="sec1_content_right">
  <h2>1위. CAMRY hybrid</h2>
  <div class="another_model">
    <div class="model2">
      <img src="./images/model2.png" alt="model2" />
      <h2>2위. SIENNA</h2>
    </div>
    <div class="model3">
      <img src="./images/MODEL1.png" alt="model3" />
      <h2>3위. RAV4 hybrid</h2>
    </div>
  </div>
</div>
</div>`;
  document
    .querySelectorAll(".sec1_content")[0]
    .insertAdjacentHTML("beforebegin", 템플릿);
});

document.querySelectorAll(".category_list")[3].addEventListener("click", () => {
  document.querySelectorAll(".sec1_content")[0].innerHTML = "";
  removeOn(0);
  removeOn(1);
  removeOn(2);
  removeOn(3);
  document.querySelectorAll(".category_list")[3].classList.add("on");

  var 템플릿 = `<div class="sec1_content">
<div class="model1">
  <div class="model1_image">
    <img src="./images/MODEL1.png" alt="top1" />
  </div>
  <div class="model1_range">
    <span>1위</span>
  </div>
</div>
<div class="sec1_content_right">
  <h2>1위. RAV4 Hybrid</h2>
  <div class="another_model">
    <div class="model2">
      <img src="./images/model3_11.png" alt="model2" />
      <h2>2위. CAMRY hybrid</h2>
    </div>
    <div class="model3">
      <img src="./images/model2.png" alt="model3" />
      <h2>3위. SIENNA</h2>
    </div>
  </div>
</div>
</div>`;
  document
    .querySelectorAll(".sec1_content")[0]
    .insertAdjacentHTML("beforebegin", 템플릿);
});
// 세대별 차량 끝

// 슬라이드 마우스이벤트 시작
let 시작좌표 = 0;
let 이동거리 = 0;
var 눌렀냐 = false;
document
  .querySelectorAll(".background")[0]
  .addEventListener("mousedown", (e) => {
    눌렀냐 = true;
    시작좌표 = e.clientX;
    console.log(시작좌표);
  });
document
  .querySelectorAll(".background")[0]
  .addEventListener("mousemove", (e) => {
    이동거리 = 시작좌표 - e.clientX;
    if (눌렀냐 == true) {
      document.querySelectorAll(
        ".background-pagenation"
      )[0].style.transform = `translateX(-${이동거리}px)`;
    }
  });

document.querySelectorAll(".background")[0].addEventListener("mouseup", (e) => {
  눌렀냐 = false;
  if (이동거리 >= 300) {
    document.querySelectorAll(
      ".background-pagenation"
    )[0].style.transform = `translateX(-100vw)`;
    document.querySelectorAll(".background-pagenation")[0].style.transition =
      "all 0.5s";

    페이드인("h2", 1, 1, 2);
    페이드인("p", 1, 1, 1);
    페이지네이션(0, 0);
    페이지네이션(1, 0);
    // for (let i = 0; i < document.querySelectorAll(".nav_list").length; i++) {
    //   document.querySelectorAll(".nav_list")[i].style.color = "white";
    // }

    setTimeout(() => {
      document.querySelectorAll(".background_content p")[1].style.transform =
        "translateX(0)";
    }, 1000);

    페이드인("h2", 0, 0, 0);
    페이드인("p", 0, 0, 0);

    setTimeout(() => {
      document.querySelectorAll(".background_content p")[0].style.transform =
        "translateX(100px)";
    }, 1000);
  } else if (이동거리 < 300) {
    document.querySelectorAll(
      ".background-pagenation"
    )[0].style.transform = `translateX(0vw)`;
    document.querySelectorAll(".background-pagenation")[0].style.transition =
      "all 0.5s";
  }
  setTimeout(() => {
    document.querySelectorAll(".background-pagenation")[0].style.transition =
      "none";
  }, 500);
});

document
  .querySelectorAll(".background2")[0]
  .addEventListener("mousedown", (e) => {
    시작좌표 = e.clientX;
    눌렀냐 = true;
  });

document
  .querySelectorAll(".background2")[0]
  .addEventListener("mousemove", (e) => {
    이동거리 = 시작좌표 - e.clientX;
    console.log(이동거리);
    if (눌렀냐 == true) {
      document.querySelectorAll(
        ".background-pagenation"
      )[0].style.transform = `translateX(calc(${이동거리}px-100vw))`;
    }
  });
document
  .querySelectorAll(".background2")[0]
  .addEventListener("mouseup", (e) => {
    눌렀냐 = false;
    if (이동거리 < -300) {
      document.querySelectorAll(
        ".background-pagenation"
      )[0].style.transform = `translateX(0vw)`;
      document.querySelectorAll(".background-pagenation")[0].style.transition =
        "all 0.5s";
      페이드인("h2", 0, 1, 2);
      페이드인("p", 0, 1, 1);
      페이드인("h2", 1, 0, 2);
      페이드인("p", 1, 0, 1);
      페이지네이션(0, 0);
      페이지네이션(1, 0);
      setTimeout(() => {
        document.querySelectorAll(".background_content p")[0].style.transform =
          "translateX(0px)";
      }, 1000);
      document.querySelectorAll(".background_content p")[1].style.transform =
        "translateX(100px)";
    } else {
      document.querySelectorAll(
        ".background-pagenation"
      )[0].style.transform = `translateX(-100vw)`;
      document.querySelectorAll(".background-pagenation")[0].style.transition =
        "all 0.5s";
    }
  });

// 마우스 이벤트 끝

// 스크롤 이벤트
window.addEventListener("scroll", () => {
  var 스크롤양 = window.scrollY;
  var 실제높이 = document.querySelector("html").scrollHeight;
  var 높이 = document.querySelector("html").clientHeight;
  console.log(스크롤양, 실제높이, 높이);
  var 네비1 = document.querySelectorAll(".nav_list a");
  var 네비2 = document.querySelectorAll(".nav_list2 a");
  if (스크롤양 + 높이 >= 실제높이 / 3) {
    console.log(1);
    for (let i = 0; i < 5; i++) {
      네비1[i].style.color = "black";
    }
    네비2[0].style.color = "black";
    네비2[1].style.color = "black";
    document.querySelectorAll(".header")[0].style.background = "white";
  } else {
    document.querySelectorAll(".header")[0].style.background = "none";

    for (let i = 0; i < 5; i++) {
      네비1[i].style.color = "white";
    }
    네비2[0].style.color = "white";
    네비2[1].style.color = "white";
  }
});
//스크롤 끝

let 템플릿 = `
  <div class="sec2_submodel1">
                <h2>CAMRY</h2>
                <p>HEV</p>
                <img src="./images/구매혜택3.png" alt="" />
                <p>월 1,142,400 원</p>
              </div>
              <div class="sec2_mainmodel">
                <h2>SIENNA</h2>
                <p>HEV</p>
                <img src="./images/구매혜택2.png" alt="" />
                <div class="bottom_content">
                  <div class="bottom_left">
                    <p>월 775,240 원</p>
                    <p>KRW 69,500,000~</p>
                  </div>
                  <div class="bottom_right">
                    <button class="btn">혜택 보기</button>
                    <button class="btn">견적 내기</button>
                  </div>
                </div>
              </div>
              <div class="sec2_submodel2">
                <h2>RVA4</h2>
                <p>PHEV</p>
                <img src="./images/구매혜택.png" alt="" />
                <p>월 721,540 원</p>
              </div>
`;
document
  .querySelectorAll(".sec_content2")[0]
  .insertAdjacentHTML("beforeend", 템플릿);

// 이달의 구매혜택 페이지네이션
document.querySelectorAll(".pa2")[1].addEventListener("click", () => {
  document.querySelectorAll(".pa2")[0].classList.remove("redon");
  document.querySelectorAll(".pa2")[1].classList.remove("redon");
  document.querySelectorAll(".pa2")[2].classList.remove("redon");

  document.querySelectorAll(".pa2")[1].classList.add("redon");
  let 템플릿 = `
  <div class="sec2_submodel1">
                <h2>SIENNA</h2>
                <p>HEV</p>
                <img src="./images/구매혜택2.png" alt="SIENNA" />
                <p>월 775,240 원</p>
              </div>
              <div class="sec2_mainmodel">
                <h2>RVA4</h2>
                <p>PHEV</p>
                <img src="./images/구매혜택.png" alt="RVA4" />
                <div class="bottom_content">
                  <div class="bottom_left">
                    <p>월 721,540 원</p>
                    <p>KRW 69,500,000~</p>
                  </div>
                  <div class="bottom_right">
                    <button class="btn">혜택 보기</button>
                    <button class="btn">견적 내기</button>
                  </div>
                </div>
              </div>
              <div class="sec2_submodel2">
                <h2>CAMRY</h2>
                <p>HEV</p>
                <img src="./images/구매혜택3.png" alt="CAMRY" />
                <p>월 1,142,440 원</p>
              </div>
`;
  document.querySelectorAll(".sec_content2")[0].innerHTML = "";

  document
    .querySelectorAll(".sec_content2")[0]
    .insertAdjacentHTML("beforeend", 템플릿);
});

document.querySelectorAll(".pa2")[0].addEventListener("click", () => {
  document.querySelectorAll(".pa2")[0].classList.remove("redon");
  document.querySelectorAll(".pa2")[1].classList.remove("redon");
  document.querySelectorAll(".pa2")[2].classList.remove("redon");

  document.querySelectorAll(".pa2")[0].classList.add("redon");
  document.querySelectorAll(".sec_content2")[0].innerHTML = "";

  let 템플릿 = `
  <div class="sec2_submodel1">
                <h2>CAMRY</h2>
                <p>HEV</p>
                <img src="./images/구매혜택3.png" alt="CAMRY" />
                <p>월 1,142,400 원</p>
              </div>
              <div class="sec2_mainmodel">
                <h2>SIENNA</h2>
                <p>HEV</p>
                <img src="./images/구매혜택2.png" alt="SIENNA" />
                <div class="bottom_content">
                  <div class="bottom_left">
                    <p>월 775,240 원</p>
                    <p>KRW 54,000,000~</p>
                  </div>
                  <div class="bottom_right">
                    <button class="btn">혜택 보기</button>
                    <button class="btn">견적 내기</button>
                  </div>
                </div>
              </div>
              <div class="sec2_submodel2">
                <h2>RVA4</h2>
                <p>PHEV</p>
                <img src="./images/구매혜택.png" alt="RVA4" />
                <p>월 721,540 원</p>
              </div>
`;
  document
    .querySelectorAll(".sec_content2")[0]
    .insertAdjacentHTML("beforeend", 템플릿);
});
document.querySelectorAll(".pa2")[2].addEventListener("click", () => {
  document.querySelectorAll(".pa2")[0].classList.remove("redon");
  document.querySelectorAll(".pa2")[1].classList.remove("redon");
  document.querySelectorAll(".pa2")[2].classList.remove("redon");

  document.querySelectorAll(".pa2")[2].classList.add("redon");
  document.querySelectorAll(".sec_content2")[0].innerHTML = "";

  let 템플릿 = `
  <div class="sec2_submodel1">
                <h2>RVA4</h2>
                <p>HEV</p>
                <img src="./images/구매혜택.png" alt="RVA4" />
                <p>월 721,540 원</p>
              </div>
              <div class="sec2_mainmodel">
                <h2>CAMRY</h2>
                <p>HEV</p>
                <img src="./images/구매혜택3.png" alt="CAMRY" />
                <div class="bottom_content">
                  <div class="bottom_left">
                    <p>월 1,142,440 원</p>
                    <p>KRW 43,500,000~</p>
                  </div>
                  <div class="bottom_right">
                    <button class="btn">혜택 보기</button>
                    <button class="btn">견적 내기</button>
                  </div>
                </div>
              </div>
              <div class="sec2_submodel2">
                <h2>SIENNA</h2>
                <p>PHEV</p>
                <img src="./images/구매혜택2.png" alt="SIEENA" />
                <p>월 775,240 원</p>
              </div>
`;
  document
    .querySelectorAll(".sec_content2")[0]
    .insertAdjacentHTML("beforeend", 템플릿);
});
function removeOn(a) {
  document.querySelectorAll(".category_list")[a].classList.remove("on");
}

function 화면이동(sel, vw, time) {
  setTimeout(() => {
    document.querySelectorAll(".background-pagenation")[
      sel
    ].style.transform = `translateX(${vw}00vw)`;
  }, `${time}000`);
}

function 페이지네이션(sel, time) {
  setTimeout(() => {
    document
      .querySelectorAll(".pagenation_list")
      [sel].classList.toggle("pagenationOn");
  }, `${time}000`);
}

function 페이드인(sel, sel2, opa, time) {
  setTimeout(() => {
    document.querySelectorAll(`.background_content ${sel}`)[
      sel2
    ].style.opacity = opa;
  }, `${time}000`);
}
function 트랜지션(sel, sel2) {
  document
    .querySelectorAll(`.background_content ${sel}`)
    [sel2].classList.toggle("addtransition");
}
