$(function () {
    $("#finalize").click(function (e) {
    	if ($(".location.selected").length == 1){
    		data = {
    			publicRef: window.location.pathname.split( '/' )[3],
    			meetupId: window.location.pathname.split( '/' )[2],
    			locationId:$(".location.selected").first().attr("id")
    		}
	        $.ajax({
	            url: "/finalize_time",
	            data: data,
	            type: 'POST',
	            success: function(){
	                // window.location = "/check_email";
	                // anchor is already going to finalize confirmation
	            }
	        });
    	}else{
    		e.preventDefault();
    		alert("Select one location");
    	}
    });
    $(".location").click(function (e) {
    	$(this).toggleClass("selected");
    });
});