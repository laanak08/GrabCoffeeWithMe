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
		selectedTimes = [];
		$( ".selected").each(function(index) {
		  var timeframe = {};
		  var date =  $(this).closest('table').find('th').eq( $(this).index()).first().data("time");
		  // console.log(date);
		  var start =  $(this).parent().first().data("start");
		  var end =  $(this).parent().first().data("end");
		  date = moment(date);
		  // console.log("a");
		  var startDate = moment(new Date(date.year(), date.month(), date.day(), start, 0, 0)); 
		  var endDate = moment(new Date(date.year(), date.month(), date.day(), end, 0, 0)); 
		  // console.log("b");
		  timeframe.start = startDate.toString();
		  timeframe.end = endDate.toString();
		  selectedTimes.push(timeframe);
		});

		var data = {
			openTimeframes: selectedTimes
		};
		pathArray = window.location.pathname.split( '/' );
		// console.log("about to post");
		// console.log(data);
		var url = "/picktimes/"+ pathArray[3] + "/" + pathArray[2];
		// console.log(url);
		$.ajax({
            // url: "/meetup/"+ pathArray[2] + "/addtimeframes/" + pathArray[3],
            url: url,
            data: data,
            type: 'POST',
            success: function(){
                window.location = "/confirmation";
            }
        });
	});

});    
