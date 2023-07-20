let 지역변환 = [
  {
    서울: "seoul",
    부산: "busan",
    인천: "incheon",
    대구: "daegu",
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
// "01n": " moon",
let weatherIcon = {
  "01d": "sunset",
  "02d": "cludeSunset",
  "03d": "cloud",
  "04d": "brokenCloud",
  "09d": "rain",
  "10d": "rainSunset",
  "11d": "thunder",
  "13d": "snow",
  "50d": "pog",
  "01n": "moon",
  "02n": "moon",
  "03n": "cloud",
  "04n": "brokenCloud",
  "09n": "rain",
  "10n": "rain",
  "11n": "thunder",
  "13n": "snow",
  "50n": "pog",
};
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
            var feel = data.main.feels_like;
            var wind = data.wind.speed;
            var humidity = data.main.humidity;
            var temp = Math.floor(data.main.temp) + "°";
            var city = data.name;
            var 템플릿 = `
            <div class="CurrIcon"></div>

           <div class="test3">
            <div class="CurrTemp"></div>
     
            <div class="City"></div>
           </div>`;
            document.querySelectorAll(".bg")[0].style.filter = "blur(2px)";
            document
              .querySelectorAll(".test2")[0]
              .insertAdjacentHTML("beforeend", 템플릿);
            document.querySelectorAll(".con_value")[1].innerHTML = wind;
            document.querySelectorAll(".con_value")[2].innerHTML = humidity;

            document.querySelectorAll(".con_value")[0].innerHTML = feel + "°";
            document.querySelectorAll(".CurrTemp")[0].innerHTML = temp;
            document.querySelectorAll(".City")[0].innerHTML = city;
            var 날씨아이콘 = `<img class="wea_image" src="./images/${weatherIcon[icon]}.png"><img/>`;

            document
              .querySelectorAll(".CurrIcon")[0]
              .insertAdjacentHTML("beforeend", 날씨아이콘);
            fetch(
              "http://api.openweathermap.org/data/2.5/forecast?q=" +
                지역변환[0][`${입력한지역}`] +
                "&appid=d6c5f8e1e444d2e64a89ae78ec503f6e&units=metric"
            )
              .then((res) => res.json())
              .then((data) => {
                let 날짜 = data.list[0].dt_txt;
                let 날짜2 = data.list[1].dt_txt;
                let 날짜3 = data.list[2].dt_txt;
                let 날짜4 = data.list[3].dt_txt;
                let 날짜5 = data.list[4].dt_txt;
                let 진짜날짜 = data.list[0].dt_txt;

                날짜 = 날짜.substr(11, 5);

                document.querySelectorAll(".time td")[1].innerHTML = 날짜;
                날짜2 = 날짜2.substr(11, 5);

                document.querySelectorAll(".time td")[2].innerHTML = 날짜2;
                날짜3 = 날짜3.substr(11, 5);

                document.querySelectorAll(".time td")[3].innerHTML = 날짜3;
                날짜4 = 날짜4.substr(11, 5);

                document.querySelectorAll(".time td")[4].innerHTML = 날짜4;
                날짜5 = 날짜5.substr(11, 5);

                document.querySelectorAll(".time td")[5].innerHTML = 날짜5;
                진짜날짜 = 진짜날짜.substr(5, 5);
                console.log(진짜날짜);
                document.querySelectorAll(".date td")[1].innerHTML = 진짜날짜;

                let 날씨 = data.list[0].weather[0].icon;
                let 날씨2 = data.list[0].weather[0].icon;
                let 날씨3 = data.list[0].weather[0].icon;
                let 날씨4 = data.list[0].weather[0].icon;
                let 날씨5 = data.list[0].weather[0].icon;

                let 템플릿 = `<img src="./images/${weatherIcon[날씨]}.png"></img>`;
                console.log(날씨);

                document
                  .querySelectorAll(".weather2 td")[1]
                  .insertAdjacentHTML("beforeend", 템플릿);
              });
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
