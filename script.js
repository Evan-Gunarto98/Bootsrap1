// navbar control 



function moveToAbout() {
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
    
}

function moveToContact() {
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  
}

function moveToSkill() {
  document.getElementById("skills").scrollIntoView({behavior:"smooth"});
  
}



//fade in n out animation

$(window).on("load",function() { 
  
  $("#profile").fadeIn(2000);
      
});

//color changing navbar


$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
  $('#navbar').css({'background-color':'#261C2C'},1000);

  } else {
  $('#navbar').css({"background-color":"transparent", "transition":"background-color 1s ease" });
  }
});

//sliding up animation

// $(document).ready(function(){

 

//   $('#slid').mouseenter(function(){
//     $('#slidd').animate({
//       height: 'toggle'
//     });
//   });
//   // $('#slid').mouseleave(function(){
//   //   $('#slidd').animate({
//   //     height: 'toggle'
//   //   });
//   // });
// });

//animation untuk nggeser object
//object position harus relative

$(window).on("load",function(){
  $("#navname").animate({ 
    left: "+=200px",
  }, 1000);
  $("#navmenu").animate({ 
    right: "+=200px",
  }, 1000);
  $("#profilename").animate({ 
    left: "+=500px",
  }, 1000);

});




$(window).on("load",function(){
  
  var i = 0;
  var txt = getElementById("#hometitle");
  var speed = 50;

  if (i < txt.length) {
    document.getElementById("#hometitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

});
//shake animation
// $(document).ready(function(){
//   $( "#navname" ).click(function() {
//     $( "#navname" ).effect( "shake" ,{direction: "left", times: 2, distance: 1}, 1000 );
//   });
// });

const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
  button.addEventListener('click', () => {
     var id = button.getAttribute("id");
    
     var layerClass = "." + id+ "-layer";
     var layers = document.querySelectorAll(layerClass);
     for (const layer of layers) {
       layer.classList.toggle("active");
     }
  });
}
