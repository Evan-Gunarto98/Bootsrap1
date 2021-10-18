// navbar control 


function moveToAbout() {
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
    
}

function moveToContact() {
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  
}



//fade in n out animation

$(window).on("load",function() { 
  
  $("#profile").fadeIn(2000);
      
});

//color changing navbar


$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
  $('#navbar').css({'background-color':'black'},1000);
  } else {
  $('#navbar').css({"background-color":"transparent", "transition":"background-color 0.8s ease" });
  }
});

//star animation

