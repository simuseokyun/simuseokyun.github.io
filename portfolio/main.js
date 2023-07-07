var count = 1;

window.addEventListener("scroll", function () {
  const progress = window.scrollY;
  const total =
    document.querySelector("html").scrollHeight -
    document.querySelector("html").clientHeight;
  const percentage = (progress / total) * 100;
  this.document.querySelectorAll(".status")[0].style.width = `${percentage}%`;
});

window.addEventListener("load", () => {
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
    document.querySelectorAll(".visual_content_sub")[0].style.display = "block";
  }, 3000);
  setTimeout(() => {
    document.querySelectorAll(".space_person")[0].style.right = "50px";
  }, 4000);
});

// window.addEventListener("scroll", () => {
//   var 높이 = window.scrollY;
//   var y = (-1 / 5) * 높이;
//   document.querySelectorAll(".visual")[0].style.transform = `translateY(${y})`;
// });

document.querySelectorAll(".arrow")[0].addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
// 스크롤 이벤트
window.addEventListener("scroll", () => {
  var 스크롤양 = window.scrollY;
  var 실제높이 = document.querySelector("html").scrollHeight;
  var 높이 = document.querySelector("html").clientHeight;
  console.log(스크롤양, 실제높이, 높이);
  var 넘어감 = false;
  if (스크롤양 >= 실제높이 / 5 - 150) {
    넘어감 = true;
    for (let i = 0; i < document.querySelectorAll(".nav_list a").length; i++) {
      document.querySelectorAll(".nav_list a")[i].style.color = "black";
      document.querySelectorAll(".border_bt")[i].style.background = "black";
    }

    document.querySelectorAll(".left_content")[0].style.marginTop = 0;

    document.querySelectorAll(".left_content")[0].style.opacity = 1;

    document.querySelectorAll(".one_circle")[0].style.left = "-200px";
    document.querySelectorAll(".one_circle")[0].style.opacity = 1;
    setInterval(() => {
      count = count + 1;
      if (count <= 63) {
        document.querySelectorAll(".num")[0].innerHTML = count;
      }
    }, 300);
    if (스크롤양 >= 실제높이 / 5 + 실제높이 / 5 - 250) {
      console.log(1);
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
        console.log(1);
        document.querySelectorAll(".wrap")[0].style.top = `0px`;
        document.querySelectorAll(".wrap")[0].style.opacity = 1;
      }
      if (스크롤양 >= (실제높이 / 5) * 4 - 200) {
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
    for (let i = 0; i < document.querySelectorAll(".nav_list a").length; i++) {
      document.querySelectorAll(".nav_list a")[i].style.color = "white";
      document.querySelectorAll(".border_bt")[i].style.background = "white";
    }
    document.querySelectorAll(".header")[0].style.background =
      "rgba(255,255,255,0)";
    document.querySelectorAll(".one_circle")[0].style.left = "-600px";
    document.querySelectorAll(".one_circle")[0].style.opacity = 0;
    document.querySelectorAll(".left_content")[0].style.marginTop = "50px";

    document.querySelectorAll(".left_content")[0].style.opacity = 0;
  }
});

var darkCount = 1;
document.querySelectorAll(".darkmode")[0].addEventListener("click", () => {
  if (darkCount == 1) {
    document.querySelectorAll(
      ".darkmode"
    )[0].innerHTML = `<img src="./images/다크모드dark.png" alt="dark" />`;
    darkCount = 2;
  } else {
    document.querySelectorAll(
      ".darkmode"
    )[0].innerHTML = `<img src="./images/다크모드light.png" alt="light" />`;
    darkCount = 1;
  }
});
var graph = [90, 85, 70, 85, 75, 50, 50, 90, 50];
for (let i = 0; i < document.querySelectorAll(".skill_one li").length; i++) {
  document

    .querySelectorAll(".skill_one li")
    [i].addEventListener("mouseenter", (e) => {
      if (e.target == document.querySelectorAll(".skill_one li"))
        console.log(1);
      setTimeout(() => {
        document.querySelectorAll(".second_gr")[i].style.width = `${graph[i]}%`;
      }, 100);
    });
}

//라이트버튼//
let archiveCount = 0;
document.querySelectorAll(".right_arrow")[0].addEventListener("click", (e) => {
  let overflow = document.querySelectorAll(".overflow")[0];

  console.log(e.target);
  if (e.target == document.querySelectorAll(".fa-chevron-right")[0]) {
    console.log(archiveCount);
    if (archiveCount == 0) {
      overflow.style.transform = "translateX(-660px)";
      document.querySelectorAll(".left_arrow")[0].style.display = "block";

      archiveCount++;
    } else if (archiveCount == 1) {
      overflow.style.transform = "translateX(calc(-660px * 2))";
      archiveCount++;
      // archiveCount = 2;
    } else if (archiveCount == 2) {
      overflow.style.transform = "translateX(calc(-660px * 3))";
      archiveCount++;
      // archiveCount = 3;
    } else if (archiveCount == 3) {
      overflow.style.transform = "translateX(calc(-660px * 4))";
      archiveCount++;
      // archiveCount = 4;
    } else if (archiveCount == 4) {
      overflow.style.transform = "translateX(calc(-660px * 5))";
      archiveCount++;
    } else if (archiveCount == 5) {
      overflow.style.transform = "translateX(calc(-660px * 6))";
      document.querySelectorAll(".right_arrow")[0].style.display = "none";
    }
  }
});

//레프트버튼//
document.querySelectorAll(".left_arrow")[0].addEventListener("click", (e) => {
  let overflow = document.querySelectorAll(".overflow")[0];
  console.log(archiveCount);
  if (e.target == document.querySelectorAll(".fa-chevron-left")[0]) {
    if (archiveCount == 5) {
      overflow.style.transform = "translateX(calc(-660px * 5))";
      document.querySelectorAll(".right_arrow")[0].style.display = "block";

      archiveCount--;
    } else if (archiveCount == 4) {
      overflow.style.transform = "translateX(calc(-660px * 4))";
      archiveCount--;
    } else if (archiveCount == 3) {
      overflow.style.transform = "translateX(calc(-660px * 3))";
      archiveCount--;
      // archiveCount = 2;
    } else if (archiveCount == 2) {
      overflow.style.transform = "translateX(calc(-660px * 2))";
      archiveCount--;
      // archiveCount = 3;
    } else if (archiveCount == 1) {
      overflow.style.transform = "translateX(calc(-660px * 1))";
      archiveCount--;
      // archiveCount = 4;
    } else if (archiveCount == 0) {
      overflow.style.transform = "translateX(0px)";
      document.querySelectorAll(".left_arrow")[0].style.display = "none";

      // archiveCount = 5;
    }
  }
});

//프로필 호버//
document
  .querySelectorAll(".contact_image")[0]
  .addEventListener("mouseenter", () => {
    console.log(1);
    document.querySelectorAll(".four_overlay")[0].style.background =
      "rgba(29,31,36,0.3)";
  });
document
  .querySelectorAll(".contact_image")[0]
  .addEventListener("mouseleave", () => {
    console.log(1);
    document.querySelectorAll(".four_overlay")[0].style.background =
      "rgba(29,31,36,0.7)";
  });

document.querySelectorAll(".info_button")[0].addEventListener("click", () => {
  document.querySelectorAll(".myInfo")[0].style.opacity = 1;
  document.querySelectorAll(".myInfo")[0].style.display = "block";
});
document.querySelectorAll(".close2")[0].addEventListener("click", (e) => {
  console.log(e.target);
  console.log(1);
  // if (e.target == document.querySelectorAll(".close2")) {
  document.querySelectorAll(".myInfo")[0].style.display = "none";
  document.querySelectorAll(".myInfo")[0].style.opacity = 0;
  // }
});

for (let i = 0; i < document.querySelectorAll(".skill_one li").length; i++) {
  document
    .querySelectorAll(".skill_one li")
    [i].addEventListener("mouseenter", () => {
      document.querySelectorAll(".skill_content")[i].style.display = "block";

      setTimeout(() => {
        document.querySelectorAll(".skill_content")[i].style.opacity = 1;
      }, 400);
    });
  document
    .querySelectorAll(".skill_one li")
    [i].addEventListener("mouseleave", (e) => {
      if (e.target == document.querySelectorAll(".skill_one li"))
        console.log(1);
      setTimeout(() => {
        document.querySelectorAll(".second_gr")[i].style.width = 0;
      }, 100);
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

//네비이동//

네비이동(0, ".visual");
네비이동(1, ".content_one");
네비이동(2, ".content_two");
네비이동(3, ".content_three");
네비이동(4, ".content_four");

function 네비이동(a, i) {
  var nav = document.querySelectorAll(".a");
  nav[a].addEventListener("click", () => {
    let location = document.querySelectorAll(i)[0].offsetTop;
    console.log(location);
    window.scrollTo({ top: location, behavior: "smooth" });
  });
}
