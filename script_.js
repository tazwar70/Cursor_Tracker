// JavaScript Document

jQuery(function($){
		var i=1;
		function rotate(){			
			setInterval(function(){
				$("#square1").css("transform","rotate(-"+i+"deg)");
				//$("#square1").css("transform","translate("+i+1+"px,"+i+1+"px)");
				i=i+1;
			},100);
		}
		//rotate();
		
		var canvasWidth=$('div.container').width();
		var canvasHeight=$('div.container').height();
		
		console.log("Height = "+canvasHeight+" Width = "+canvasWidth);
		$('div.container').css("border","1px solid #6699CC");
		
		
		function mousePointerLocation(){
			$(document).mousemove(function(e){
				$("#msg").html((e.pageX+", "+e.pageY));
			})
		}
		mousePointerLocation();
		
})