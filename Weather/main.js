// 사용자가 input에 입력한 값 영어로 변환작업
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
    시흥: "siheung-si",
    강릉: "gangneung",
    춘천: "chuncheon",
    원주: "wonju",
    김해: "gimhae",
    창원: "changwon",
    제주: "jeju",
    오산: "osan",
    인제: "inje",
    영월: "yeongwol-gun",
    경주: "gyeongju",
    포항: "pohang",
    목포: "mokpo",
    순천: "suncheon",
    여수: "yeosu",
    철원: "cheorwon-gun",
    고양: "goyang",
    동두천: "dongducheon-si",
    부천: "bucheon",
    영주: "yeongju",
    남양주: "namyangju",
    세종: "sejong",
    과천: "gwacheon",
    영주: "yeongju",
    광명: "gwangmyeong-si",
    구리: "guri",
    무주: "muju",
    안성: "anseong",
    군산: "gunsan",
    양산: "yangsan",
    광양: "gwangyang",
    남원: "namwon",
    나주: "naju",
    보령: "boryeong",
    안산: "ansan",
    여주: "yeoju",
    이천: "icheon-si",
    하남: "hanam",
    화성: "hwaseong",
    속초: "sokcho",
    양양: "yangyang",
    청주: "cheongju",
    충주: "chungju",
    공주: "gongju",
    서산: "seosan",
    제천: "jecheon",
    진주: "jinju",
    도쿄: "tokyo",

    익산: "iksan",
    파주: "paju",
    안양: "anyang",
    성남: "seongnam",
    김제: "gimje",
    천안: "cheonan",
  },
];
// 지역 변환작업 끝

// icon 변환 작업 시작
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

// icon 변환 작업 끝

// 페이지 로드되면 start 영역 띄우고 가리기
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll(".start")[0].style.opacity = 0;
    document.querySelectorAll(".start")[0].style.zIndex = -1;
  }, 1200);
});

// start 끝
document.querySelectorAll(".inp")[0].addEventListener("keyup", (event) => {
  if (event.keycode == 13) {
    document.querySelectorAll(".btn").click();
  }
});
// back 버튼 시작
document.querySelectorAll(".back_btn")[0].addEventListener("click", () => {
  document.querySelectorAll(".inp")[0].value = "";
  document.querySelectorAll(".overlay")[0].style.background = "rgba(0,0,0,0.1)";
  console.log(1);
  document.querySelectorAll(
    ".wrap"
  )[0].style.backgroundImage = `URL("./images/bg.jpg")`;
  document.querySelectorAll(".main_con")[0].innerHTML = "";
  document.querySelectorAll(".main_wrap")[0].style.transform = "translateX(0)";
});

// back 버튼 끝

// 선택버튼 시작
document.querySelectorAll(".btn")[0].addEventListener("click", () => {
  console.log(2);
  var 입력한지역 = document.querySelector(".inp").value;
  // 지역 최소 한 글자 이상 입력하기
  if (document.querySelectorAll(".inp")[0].value.length >= 1) {
    console.log(지역변환[0]);
    console.log(지역변환[0][`${입력한지역}`]);
    console.log(Object.keys(지역변환[0]));
    var 지역찾기 = Object.keys(지역변환[0]).find((data) => {
      return data == document.querySelectorAll(".inp")[0].value;
    });
    console.log(지역찾기);
    // 지역을 찾았을 때 페이지 이동
    if (지역찾기 != undefined) {
      document.querySelectorAll(".main_wrap")[0].style.transform =
        "translateX(-100vw)";
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          지역변환[0][`${입력한지역}`] +
          "&appid=d6c5f8e1e444d2e64a89ae78ec503f6e&units=metric"
      )
        .then((res) => res.json())
        .then(function (data) {
          document.querySelectorAll(".loading")[0].style.display = "block";
          setTimeout(() => {
            document.querySelectorAll(".loading")[0].style.display = "none";
          }, 2000);

          console.log(data);
          console.log(data.weather);
          var icon = data.weather[0].icon;
          console.log(icon);
          var feel = data.main.feels_like;
          var wind = data.wind.speed;
          var humidity = data.main.humidity;
          var temp = Math.floor(data.main.temp) + "°";
          var city = data.name;

          var 템플릿 = `
          <div class="CurrIcon"></div>
          <!-- 현재 기온 -->
          <div class="sub_wrap">
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

          </div>
          <div class="bottom_con"></div>`;
          document.querySelectorAll(".main_con")[0].innerHTML = "";
          document
            .querySelectorAll(".main_con")[0]
            .insertAdjacentHTML("beforeend", 템플릿);
          // 날씨가 흐릴 때 백그라운드 어둡게
          if (
            icon == "04d" ||
            icon == "09d" ||
            icon == "10d" ||
            icon == "11d"
          ) {
            document.querySelectorAll(".overlay")[0].style.background =
              "rgba(0,0,0,0.5)";
            // 비가 올때 우산지참 메시지
            if (
              icon == "09d" ||
              icon == "09n" ||
              icon == "10d" ||
              icon == "10n"
            ) {
              document
                .querySelectorAll(".bottom_con")[0]
                .insertAdjacentHTML(
                  "beforeend",
                  `<p class="danger"><span><img src="./images/umbrella.png"></img></span>현재 비가 오고 있으니 우산 지참 바랍니다. </p>`
                );
            }
            // 백그라운드 흐린 배경으로
            document.querySelectorAll(
              ".wrap"
            )[0].style.backgroundImage = `URL("./images/rainWeather.jpg")`;
            // 날씨가 좋을때 맑은 배경으로
          } else if (icon == "01d" || icon == "02d" || icon == "03d") {
            console.log(1);
            document.querySelectorAll(
              ".wrap"
            )[0].style.backgroundImage = `URL("./images/sunWeather.jpg")`;
            // 어두울 때 저녁 배경으로
          } else if (
            icon == "01n" ||
            icon == "02n" ||
            icon == "03n" ||
            icon == "04n" ||
            icon == "09n" ||
            icon == "10n" ||
            icon == "11n" ||
            icon == "13n" ||
            icon == "50n"
          ) {
            document.querySelectorAll(
              ".wrap"
            )[0].style.backgroundImage = `URL("./images/moonWeather.jpg")`;
          }
          //  현재 날씨 데이터 바인딩
          document.querySelectorAll(".bg")[0].style.filter = "blur(2px)";

          document.querySelectorAll(".con_value")[1].innerHTML = wind;
          document.querySelectorAll(".con_value")[2].innerHTML = humidity;

          document.querySelectorAll(".con_value")[0].innerHTML = feel + "°";
          document.querySelectorAll(".CurrTemp")[0].innerHTML = temp;
          document.querySelectorAll(".City")[0].innerHTML = city;
          var 날씨아이콘 = `<img class="wea_image" src="./images/${weatherIcon[icon]}.png"><img/>`;

          document
            .querySelectorAll(".CurrIcon")[0]
            .insertAdjacentHTML("beforeend", 날씨아이콘);

          // 3시간 간격으로 금일 일기예보 받아오기 (fetch)
          fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
              지역변환[0][`${입력한지역}`] +
              "&appid=d6c5f8e1e444d2e64a89ae78ec503f6e&units=metric"
          )
            .then((res) => res.json())
            .then((data) => {
              // 금일 날짜 데이터 바인딩 시작
              let 날짜 = data.list[2].dt_txt;
              let 날짜2 = data.list[3].dt_txt;
              let 날짜3 = data.list[4].dt_txt;
              let 날짜4 = data.list[5].dt_txt;
              let 날짜5 = data.list[6].dt_txt;

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

              // 날짜 바인딩 끝

              //  금일 시간 바인딩 시작

              let 진짜날짜1 = data.list[2].dt_txt;
              let 진짜날짜2 = data.list[3].dt_txt;
              let 진짜날짜3 = data.list[4].dt_txt;
              let 진짜날짜4 = data.list[5].dt_txt;
              let 진짜날짜5 = data.list[6].dt_txt;

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

              // 시간 바인딩 끝

              // 날씨 아이콘 바인딩 시작

              let 날씨 = data.list[2].weather[0].icon;
              let 날씨2 = data.list[3].weather[0].icon;
              let 날씨3 = data.list[4].weather[0].icon;
              let 날씨4 = data.list[5].weather[0].icon;
              let 날씨5 = data.list[6].weather[0].icon;

              var 비오는날씨 = [날씨, 날씨2, 날씨3, 날씨4, 날씨5].findIndex(
                (data) => {
                  return data == "09d";
                }
              );
              var 비오는날씨2 = [날씨, 날씨2, 날씨3, 날씨4, 날씨5].findIndex(
                (data) => {
                  return data == "09n";
                }
              );
              var 비오는날씨3 = [날씨, 날씨2, 날씨3, 날씨4, 날씨5].findIndex(
                (data) => {
                  return data == "10d";
                }
              );
              var 비오는날씨4 = [날씨, 날씨2, 날씨3, 날씨4, 날씨5].findIndex(
                (data) => {
                  return data == "10n";
                }
              );

              // 현재 시간이 09:00 ~ 12:00 이고 금일 비소식이 있으면 우산 지참하라는 메시지 띄우기
              if (
                비오는날씨 >= 1 ||
                비오는날씨2 >= 1 ||
                비오는날씨3 >= 1 ||
                비오는날씨4 >= 1
              ) {
                if (날짜 == "09:00") {
                  document
                    .querySelectorAll(".bottom_con")[0]
                    .insertAdjacentHTML(
                      "beforeend",
                      `<p class="danger"><span><img src="./images/umbrella.png"></img></span>  금일 비가 올 예정이니 우산 꼭 챙기세요. </p>`
                    );
                }
              }
              // 우산 메시지 끝

              let 템플릿 = `<img src="./images/${weatherIcon[날씨]}.png"></img>`;

              let 템플릿2 = `<img src="./images/${weatherIcon[날씨2]}.png"></img>`;

              let 템플릿3 = `<img src="./images/${weatherIcon[날씨3]}.png"></img>`;

              let 템플릿4 = `<img src="./images/${weatherIcon[날씨4]}.png"></img>`;

              let 템플릿5 = `<img src="./images/${weatherIcon[날씨5]}.png"></img>`;

              // 날씨 바인딩 끝

              // 온도 바인딩 시작
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

              let 온도1 = data.list[2].main.temp;
              온도1 = 온도1.toFixed(0);
              document.querySelectorAll(".temp td")[1].innerHTML = `${온도1}°`;

              let 온도2 = data.list[3].main.temp;
              온도2 = 온도2.toFixed(0);
              document.querySelectorAll(".temp td")[2].innerHTML = `${온도2}°`;

              let 온도3 = data.list[4].main.temp;
              온도3 = 온도3.toFixed(0);
              document.querySelectorAll(".temp td")[3].innerHTML = `${온도3}°`;
              let 온도4 = data.list[5].main.temp;
              온도4 = 온도4.toFixed(0);
              document.querySelectorAll(".temp td")[4].innerHTML = `${온도4}°`;
              let 온도5 = data.list[6].main.temp;
              온도5 = 온도5.toFixed(0);
              document.querySelectorAll(".temp td")[5].innerHTML = `${온도5}°`;
              // 온도 바인딩 끝
            });
        });
      // 지역의 데이터가 없을 때
    } else {
      alert("해당 도시의 데이터가 없습니다.");
    }

    // 한 글자도 입력하지 않았을 때
  } else {
    alert("지역을 입력해주세요.");
  }
});
// 선택버튼 끝

// 엔터버튼
document.querySelectorAll(".inp")[0].addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    document.querySelectorAll(".btn")[0].click();
  }
});

// 엔터버튼 끝
