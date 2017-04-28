// wait until DOM is loaded
$(document).ready(function(){
    console.log("DOM is ready");
// Intro Load
// var headers = new TimelineMax();
// headers.from(".first-name-top", 1, {css:{top:"-15px"}, ease:Power2.easeOut});
// headers.from(".last-name-left", 1, {css:{top:"-15px"}, ease:Power2.easeOut});
// headers.from(".last-name-right", 1, {css:{top:"-15px"}, ease:Power2.easeOut});
// headers.from(".site-name-bottom", 1, {css:{bottom:"-15px"}, ease:Power2.easeOut});
// headers.staggerFrom(".main-intro-text, .currently-working", 2.25, {css:{opacity:0, top:"15px"}, ease:Power2.easeOut});

// Menu Stagger

// Menu Hamburger 


var menu = new TimelineMax({paused:true, reversed:true});
menu.staggerTo(".nav-item", .5, {css:{opacity:"1", top:"0"}, ease:Power2.easeOut}, .25);

 var $hamburger = $(".hamburger");
  $hamburger.on('click', function(event) {
 menu.reversed() ? menu.play() : menu.reverse();	
  $hamburger.toggleClass("is-active");
  });

});


