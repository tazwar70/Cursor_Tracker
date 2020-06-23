// JavaScript Document

jQuery(function($){	
		var mousePosition=[];
		var i=0;
		function mousePointerLocation(){
			var i=0;
			$(document).mousemove(function(e){
				mousePosition[i]=e.pageX+","+e.pageY;
				//console.log(mousePosition[i].split(","));
				i=i+1;
			})
			return mousePosition;
		}
		
		$("#rec").click(function(){
			mousePointerLocation();
		});
		
		$("#play").click(function(){
			callAfterTimeOut();
		});	
		
		
		function callAfterTimeOut()
			{
				var currentPoint=mousePosition[i].split(",");
				if(i>=(mousePosition.length))
				{
					return;
				}else{
				$("#node").css("margin-left",currentPoint[0]+"px");
				$("#node").css("margin-top",currentPoint[1]+"px");
				setTimeout(function(){
					i++;
					callAfterTimeOut();
					},50);
				}
			}
				
		
})