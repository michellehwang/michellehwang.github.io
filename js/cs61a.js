$(window).bind("load", function() {
	console.log("I'm ready");
	$('.nav').localScroll({duration:500});
    

    $("button").click(function(evt){
    	var hello = evt.target;
    	$(evt.target).siblings().closest(".solution").toggleClass('hide');
    });
	hljs.initHighlightingOnLoad();
});