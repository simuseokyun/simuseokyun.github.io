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

//heart
$(".heart").click(function(){
    $(this).toggleClass("on");
    return false;
});

 //sub1 menu
 var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4.5,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
