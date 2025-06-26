$(function () {
	$( "#medOrg" ).change(function(){
		var str = $( "#medOrg" ).val();
		switch (str) {
			case '1' :
				$("iframe").attr("src",'./mgp/map.html');
			break
			
			case '2' :
				$("iframe").attr("src",'./mgdp/map.html');
			break
			
			case '3' :
				$("iframe").attr("src",'./hp/map.html');
			break
			
			case '4' :
				$("iframe").attr("src",'./crbmkp/map.html');
			break
			
			case '5' :
				$("iframe").attr("src",'./crbkrasn/map.html');
			break
			
			case '6':
				$("iframe").attr("src",'./crbgiag/map.html');
			break
			
			case '7' :
				$("iframe").attr("src",'./crbshovg/map.html');
			break
			
			case '8' :
				$("iframe").attr("src",'./crbtacht/map.html');
			break
			
			case '9' :
				$("iframe").attr("src",'./crbkosh/map.html');
			break
			
			case '10' :
				$("iframe").attr("src",'./amb/map.html');
			break
			
			default:
			 $("iframe").attr("src",'default.html');
			
		}
	})
	
});
