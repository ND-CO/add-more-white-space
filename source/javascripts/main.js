// wait until DOM is loaded
$(document).ready(function(){
    console.log("DOM is ready");
// Intro Load
var headers = new TimelineMax();
headers.from(".slide-in", 1.5, {css:{top:"-20px"}, ease:Power2.easeOut}, .75);
headers.from(".site-name-bottom", 2, {css:{bottom:"-15px"}, ease:Power2.easeOut}, .75);
headers.from(".menu-button", .8, {css: {opacity:"0"}, ease:Power2.easeOut}, .50);
headers.staggerFrom(".main-intro-text, .currently-working", 2.25, {css:{opacity:0, top:"15px"}, ease:Power2.easeOut});


// White Space
var white = new TimelineMax({paused:true, reversed: true});
white.to(".main-intro-text", 2, {text:"I’m a multi-disciplinary designer and developer.", ease:Power4.easeInOut});
white.to(".currently-working", 2, {text:"I work with awesome people.", ease:Power4.easeInOut });
white.to(".more-white-space", 2, {text:"SHOW ME LESS WHITE SPACE", ease:Linear.easeOut});
white.to(".slide-in", 1.5, {css:{top:"15"}, ease:Power2.easeOut}, .75);

var $more = $(".more-white-space")
    $more.on('click', function(event) {
    white.reversed() ? white.play() : white.reverse();
});



// Menu Hamburger 
var menu = new TimelineMax({paused:true, reversed:true});
menu.staggerTo(".nav-item", .5, {css:{opacity:"1", top:"0"}, ease:Power2.easeOut}, .10);

 var $hamburger = $(".hamburger, .nav-item");
  $hamburger.on('click', function(event) {
  $hamburger.toggleClass("is-active");
  menu.reversed() ? menu.play() : menu.reverse();	
});


// TweenLite.set(".left", {rotation:-90});

$(".nav-item").each(function(index, element){
    $(this).click(function(){
      TweenMax.to(".top .inner", 1.5, {y:"-16" * (index) + "px", ease:Power2.easeOut1});
      TweenMax.to(".left .inner", 1.5, {y:"-16" * (index) + "px", ease:Power2.easeOut1});
       TweenMax.to(".right .inner", 1.5, {y:"-16" * (index) + "px", ease:Power2.easeOut1});
      TweenMax.to(".bottom .inner", 1.5, {y:"-16" * (index) + "px", ease:Power2.easeOut1});
    })
}) 
		

});


