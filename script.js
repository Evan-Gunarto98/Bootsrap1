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

function moveToPortofolio() {
  window.location.href = "./portofolio.html";
  
}




//fade in n out animation

$(window).on("load",function() { 
  window.scrollTo(0, 0);
  $("#profile").fadeIn(2000);
  // if ($('.navbar-toggler').is(':visible')) {
    $("#navmenu").mouseover(function() {
        $(this).css({'background-color':'rgba(0, 0, 0, 0.2)'
                    ,'transition':'background-color 1s ease',
                    'backdrop-filter': 'blur(10px)'});
    }).mouseout(function() {
      $(this).css('background-color','transparent');
    });




});

//color changing navbar


// $(window).scroll(function () { 
  
//     if ($('.navbar-toggler').is(':visible')) {
//     //  $('#navbar').css({'background-color':'#261C2C'},1000);
//     $('#navmenu').css('background-color', '#261C2C');


//     } else {
    
//     //  $('#navbar').css({"background-color":"transparent", "transition":"background-color 1s ease" });
//     $('#navmenu').css('background-color', 'transparent');
//     }
  
//     if ($(window).scrollTop() >= 50) {
//        $('#navmenu').css({'background-color':'#261C2C'},1000);
//       // $('#navmenu').css('background-color', '#261C2C');
  
  
//       } else {
      
//        $('#navmenu').css({"background-color":"transparent", "transition":"background-color 1s ease" });
//       // $('#navmenu').css('background-color', 'transparent');
//       }
  
// });

//navbar blur effect when moving

$(window).scroll(function () {
  if ($('.navbar-toggler').is(':visible')) {
      $('#navmenu').css({
          'background-color': 'rgba(0, 0, 0, 0.2)', 
          'backdrop-filter': 'blur(10px)',
          'transition':'background-color 1s ease'
          
      });
  } else {
      if ($(window).scrollTop() >= 50) {
          $('#navmenu').css({
              'background-color': 'rgba(0, 0, 0, 0.2)', 
              'backdrop-filter': 'blur(10px)' ,
              'transition':'background-color 1s ease'
          });
      } else {
          $('#navmenu').css({
              'background-color': 'transparent',
              'backdrop-filter': 'none' ,
              'transition':'background-color 1s ease'
          });
      }
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
