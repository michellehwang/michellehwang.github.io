$(window).load(function() {
    // var _in = document.getElementById('hack');
    // _in.innerHTML = "<script src=\"../js/highlight.pack.js\"></script><script>hljs.initHighlighting();</script>";

    // $("span#hack").html("<script src=\"../js/highlight.pack.js\"></script><script>hljs.initHighlighting();</script><script>alert(\"hi\")</script>")
	$('.nav').localScroll({duration:500});
    
    $("button").click(function(evt){
    	var hello = evt.target;
    	$(evt.target).siblings().closest(".solution").slideToggle('hide');
    });
	hljs.initHighlighting();
});