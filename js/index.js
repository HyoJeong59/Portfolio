$(function(){
  // --- header
  $("header ul li").eq(0).on('click',function(e){
    e.preventDefault();
    $("html,body").stop().animate({"scrollTop":"700"}, 1000);
    $(".about").addClass("on");
    $(".site > div").removeClass("on");
  });

  $("header ul li").eq(1).on('click',function(e){
    e.preventDefault();
    $("html,body").stop().animate({"scrollTop":"1400"}, 1000);
    $(".about").removeClass("on");
    $(".genesis").addClass("on");
    $(".bigwave").addClass("on");
    $(".cdg").removeClass("on");
    $(".megabox").removeClass("on");
    $(".starwars").removeClass("on");
  });

  $("header ul li").eq(2).on('click',function(e){
    e.preventDefault();
    $("html,body").stop().animate({"scrollTop":"3400"}, 1000);
    $(".about").removeClass("on");
    $(".site > div").removeClass("on");
  });

  // --- main
  $(".main").addClass("on");

  function main_slide() { 
    $(".main ul").animate({marginTop:"-70px"}, 1500, "easeOutBounce", function(){
      $(".main ul li").eq(0).appendTo(".main ul");
      $(".main ul").css({marginTop:"0"});
    });
  }
  
  var interval = setInterval(main_slide, 3000);

  // --- scroll
  $("html, body").on("mousewheel scroll",function(e){
    var wheel = e.originalEvent.wheelDelta;
    var ht = $(window).scrollTop();
    console.log("ht:"+ht);
    if(wheel > 1) {
      if(ht >= 0 && ht <= 299){
        $(".about").removeClass("on");
        $(".site > div").removeClass("on");
      }
      else if(ht >= 300 && ht <= 1299){
        $(".about").addClass("on");
        $(".site > div").addClass("on");
      }
      else if(ht >= 1300 && ht <= 1799){
        $(".about").removeClass("on");
        $(".genesis").addClass("on");
        $(".bigwave").addClass("on");
        $(".cdg").addClass("on");
        $(".megabox").addClass("on");
        $(".starwars").addClass("on");
      }
      else if(ht >= 1800 && ht <= 2299){
        $(".about").removeClass("on");
        $(".genesis").removeClass("on");
        $(".bigwave").addClass("on");
        $(".cdg").addClass("on");
        $(".megabox").addClass("on");
        $(".starwars").addClass("on");
      }
      else if(ht >= 2300 && ht <= 2599){
        $(".about").removeClass("on");
        $(".genesis").removeClass("on");
        $(".bigwave").removeClass("on");
        $(".cdg").addClass("on");
        $(".megabox").addClass("on");
        $(".starwars").addClass("on");
      }
      else if(ht >= 2600 && ht <= 2999){
        $(".about").removeClass("on");
        $(".genesis").removeClass("on");
        $(".bigwave").removeClass("on");
        $(".cdg").removeClass("on");
        $(".megabox").addClass("on");
        $(".starwars").addClass("on");
      }
      else if(ht >= 3000 && ht <= 3300){
        $(".about").removeClass("on");
        $(".genesis").removeClass("on");
        $(".bigwave").removeClass("on");
        $(".cdg").removeClass("on");
        $(".megabox").removeClass("on");
        $(".starwars").addClass("on");
      }
    } else {
      if(ht >= 0 && ht <= 299){
        $(".about").removeClass("on");
        $(".site > div").removeClass("on");
      }
      else if(ht >= 300 && ht <= 799){
        $(".about").addClass("on");
        $(".site > div").removeClass("on");
      }
      else if(ht >= 800 && ht <= 999){
        $(".about").addClass("on");
        $(".genesis").addClass("on");
        $(".bigwave").removeClass("on");
        $(".cdg").removeClass("on");
        $(".megabox").removeClass("on");
        $(".starwars").removeClass("on");
      }
      else if(ht >= 1000 && ht <= 1299){
        $(".about").addClass("on");
        $(".genesis").addClass("on");
        $(".bigwave").addClass("on");
        $(".cdg").removeClass("on");
        $(".megabox").removeClass("on");
        $(".starwars").removeClass("on");
      }
      else if(ht >= 1300 && ht <= 1799){
        $(".about").removeClass("on");
        $(".genesis").addClass("on");
        $(".bigwave").addClass("on");
        $(".cdg").addClass("on");
        $(".megabox").removeClass("on");
        $(".starwars").removeClass("on");
      }
      else if(ht >= 1800 && ht <= 2199){
        $(".about").removeClass("on");
        $(".genesis").addClass("on");
        $(".bigwave").addClass("on");
        $(".cdg").addClass("on");
        $(".megabox").addClass("on");
        $(".starwars").removeClass("on");
      }
      else if(ht >= 2200 && ht <= 3399){
        $(".about").removeClass("on");
        $(".site > div").addClass("on");
      }
      else if(ht >= 3400 && ht <= 4000){
        $(".about").removeClass("on");
        $(".site > div").removeClass("on");
      }
    }


  });

});