$(document).ready(function() {
	$("#links .resume").hover(
		function(event) { 
			$("#resume-span").removeClass("hide") },
		function(event) { 
			$("#resume-span").addClass("hide") }
	);
});