// active menu

$(window).scroll(function(){
  if ($(this).scrollTop()>3200) {
    $("#li_7").addClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").removeClass("active_link");
    $("#li_3").removeClass("active_link");
    $("#li_2").removeClass("active_link");
    $("#li_1").removeClass("active_link");
  }else if ($(this).scrollTop()>2010) {
    $("#li_7").removeClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").addClass("active_link");
    $("#li_3").removeClass("active_link");
    $("#li_2").removeClass("active_link");
    $("#li_1").removeClass("active_link");
  }else if ($(this).scrollTop()>1190) {
    $("#li_7").removeClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").removeClass("active_link");
    $("#li_3").addClass("active_link");
    $("#li_2").removeClass("active_link");
    $("#li_1").removeClass("active_link");
  }else if ($(this).scrollTop()>630) {
    $("#li_7").removeClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").removeClass("active_link");
    $("#li_3").removeClass("active_link");
    $("#li_2").addClass("active_link");
    $("#li_1").removeClass("active_link");
  }else{
  	$("#li_7").removeClass("active_link");
    $("#li_6").removeClass("active_link");
    $("#li_5").removeClass("active_link");
    $("#li_4").removeClass("active_link");
    $("#li_3").removeClass("active_link");
    $("#li_2").removeClass("active_link");
    $("#li_1").addClass("active_link");
  }
});

