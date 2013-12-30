// Scrolling
$(document).ready(function() {
	$('.nav').localScroll({duration:500});
});

$(window).resize(function(){
    $('.title').css('font-size',($(window).width()*.05)+'px');
    $('.large').css('font-size',($(window).width()*.15)+'px');
});
$(window).onload(function(){
    $('.title').css('font-size',($(window).width()*.05)+'px');
    $('.large').css('font-size',($(window).width()*.15)+'px');
});
