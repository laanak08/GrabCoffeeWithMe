$(function () {
	doGeolocationStuff()
})

function doGeolocationStuff(){
	if (navigator.geolocation) {
	    var timeoutVal = 10 * 1000 * 1000;
	    navigator.geolocation.getCurrentPosition(
	      displayPosition, 
	      displayError,
	      { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
	    );
	  }
	  else {
	    alert("Geolocation is not supported by this browser");
	  }
	  function displayPosition(position) {
	    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	    var options = {
	      zoom: 15,
	      center: pos,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    var map = new google.maps.Map(document.getElementById("map"), options);
	    var marker = new google.maps.Marker({
	      position: pos,
	      map: map,
	      title: "User location"
	    });
	    var contentString = "<b>Timestamp:</b> " + parseTimestamp(position.timestamp) + "<br/><b>User location:</b> lat " + position.coords.latitude + ", long " + position.coords.longitude + ", accuracy " + position.coords.accuracy;
	    var infowindow = new google.maps.InfoWindow({
	      content: contentString
	    });
	    google.maps.event.addListener(marker, 'click', function() {
	      infowindow.open(map,marker);
	    });

	    // add location via Peerio API
	  //     request.put({
		 //    url: localServer + "meetup/"+ req.params.meetupId + "/addtimeframes/" + req.params.hashId,
		 //    json: true,
		 //    body: req.body
		 //  }, function(error, response, body) {
		 //      // console.log("body", body);
		 //      res.send(200, body);
		 //  });
		  data = {
		  	publicRef: window.location.pathname.split( '/' )[3],
		  	location: {
				"lat": position.coords.latitude,
				"long": position.coords.longitude
			}
		  }
		  $.ajax({
	            url: "/user/addlocation",
	            data: data,
	            type: 'POST',
	            success: function(){
	                window.location = "/picking_locations/" + window.location.pathname.split( '/' )[2] + "/" + window.location.pathname.split( '/' )[3];
	            }
	      });

	  }
	  function displayError(error) {
	    var errors = { 
	      1: 'Permission denied',
	      2: 'Position unavailable',
	      3: 'Request timeout'
	    };
	    alert("Error: " + errors[error.code]);
	  }
	  function parseTimestamp(timestamp) {
	    var d = new Date(timestamp);
	    var day = d.getDate();
	    var month = d.getMonth() + 1;
	    var year = d.getFullYear();
	    var hour = d.getHours();
	    var mins = d.getMinutes();
	    var secs = d.getSeconds();
	    var msec = d.getMilliseconds();
	    return day + "." + month + "." + year + " " + hour + ":" + mins + ":" + secs + "," + msec;
	  }
}



