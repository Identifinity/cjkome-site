$(window).scroll(() => {
  let hMain = $("#logo").height();
  let top = $(window).scrollTop();
  let opacity = $("#nav").css("opacity");

  if(top >= hMain)
    $("#nav").css({opacity: 1});
  else
    $("#nav").css({opacity: 0});
});
