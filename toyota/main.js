window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelectorAll(".background-pagenation")[0].style.transform =
      "translateX(-100vw)";
  }, 3000);
  setTimeout(() => {
    document
      .querySelectorAll(".pagenation_list")[1]
      .classList.add("pagenationOn");
  }, 3000);
  setTimeout(() => {
    document
      .querySelectorAll(".pagenation_list")[0]
      .classList.remove("pagenationOn");
  }, 3000);
  setTimeout(() => {
    document.querySelectorAll(".background_content p")[1].style.opacity = 1;
  }, 4000);
  setTimeout(() => {
    document.querySelectorAll(".background_content h2")[1].style.opacity = 1;
  }, 5000);
  document
    .querySelectorAll(".background_content p")[0]
    .classList.add("addtransition");
  document
    .querySelectorAll(".background_content h2")[0]
    .classList.add("addtransition");
  document
    .querySelectorAll(".background_content p")[1]
    .classList.add("addtransition");
  document
    .querySelectorAll(".background_content h2")[1]
    .classList.add("addtransition");
  setTimeout(() => {
    document.querySelectorAll(".background_content p")[0].style.opacity = 1;
  }, 1000);
  setTimeout(() => {
    document.querySelectorAll(".background_content h2")[0].style.opacity = 1;
  }, 2000);
});

for (let i = 0; i < document.querySelectorAll(".pagenation_list").length; i++) {
  document
    .querySelectorAll(".pagenation_list")
    [i].addEventListener("click", () => {
      document.querySelectorAll(
        ".background-pagenation"
      )[0].style.transform = `translateX(-${i}00vw)`;
    });

  for (let i = 0; i < 2; i++) {
    document
      .querySelectorAll(".pagenation_list")
      [i].addEventListener("click", () => {
        document
          .querySelectorAll(".pagenation_list")[1]
          .classList.remove("pagenationOn");
        document
          .querySelectorAll(".pagenation_list")[0]
          .classList.remove("pagenationOn");

        document
          .querySelectorAll(".background_content h2")
          [i].classList.remove("addtransition");
        document
          .querySelectorAll(".background_content p")
          [i].classList.remove("addtransition");
        document.querySelectorAll(".background_content h2")[
          i
        ].style.opacity = 0;
        document.querySelectorAll(".background_content p")[i].style.opacity = 0;

        document
          .querySelectorAll(".pagenation_list")
          [i].classList.add("pagenationOn");
        document;
        document
          .querySelectorAll(".background_content h2")
          [i].classList.add("addtransition");
        document
          .querySelectorAll(".background_content p")
          [i].classList.add("addtransition");
        setTimeout(() => {
          document.querySelectorAll(".background_content h2")[
            i
          ].style.opacity = 1;
        }, 2000);
        setTimeout(() => {
          document.querySelectorAll(".background_content p")[
            i
          ].style.opacity = 1;
        }, 1000);
      });
  }
}

window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (window.scrollY > 10) {
    document.querySelectorAll(".header")[0].style.opacity = 0.8;
  } else if (window.scrollY < 10) {
    document.querySelectorAll(".header")[0].style.opacity = 1;
  }
});

document.querySelectorAll(".category_list")[0].addEventListener("click", () => {
  document.querySelectorAll(".sec1_content")[0].innerHTML = "";
  document.querySelectorAll(".category_list")[0].classList.remove("on");
  document.querySelectorAll(".category_list")[1].classList.remove("on");
  document.querySelectorAll(".category_list")[2].classList.remove("on");
  document.querySelectorAll(".category_list")[3].classList.remove("on");
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
  document.querySelectorAll(".category_list")[0].classList.remove("on");
  document.querySelectorAll(".category_list")[1].classList.remove("on");
  document.querySelectorAll(".category_list")[2].classList.remove("on");
  document.querySelectorAll(".category_list")[3].classList.remove("on");
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
  document.querySelectorAll(".category_list")[0].classList.remove("on");
  document.querySelectorAll(".category_list")[1].classList.remove("on");
  document.querySelectorAll(".category_list")[2].classList.remove("on");
  document.querySelectorAll(".category_list")[3].classList.remove("on");
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
  document.querySelectorAll(".category_list")[0].classList.remove("on");
  document.querySelectorAll(".category_list")[1].classList.remove("on");
  document.querySelectorAll(".category_list")[2].classList.remove("on");
  document.querySelectorAll(".category_list")[3].classList.remove("on");
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
