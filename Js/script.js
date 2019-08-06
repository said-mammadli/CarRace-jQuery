$(function(){
	
			$("#race").click(function(){
				
				function Check(){
					if(Complate==false){
						Complate=true;
					}else{
						place="second";
					}
		}
			
			// Find  Car width

			var CarWidth1 =$("#car1").width();
				var CarWidth2 =$("#car2").width();

		// Find stop places
				var WayWidth =$(window).width()-CarWidth1;
				var bottomWidth=$(window).width()-CarWidth2;

		// Find speed		
				var carTime1 = Math.floor((Math.random()*5000)+1);
				var carTime2 = Math.floor((Math.random()*5000)+1);

		//Place
				var place ="first";
				
				var  Complate=false;

				$("#car1").animate({
					left:WayWidth

				},carTime1,function(){
					Check();

					$("#span1").text("Finished in "+place+" place and clocked in at "+ carTime1+" milliseconds")
				});

				$("#car2").animate({
					left:bottomWidth

				},carTime2,function(){
					Check();

					$("#span2").text("Finished in "+place+" place and clocked in at "+ carTime2+" milliseconds")
				});
			});
	
	$("#reset").click(function(){
		$("#car1").css("left",0),
		$("#car2").css("left",0),
		$("#First").text(""),
		$("#Second").text("");
	});


	});	