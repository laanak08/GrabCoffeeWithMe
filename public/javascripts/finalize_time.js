$(function () {	
	$('#accept-time').appendDtpicker({
          "autodateOnStart": false
    });

    $('#add-geo').click(function (e) {
    	// TODO this should probably not be a global var, but we need value for finalize screen
    	// console.log("add geo");
        // window.selectedTime = $('#accept-time').val();
        data = {
        	time: $('#accept-time').val(),
        	meetupId: window.location.pathname.split( '/' )[2],
        	publicRef: window.location.pathname.split( '/' )[3]
        }
        $.ajax({
            url: "/finalize_time",
            data: data,
            type: 'POST',
            success: function(){
                // window.location = "/check_email";
                // anchor is already going somewhere
            }
        });
    });

});