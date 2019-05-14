$(document).ready(function(){
	var marqArea = $(".marq-line");
	var areaWidth = marqArea.parent().width();

	marqArea.each(function(){
		if($(this).width() > areaWidth){
			$(this).addClass("marq-animate");
		}
	});
});