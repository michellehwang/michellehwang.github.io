
$(document).ready(function() {
	$('.nav').localScroll({duration:500});
    $('.small').css('font-size',($(window).width()*.009)+'px');
    $('.medium').css('font-size',($(window).width()*.07)+'px');
    $('.large').css('font-size',($(window).width()*.15)+'px');
});

$(window).resize(function(){
    $('.small').css('font-size',(Math.min(100, $(window).width()*.009))+'px');
    $('.medium').css('font-size',($(window).width()*.07)+'px');
    $('.large').css('font-size',($(window).width()*.15)+'px');
});	

