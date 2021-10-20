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

//sliding up animation

$(document).ready(function(){

 

  $('#slid').mouseenter(function(){
    $('#slidd').animate({
      height: 'toggle'
    });
  });
  // $('#slid').mouseleave(function(){
  //   $('#slidd').animate({
  //     height: 'toggle'
  //   });
  // });
});

//animation untuk nggeser object
//object position harus relative

$(window).on("load",function(){
  $("#navname").animate({ 
    left: "+=200px",
  }, 1000);
});

//shake animation
$(document).ready(function(){
  $( "#navname" ).click(function() {
    $( "#navname" ).effect( "shake" ,{direction: "left", times: 2, distance: 1}, 1000 );
  });
});
