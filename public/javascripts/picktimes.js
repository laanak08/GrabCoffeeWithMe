$(function () {
	$(".timeAvailable").click(function () {
        // TODO change available and taken buttons
        $(this).toggleClass("selected");
        $(this).text("Available");
        //$(this).children("i").toggleClass("fa-check-circle-o").toggleClass("fa-circle-o");
	});
});    
