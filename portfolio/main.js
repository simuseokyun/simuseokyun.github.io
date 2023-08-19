// 헤더 진행 var 시작
window.addEventListener("scroll", function () {
  const progress = window.scrollY;
  const total =
    document.querySelector("html").scrollHeight -
    document.querySelector("html").clientHeight;
  const percentage = (progress / total) * 100;
  this.document.querySelectorAll(".status")[0].style.width = `${percentage}%`;
});
// 헤더 진행 var 끝

// 로드되면 비주얼 텍스트 등장
setTimeout(() => {
  document.querySelectorAll(".one_circle")[0].style.right = "-400px";
}, 1000);
setTimeout(() => {
  document.querySelectorAll(".visual_content_main")[0].style.transform =
    "translateX(0px)";
  document.querySelectorAll(".visual_content_main")[0].style.opacity = 1;
}, 1000);
setTimeout(() => {
  document.querySelectorAll(".visual_content_main2")[0].style.transform =
    "translateX(0px)";
  document.querySelectorAll(".visual_content_main2")[0].style.opacity = 1;
}, 2000);

setTimeout(() => {
  document.querySelectorAll(".visual_content_sub")[0].style.opacity = 1;
}, 3000);
setTimeout(() => {
  document.querySelectorAll(".space_person")[0].style.marginRight = 0;
}, 4000);
// 비주얼 끝

// 상단 이동버튼 시작
document.querySelectorAll(".arrow")[0].addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// 상단 이동버튼 끝

// 스크롤 이벤트
window.addEventListener("load", () => {
  var count = 78;
  window.addEventListener("scroll", () => {
    var 스크롤양 = window.scrollY;
    var 실제높이 = document.querySelector("html").scrollHeight;
    var 높이 = document.querySelector("html").clientHeight;

    if (스크롤양 >= (실제높이 - 높이) * 0.2) {
      for (
        let i = 0;
        i < document.querySelectorAll(".nav_list a").length;
        i++
      ) {
        document.querySelectorAll(".nav_list a")[i].style.color = "black";
        document.querySelectorAll(".border_bt")[i].style.background = "black";
      }

      document.querySelectorAll(".left_content")[0].style.marginTop = 0;

      document.querySelectorAll(".left_content")[0].style.opacity = 1;

      if (스크롤양 >= (실제높이 - 높이) * 0.4) {
        document.querySelectorAll(".skill_wrap")[0].style.opacity = "1";

        for (
          let i = 0;
          i < document.querySelectorAll(".nav_list a").length;
          i++
        ) {
          document.querySelectorAll(".nav_list a")[i].style.color = "white";
          document.querySelectorAll(".border_bt")[i].style.background = "white";
        }
        if (스크롤양 >= (실제높이 / 5) * 3 - 300) {
          document.querySelectorAll(".wrap")[0].style.top = `0px`;
          document.querySelectorAll(".wrap")[0].style.opacity = 1;
        }
        if (스크롤양 >= (실제높이 / 5) * 4 - 400) {
          document.querySelectorAll(".four_image")[0].style.transform =
            "scale(1.0)";
          document.querySelectorAll(".contact_image")[0].style.transform =
            "translateX(0)";
          document.querySelectorAll(".contact_image")[0].style.opacity = 1;
        } else if (스크롤양 < (실제높이 / 5) * 4 - 200) {
          document.querySelectorAll(".four_image")[0].style.transform =
            "scale(1.2)";
          document.querySelectorAll(".contact_image")[0].style.opacity = 0;
          document.querySelectorAll(".contact_image")[0].style.transform =
            "translateX(-100px)";
        }
      }
    } else if (스크롤양 < 실제높이 / 5 - 150) {
      for (
        let i = 0;
        i < document.querySelectorAll(".nav_list a").length;
        i++
      ) {
        document.querySelectorAll(".nav_list a")[i].style.color = "white";
        document.querySelectorAll(".border_bt")[i].style.background = "white";
      }
      document.querySelectorAll(".header")[0].style.background =
        "rgba(255,255,255,0)";
      document.querySelectorAll(".left_content")[0].style.marginTop = "50px";
      document.querySelectorAll(".left_content")[0].style.opacity = 0;
    }
  });
  // 스크롤 이벤트 끝

  // 다크모드 시작
  let darkCount = 1;
  document.querySelectorAll(".darkmode")[0].addEventListener("click", () => {
    if (darkCount == 1) {
      document.querySelectorAll(
        ".darkmode"
      )[0].innerHTML = `<img src="./images/다크모드dark.png" alt="dark" />`;

      document.querySelectorAll(".visual")[0].style.background = "#a60cff";

      document.querySelectorAll(".visual_content")[0].style.color = "white";
      document.querySelectorAll(".one_circle")[0].style.backgroundColor =
        "rgba(0,0,0,0.1)";
      darkCount = 2;
    } else {
      document.querySelectorAll(
        ".darkmode"
      )[0].innerHTML = `<img src="./images/다크모드light.png" alt="light" />`;
      document.querySelectorAll(".visual")[0].style.background =
        "linear-gradient(-45deg, rgb(36, 20, 63), #000000)";

      document.querySelectorAll(".visual_content")[0].style.color = "#9696ea";
      document.querySelectorAll(".one_circle")[0].style.backgroundColor =
        "rgba(255,255,255,0.02)";
      darkCount = 1;
    }
  });
  // 다크모드 끝

  //라이트버튼//
  let archiveCount = 0;
  document
    .querySelectorAll(".right_arrow")[0]
    .addEventListener("click", (e) => {
      archiveCount++;
      let overflow = document.querySelectorAll(".overflow")[0];
      if (e.target == document.querySelectorAll(".fa-chevron-right")[0]) {
        if (archiveCount == 1) {
          overflow.style.transform = "translateX(-660px)";
          document.querySelectorAll(".left_arrow")[0].style.display = "block";
        } else if (archiveCount == 2) {
          overflow.style.transform = "translateX(calc(-660px * 2))";
        } else if (archiveCount == 3) {
          overflow.style.transform = "translateX(calc(-660px * 3))";
        } else if (archiveCount == 4) {
          overflow.style.transform = "translateX(calc(-660px * 4))";
        } else if (archiveCount == 5) {
          overflow.style.transform = "translateX(calc(-660px * 5))";
        } else if (archiveCount == 6) {
          overflow.style.transform = "translateX(calc(-660px * 6))";
        } else {
          overflow.style.transform = "translateX(calc(-660px * 7))";
          document.querySelectorAll(".right_arrow")[0].style.display = "none";
        }
      }
    });

  // 레프트버튼
  document.querySelectorAll(".left_arrow")[0].addEventListener("click", (e) => {
    archiveCount--;
    let overflow = document.querySelectorAll(".overflow")[0];
    if (e.target == document.querySelectorAll(".fa-chevron-left")[0]) {
      if (archiveCount == 6) {
        overflow.style.transform = "translateX(calc(-660px * 6))";
        document.querySelectorAll(".right_arrow")[0].style.display = "block";
      } else if (archiveCount == 5) {
        overflow.style.transform = "translateX(calc(-660px * 5))";
      } else if (archiveCount == 4) {
        overflow.style.transform = "translateX(calc(-660px * 4))";
      } else if (archiveCount == 3) {
        overflow.style.transform = "translateX(calc(-660px * 3))";
      } else if (archiveCount == 2) {
        overflow.style.transform = "translateX(calc(-660px * 2))";
      } else if (archiveCount == 1) {
        overflow.style.transform = "translateX(calc(-660px * 1))";
      } else {
        overflow.style.transform = "translateX(0)";
        document.querySelectorAll(".left_arrow")[0].style.display = "none";
      }
    }
  });

  //프로필 호버//
  document
    .querySelectorAll(".contact_image")[0]
    .addEventListener("mouseenter", () => {
      document.querySelectorAll(".four_overlay")[0].style.background =
        "rgba(29,31,36,0.3)";
    });
  document
    .querySelectorAll(".contact_image")[0]
    .addEventListener("mouseleave", () => {
      document.querySelectorAll(".four_overlay")[0].style.background =
        "rgba(29,31,36,0.7)";
    });
  // 프로필 호버 끝

  // my Info 시작
  document.querySelectorAll(".info_button")[0].addEventListener("click", () => {
    document.querySelectorAll(".myInfo")[0].style.opacity = 1;
    document.querySelectorAll(".myInfo")[0].style.display = "block";
  });
  document.querySelectorAll(".close2")[0].addEventListener("click", (e) => {
    document.querySelectorAll(".myInfo")[0].style.display = "none";
    document.querySelectorAll(".myInfo")[0].style.opacity = 0;
  });
  // my Info 끝

  // skill 호버 시작
  for (let i = 0; i < document.querySelectorAll(".skill_one li").length; i++) {
    document
      .querySelectorAll(".skill_one li")
      [i].addEventListener("mouseenter", () => {
        document.querySelectorAll(".skill_content")[i].style.display = "block";
        setTimeout(() => {
          document.querySelectorAll(".skill_content")[i].style.opacity = 1;
        }, 300);
      });

    document
      .querySelectorAll(".skill_one li")
      [i].addEventListener("mouseleave", () => {
        document.querySelectorAll(".skill_content")[i].style.display = "none";
        setTimeout(() => {
          document.querySelectorAll(".skill_content")[i].style.opacity = 0;
        }, 400);
      });
  }
});
//skill 호버 끝

//네비이동//

네비이동(0, ".visual");
네비이동(1, ".content_one");
네비이동(2, ".content_two");
네비이동(3, ".content_three");
네비이동(4, ".content_four");

function 네비이동(a, i) {
  var nav = document.querySelectorAll(".nav_link");
  nav[a].addEventListener("click", () => {
    let location = document.querySelectorAll(i)[0].offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  });
}

// 네비이동 끝
