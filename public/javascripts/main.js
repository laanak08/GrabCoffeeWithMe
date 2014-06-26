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
	$("#complete-purchase").click(function(e){
		e.preventDefault();
		console.log("complete purchase clicked");
		var buyeremail, selleremail, buyername, sellername, data = [];
		// data.inviter = [];
		// data.invitee = [];
		data.inviteremail = $("#buyeremail").val();
		data.inviteeemail = $("#selleremail").val();
		data.inviterfirst = $("#buyername").val();
		data.inviteefirst = $("#sellername").val();
		PEERIO_API = "http://localhost:3001/";
		// get meetup and occasion stuff, if necessary
		// $.get( PEERIO_API + "meetup", function( data ) {
		//   // $( ".result" ).html( data );
		//   alert( JSON.stringify(data) );
		// });

		console.log("data", data);
		//send off stuff to create meetup
		// $.post( PEERIO_API + "meetup", function( data ) {
		//   // $( ".result" ).html( data );
		//   alert( JSON.stringify(data) );
		// });
		return $.ajax({
			    url: PEERIO_API + "meetup", 
			    // url: "/meetup", 
			    data: data,
			    // data: {"MyKey":"My Value"},
			    type: 'POST'
			    // contentType: 'application/json'
			});

		// setTimeout(function(){
		// 	$.ajax({
		// 	    url: PEERIO_API + "meetup", 
		// 	    // url: "/meetup", 
		// 	    data: data,
		// 	    // data: {"MyKey":"My Value"},
		// 	    type: 'POST'
		// 	    // contentType: 'application/json'
		// 	});
		// }
		// , 15000);

		//get buyer link


		//send to confimation screen (with buyer link)


		//prevent from submitting, submitting for some reason
		
		// false
	});
});