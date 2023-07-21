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

let weatherIcon = {
  "01d": "sunset",
  "02d": "cloudSunset",
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
        "https://api.openweathermap.org/data/2.5/weather?q=" +
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
          <!-- 현재 기온 -->
          <div class="test3">
            <div class="CurrTemp"></div>
            <!-- 지역 -->
            <div class="City"></div>
          </div>
          <div class="content2">
            <p class="sub_con">체감<span class="con_value"></span></p>
            <span class="circle"></span>
            <p class="sub_con">풍속<span class="con_value"></span></p>
            <span class="circle"></span>

            <p class="sub_con">습도<span class="con_value"></span></p>
          </div>
          <div class="clo_wrap">
            <table>
              <thead></thead>
              <tbody>
                <tr class="date">
                  <td>날짜</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr class="time">
                  <td>시간</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr class="weather2">
                  <td>날씨</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr class="temp">
                  <td>온도</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
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
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
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
              let 진짜날짜1 = data.list[0].dt_txt;
              let 진짜날짜2 = data.list[1].dt_txt;
              let 진짜날짜3 = data.list[2].dt_txt;
              let 진짜날짜4 = data.list[3].dt_txt;
              let 진짜날짜5 = data.list[4].dt_txt;

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

              진짜날짜1 = 진짜날짜1.substr(5, 5);
              진짜날짜2 = 진짜날짜2.substr(5, 5);
              진짜날짜3 = 진짜날짜3.substr(5, 5);
              진짜날짜4 = 진짜날짜4.substr(5, 5);
              진짜날짜5 = 진짜날짜5.substr(5, 5);

              document.querySelectorAll(".date td")[1].innerHTML = 진짜날짜1;
              document.querySelectorAll(".date td")[2].innerHTML = 진짜날짜2;
              document.querySelectorAll(".date td")[3].innerHTML = 진짜날짜3;
              document.querySelectorAll(".date td")[4].innerHTML = 진짜날짜4;
              document.querySelectorAll(".date td")[5].innerHTML = 진짜날짜5;

              let 날씨 = data.list[0].weather[0].icon;
              let 날씨2 = data.list[1].weather[0].icon;
              let 날씨3 = data.list[2].weather[0].icon;
              let 날씨4 = data.list[3].weather[0].icon;
              let 날씨5 = data.list[4].weather[0].icon;

              let 템플릿 = `<img src="./images/${weatherIcon[날씨]}.png"></img>`;

              let 템플릿2 = `<img src="./images/${weatherIcon[날씨2]}.png"></img>`;

              let 템플릿3 = `<img src="./images/${weatherIcon[날씨3]}.png"></img>`;

              let 템플릿4 = `<img src="./images/${weatherIcon[날씨4]}.png"></img>`;

              let 템플릿5 = `<img src="./images/${weatherIcon[날씨5]}.png"></img>`;

              document
                .querySelectorAll(".weather2 td")[1]
                .insertAdjacentHTML("beforeend", 템플릿);
              document
                .querySelectorAll(".weather2 td")[2]
                .insertAdjacentHTML("beforeend", 템플릿2);
              document
                .querySelectorAll(".weather2 td")[3]
                .insertAdjacentHTML("beforeend", 템플릿3);
              document
                .querySelectorAll(".weather2 td")[4]
                .insertAdjacentHTML("beforeend", 템플릿4);
              document
                .querySelectorAll(".weather2 td")[5]
                .insertAdjacentHTML("beforeend", 템플릿5);

              let 온도1 = data.list[0].main.temp;
              온도1 = 온도1.toFixed(0);
              document.querySelectorAll(".temp td")[1].innerHTML = `${온도1}°`;

              let 온도2 = data.list[1].main.temp;
              온도2 = 온도2.toFixed(0);
              document.querySelectorAll(".temp td")[2].innerHTML = `${온도2}°`;

              let 온도3 = data.list[2].main.temp;
              온도3 = 온도3.toFixed(0);
              document.querySelectorAll(".temp td")[3].innerHTML = `${온도3}°`;
              let 온도4 = data.list[3].main.temp;
              온도4 = 온도4.toFixed(0);
              document.querySelectorAll(".temp td")[4].innerHTML = `${온도4}°`;
              let 온도5 = data.list[4].main.temp;
              온도5 = 온도5.toFixed(0);
              document.querySelectorAll(".temp td")[5].innerHTML = `${온도5}°`;
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
