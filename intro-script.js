//Constants
var blinkTimeMs = 500;
var typeSpeed = 50; //Default is 100
var introFadeSpeed = 400;
var contentFadeSpeed = 2500; //Default is 2500

$(document).ready(function(){
	$("#intro").fadeTo(0, 1);
	$("#content").fadeTo(0, 0);
	
	setInterval ('blink()', blinkTimeMs);
	
	typeEffect("#introTypeEffect", "KParhar.exe<br>Starting program...<br>", typeSpeed, function() {
		$("#intro").delay(100).fadeOut(introFadeSpeed);
		$("#content").fadeTo(contentFadeSpeed, 1);
		
		$('html, body').animate({ scrollTop: 0 }, 0);
		
		var vpH = $(window).height() - $("#navbar").height();
		$("#about").css("height", vpH + "px");
		$("#testimonials").css("height", vpH + "px");
		$("#projects").css("height", vpH + "px");
		$("#contact").css("height", vpH + "px");
	});
});

function blink() {
	$("#intro-selector").toggle();
}

var captionLength = 0;
function typeEffect(id, value, speed, callback) {
	$(id).html(value.substr(0, captionLength++));
	
	if(captionLength < value.length+1) {
        setTimeout('typeEffect("' + id + '", "' + value + '", ' + speed + ', ' + callback + ')', speed);
    } else {
        captionLength = 0;
        value = '';
		callback();
    }
}