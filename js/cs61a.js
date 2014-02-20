$(document).ready(function() {
    $("button").click(function(evt){
    	var hello = evt.target;
    	$(evt.target).siblings().closest(".solution").toggleClass('hide');
    }); 
});