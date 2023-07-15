//메뉴
$(".left_menu_area").click(function(){
    $(".aside_wrap").stop().animate({left:0}, 200);
    $(".overlay").fadeIn(200);
});

$(".btn_close").click(function(){
    $(".aside_wrap").stop().animate({left:"-100%"},200);
    $(".overlay").fadeOut(200);
    return false;
});
$(".tit").click(function(){
    $(".tit").removeClass("on");
    $(this).addClass("on");
});

$(".gnb_list li").eq(0).addClass("on");
$(".gnb_list li").click(function(){
    $(".gnb_list li").removeClass("on");
    $(this).addClass("on");
});

//tab_menu
$(".gnb_tab_menu").click(function(){
    $(".gnb_list").stop().show();
    $(".customer_list").stop().hide();
});
$(".gnb_tab_customer").click(function(){
    $(".customer_list").stop().show();
    $(".gnb_list").stop().hide();
});



//visual slide
var swiper = new Swiper("#gallery_bath1", {
    pagination: {
      el: ".swiper-pagination",
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true,
});

$(".menu_list li").eq(0).addClass("on");
$(".menu_list li").click(function(){
  $(".menu_list li").removeClass("on");
  $(this).addClass("on");
});


//상세보기 스크롤
$(".menu_list li a").eq(0).addClass("on");
$(".menu_list li a").click(function(){
  $(".menu_list li").removeClass("on");
  $(this).addClass("on");
});



$('.menu_list>li>a').click(function () {
  let top = $(this).attr('href');
  let topPos = $(top).offset().top;
  // console.log(topPos)
  $('.menu_list>li>a').removeClass('on')
  $(this).addClass('on')
  $('html,body').stop().animate({scrollTop:topPos},400)

  return false;
})

//con4_룩 완성하기
var swiper = new Swiper("#gallery_bath2", {
  slidesPerView: 2.3,
  spaceBetween: 10,
  freeMode: true,
});