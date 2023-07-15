
//tab_menu
$(".tab_btn_popular").click(function(){
    $(".popular_sub").stop().show();
    $(".recent_sub").stop().hide();
    return false;
});
$(".tab_btn_recent").click(function(){
    $(".recent_sub").stop().show();
    $(".popular_sub").stop().hide();
    return false;
});


$(".tab_btn>a").click(function(){
    $(".tab_btn>a").removeClass("on");
    $(this).addClass("on");
    return false;
});

$(".popular_sub").addClass("on");
$(".popular_sub").click(function(){
    $(".popular_sub").removeClass("on");
    $(this).addClass("on");
});

$(".tab_btn>a").eq(0).addClass("on");
$(".tab_btn>a").click(function(){
    $(".new_list li").removeClass("on");
    $(this).addClass("on");
});



//추천태그
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.3,
    spaceBetween: 5,
  });


  document.querySelector(".btn_close").addEventListener("click",
  function(){
      history.back();
      return false;
  });