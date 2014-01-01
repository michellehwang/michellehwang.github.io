
$(document).ready(function() {
	$('.nav').localScroll({duration:500});
    $('.medium').css('font-size',($(window).width()*.07)+'px');
    $('.large').css('font-size',($(window).width()*.15)+'px');
});

$(window).resize(function(){
    $('.medium').css('font-size',($(window).width()*.07)+'px');
    $('.large').css('font-size',($(window).width()*.15)+'px');
});

