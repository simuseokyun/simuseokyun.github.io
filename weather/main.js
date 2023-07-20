let 지역변환 = [
  {
    서울: "seoul",
    부산: "busan",
    인천: "incheon",
    대구: "daego",
    울산: "ulsan",
    광주: "gwangju",
    대전: "daejeon",
    수원: "suwon",
    용인: "yongin",
    시흥: "siheung",
    강릉: "gangneung",
    춘천: "chuncheon",
    원주: "wonju",
    김해: "gimhae",
    창원: "changwon",
    제주: "jeju",
    동해: "donghae",
    평창: "pyeongchang",
    경주: "gyeongju",
    포항: "pohang",
    목포: "mokpo",
    순천: "suncheon",
    여수: "yeosu",
  },
];

window.addEventListener("load", () => {
  document.querySelectorAll(".back_btn")[0].addEventListener("click", () => {
    console.log(1);
    document.querySelectorAll(".test2")[0].innerHTML = "";
    document.querySelectorAll(".test")[0].style.transform = "translateX(0)";
  });
  document.querySelectorAll(".bg")[0].style.transform = "scale(1.0)";

  document.querySelectorAll(".btn")[0].addEventListener("click", () => {
    var 입력한지역 = document.querySelector(".inp").value;

    if (document.querySelectorAll(".inp")[0].value.length >= 1) {
      console.log(지역변환[0]);
      console.log(지역변환[0][`${입력한지역}`]);
      console.log(Object.keys(지역변환[0]));
      var 지역찾기 = Object.keys(지역변환[0]).find((data) => {
        return data == document.querySelectorAll(".inp")[0].value;
      });
      console.log(지역찾기);
      if (지역찾기 != undefined) {
        document.querySelectorAll(".test")[0].style.transform =
          "translateX(-100vw)";
        fetch(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            지역변환[0][`${입력한지역}`] +
            "&appid=d6c5f8e1e444d2e64a89ae78ec503f6e&units=metric"
        )
          .then((res) => res.json())
          .then(function (data) {
            console.log(data);
            console.log(data.weather);
            var icon = data.weather[0].icon;

            var temp = Math.floor(data.main.temp) + "℃";
            var city = data.name;
            var 템플릿 = `
            <div class="CurrIcon"></div>

           <div class="test3">
            <div class="CurrTemp"></div>
     
            <div class="City"></div>
           </div>`;
            document
              .querySelectorAll(".test2")[0]
              .insertAdjacentHTML("beforeend", 템플릿);
            document.querySelectorAll(".CurrTemp")[0].innerHTML = temp;
            document.querySelectorAll(".City")[0].innerHTML = city;
            var 날씨아이콘 =
              `<img class="wea_image" src="http://openweathermap.org/img/wn/` +
              icon +
              `@2x.png"></img>`;
            document
              .querySelectorAll(".CurrIcon")[0]
              .insertAdjacentHTML("beforeend", 날씨아이콘);
          });
      } else {
        alert("해당 도시의 데이터가 없습니다.");
      }

      // console.log(1);
    } else {
      alert("지역을 입력해주세요.");
    }
  });
});
