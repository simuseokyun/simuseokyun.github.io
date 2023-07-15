//nav
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
$(".sub").click(function(){
    $(".sub").removeClass("on");
    $(this).addClass("on");
});
$(".gnb_list li").eq(0).addClass("on");
$(".gnb_list li").click(function(){
    $(".gnb_list li").removeClass("on");
    $(this).addClass("on");
});
$(".customer").hide();
$(".menu").click(function(){
    $(".customer").hide();
    $(".gnb_list").show();
});
$(".center").click(function(){
    $(".gnb_list").hide();
    $(".customer").show();
});

  //sub2 visual
  var swiper = new Swiper(".mySwiper6", {
    pagination: {
      el: ".swiper-pagination",
    },
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    loop: true,
  });

  //sub2 look
var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    pagination: {
      // el: ".swiper-pagination",
      clickable: true,
    },
  });

  
$(".tab_list li").eq(0).addClass("on");
$(".tab_list li").click(function(){
  $(".tab_list li").removeClass("on");
  $(this).addClass("on");
});


//상세보기 스크롤
$(".tab_list li a").eq(0).addClass("on");
$(".tab_list li a").click(function(){
  $(".tab_list li").removeClass("on");
  $(this).addClass("on");
});



$('.tab_list>li>a').click(function () {
  let top = $(this).attr('href');
  let topPos = $(top).offset().top;
  // console.log(topPos)
  $('.tab_list>li>a').removeClass('on')
  $(this).addClass('on')
  $('html,body').stop().animate({scrollTop:topPos},400)

  return false;
})