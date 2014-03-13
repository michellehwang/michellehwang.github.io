$(document).ready(function() {
	$('.nav').localScroll({duration:500});
    

    $("button").click(function(evt){
    	var hello = evt.target;
    	$(evt.target).siblings().closest(".solution").toggleClass('hide');
    });

    $("#tuples.topic").load("tuples.html"); 
    $("#control.topic").load("control.html"); 
    $("#envs.topic").load("envs.html"); 
    $("#lists.topic").load("lists.html"); 
});