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

//상세보기 스크롤
$(".pro_menu li a").eq(0).addClass("on");
$(".pro_menu li a").click(function(){
  $(".pro_menu li").removeClass("on");
  $(this).addClass("on");
});



$('.pro_menu>li>a').click(function () {
  let top = $(this).attr('href');
  let topPos = $(top).offset().top;
  // console.log(topPos)
  $('.pro_menu>li>a').removeClass('on')
  $(this).addClass('on')
  $('html,body').stop().animate({scrollTop:topPos},400)

  return false;
})

var swiper = new Swiper(".chair", {
    pagination: {
      el: ".swiper-pagination",
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true,
  });

  var swiper = new Swiper("#gallery_living", {
    slidesPerView: 2.3,
    spaceBetween: 10,
    
  });