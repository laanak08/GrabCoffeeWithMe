console.log('\'Allo \'Allo!');

$(function() {
	console.log("Document Ready");
  	$(".timeAvailable").click(function(){
		$(this).addClass("selected");
		$(this).text("Available");

	});

});