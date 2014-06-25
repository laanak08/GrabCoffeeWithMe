console.log('\'Allo \'Allo!');

$(function() {
	console.log("Document Ready");
  	$(".timeAvailable").click(function(){
		$(this).toggleClass("selected");
		$(this).text("Available");
		//$(this).children("i").toggleClass("fa-check-circle-o").toggleClass("fa-circle-o");


	});

});