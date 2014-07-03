$(function () {
	$(".timeAvailable").click(function () {
        $(this).toggleClass("selected");
        if ( $(this).hasClass("selected") ) {
        	$(this).text("Available");
        }else{
        	$(this).text("Unavailable");
        }
	});

	var selectedTimes = [];

	$(".pick-times").click(function () {
		meetupId = "12345";
		userId = "90324";
		selectedTimes = [];
		$( ".selected").each(function(index) {
		  var timeframe = {};
		  var date =  $(this).closest('table').find('th').eq( $(this).index()).first().data("time");
		  // console.log(date);
		  var start =  $(this).parent().first().data("start");
		  var end =  $(this).parent().first().data("end");
		  date = moment(date);
		  var startDate = moment(new Date(date.year(), date.month(), date.day(), start, 0, 0)); 
		  var endDate = moment(new Date(date.year(), date.month(), date.day(), end, 0, 0)); 
		  timeframe.start = startDate;
		  timeframe.end = endDate;
		  selectedTimes.push(data);
		});

		var data = {
			openTimeframes: selectedTimes
		};

		$.ajax({
            url: "/meetup/"+ meetupId + "/addtimeframes/" + userId,
            data: data,
            type: 'PUT',
            success: function(){
                window.location = "/check_email";
            }
        });
	});

});    
