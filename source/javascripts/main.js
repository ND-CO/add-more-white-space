// wait until DOM is loaded
$(document).ready(function(){
    console.log("DOM is ready");

// Intro Load
var headers = new TimelineMax();
headers.from(".first-name-top", 1.5, {css:{top:"-15px"}, ease:Power2.easeOut}, .75);
headers.from(".last-name-left", 1.5, {css:{top:"-15px"}, ease:Power2.easeOut}, 1.25);
headers.from(".last-name-right", 1.5, {css:{top:"-15px"}, ease:Power2.easeOut}, 1.25 );
headers.from(".site-name-bottom", 2, {css:{bottom:"-15px"}, ease:Power2.easeOut}, .75);
headers.from(".menu-button", .8, {css: {opacity:"0"}, ease:Power2.easeOut}, .50);
headers.staggerFrom(".main-intro-text, .currently-working", 2.25, {css:{opacity:0, top:"15px"}, ease:Power2.easeOut});

// White Space
var white = new TimelineMax({paused:true, reversed: true});
white.to(".first-name-top", 1.5, {css:{top:"15"}, ease:Power2.easeOut}, .75);
white.to(".last-name-left", 1.5, {css:{top:"15"}, ease:Power2.easeOut}, 1.25);
white.to(".last-name-right", 1.5, {css:{top:"15"}, ease:Power2.easeOut}, 1.25 );
white.to(".main-intro-text", 2, {text:"I’m a multi-disciplinary designer and developer.", ease:Power4.easeInOut});
white.to(".currently-working", 2, {text:"I work with awesome people.", ease:Power4.easeInOut });
white.to(".more-white-space", 2, {text:"SHOW ME LESS WHITE SPACE", ease:Linear.easeOut});

var $more = $(".more-white-space")
    $more.on('click', function(event) {
    white.reversed() ? white.play() : white.reverse();
});



// Menu Hamburger 
var menu = new TimelineMax({paused:true, reversed:true});
menu.staggerTo(".nav-item", .5, {css:{opacity:"1", top:"0"}, ease:Power2.easeOut}, .10);

 var $hamburger = $(".hamburger");
  $hamburger.on('click', function(event) {
  menu.reversed() ? menu.play() : menu.reverse();	
  $hamburger.toggleClass("is-active");
});


/* global Pjax */
console.log("Document initialized:", window.location.href)

document.addEventListener("pjax:send", function() {
  console.log("Event: pjax:send", arguments)
})

document.addEventListener("pjax:complete", function() {
  console.log("Event: pjax:complete", arguments)
})

document.addEventListener("pjax:error", function() {
  console.log("Event: pjax:error", arguments)
})

document.addEventListener("pjax:success", function() {
  console.log("Event: pjax:success", arguments)
})

document.addEventListener("DOMContentLoaded", function() {
  var pjax = new Pjax({
    selectors: [".center-content"],
    // currentUrlFullReload: true,
  })
  console.log("Pjax initialized.", pjax)
})


});


