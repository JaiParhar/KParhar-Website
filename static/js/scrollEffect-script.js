//Constants
var scrollSpeed = 750;

$(document).ready(function(){
	$("#Logo").click(function(){ scrollTo("#landingScreen", scrollSpeed); });
	$("#home-link").click(function(){ scrollTo("#landingScreen", scrollSpeed); });
	$("#about-link").click(function(){ scrollTo("#about", scrollSpeed); });
	$("#testimonials-link").click(function(){ scrollTo("#testimonials", scrollSpeed); });
	$("#projects-link").click(function(){ scrollTo("#projects", scrollSpeed); });
	$("#contact-link").click(function(){ scrollTo("#contact", scrollSpeed); });
	
	$("#subtextButton").click(function(){ scrollTo("#about", scrollSpeed); });
});

function scrollTo(divID, speed) {
	$('html, body').animate({
        scrollTop: $(divID).offset().top - $("#navbar").height()
    }, speed, "easeInOutCubic");
}