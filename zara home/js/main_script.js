//nav
$(".left_menu_area").click(function () {
  $(".aside_wrap").stop().animate({ left: 0 }, 200);
  $(".overlay").fadeIn(200);
});
$(".btn_close").click(function () {
  $(".aside_wrap").stop().animate({ left: "-100%" }, 200);
  $(".overlay").fadeOut(200);
  return false;
});
$(".tit").click(function () {
  $(".tit").removeClass("on");
  $(this).addClass("on");
});
$(".sub").click(function () {
  $(".sub").removeClass("on");
  $(this).addClass("on");
});
$(".gnb_list li").eq(0).addClass("on");
$(".gnb_list li").click(function () {
  $(".gnb_list li").removeClass("on");
  $(this).addClass("on");
});
$(".customer").hide();
$(".menu").click(function () {
  $(".customer").hide();
  $(".gnb_list").show();
});
$(".center").click(function () {
  $(".gnb_list").hide();
  $(".customer").show();
});

//visual slide
var swiper = new Swiper("#gallery1", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

//new
$(".new_list li").click(function () {
  $(".new_list li").removeClass("on");
  $(this).addClass("on");
  return false;
});
$(".new_list li").eq(0).addClass("on");
$(".new_list li").click(function () {
  $(".new_list li").removeClass("on");
  $(this).addClass("on");
  return false;
});

//new slide
var swiper2 = new Swiper("#gallery_main_total", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper("#gallery_main_bed", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper("#gallery_main_living", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper("#gallery_main_kit", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".tab1").css({ display: "block" });
$(".new_list li")
  .eq(0)
  .click(function () {
    $(".tab").css({ display: "none" });
    $(".tab1").css({ display: "block" });
  });
$(".new_list li")
  .eq(1)
  .click(function () {
    $(".tab").css({ display: "none" });
    $(".tab2").css({ display: "block" });
  });
$(".new_list li")
  .eq(2)
  .click(function () {
    $(".tab").css({ display: "none" });
    $(".tab3").css({ display: "block" });
  });
$(".new_list li")
  .eq(3)
  .click(function () {
    $(".tab").css({ display: "none" });
    $(".tab4").css({ display: "block" });
  });

//best review slide
var swiper3 = new Swiper("#gallery3", {
  slidesPerView: 1.4,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

//recipe slide
var swiper = new Swiper("#gallery4", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//top button
$(window).scroll(function () {
  if ($(this).scrollTop() >= 200) {
    $(".btn_top").addClass("on");
  } else {
    $(".btn_top").removeClass("on");
  }
});

$(".btn_top").click(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
