console.log('\'Allo \'Allo!');

$(function() {
	console.log("ready");
	//picking times page
  	$(".timeAvailable").click(function(){
  		// TODO change available and taken buttons
		$(this).toggleClass("selected");
		$(this).text("Available");
		//$(this).children("i").toggleClass("fa-check-circle-o").toggleClass("fa-circle-o");


	});

	//marketplace complete purchase page
	$("complete-purchase").click(function(){
		var buyeremail, selleremail, buyername, sellername;
		buyeremail = $("#buyeremail").val();
		selleremail = $("#selleremail").val();
		buyername = $("#buyername").val();
		sellername = $("#sellername").val();

		//send off stuff to create meetup
		//get buyer link
		//send to confimation screen (with buyer link)
	});
});