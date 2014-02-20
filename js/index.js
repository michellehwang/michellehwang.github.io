
$(document).ready(function() {
	$('.nav').localScroll({duration:500});
    $('.small').css('font-size',($(window).width()*.009)+'px');
    $('.medium').css('font-size',($(window).width()*.07)+'px');
    $('.large').css('font-size',($(window).width()*.15)+'px');

	$(".semester").on("click", function(event) {
		event.preventDefault();
		var target = event.target;
		$(target).addClass("bold");
		$(target).siblings().removeClass("bold");

		var semester = $(target).attr('id');
		$("#" + semester + "-info").removeClass("hide");
		$("#" + semester + "-info").siblings().addClass("hide");
	});

	$(".semester").hover(
		function(event) { $(event.target).addClass("hover-bold") },
		function(event) { $(event.target).removeClass("hover-bold") }
	);

	$("#arrow a").hover(
		function(event) { 
			$("#scroll").removeClass("hide") },
		function(event) { 
			$("#scroll").addClass("hide") }
	);


});

$(window).resize(function(){
    $('.small').css('font-size',(Math.min(100, $(window).width()*.009))+'px');
    $('.medium').css('font-size',($(window).width()*.07)+'px');
    $('.large').css('font-size',($(window).width()*.15)+'px');
});
