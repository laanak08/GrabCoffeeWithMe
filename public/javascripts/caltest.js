(function(){
	if(/picktimes/.exec(window.location.href) ){
		// calendarIncludes();
	}
}());

function calendarIncludes(){
	var jqUICss = document.createElement('link'),
		jqCalCss = document.createElement('link');
		
	jqUICss.rel='stylesheet';
	jqUICss.type='text/css';
	jqUICss.href='http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/smoothness/jquery-ui.css';
	
	jqCalCss.rel='stylesheet';
	jqCalCss.type='text/css';
	jqCalCss.href='stylesheets/jquery.weekcalendar.css';

	document.head.appendChild(jqUICss);
	document.head.appendChild(jqCalCss);

	var caljs = document.createElement('script'),
		inlineCalScript = document.createElement('script'),
		jq132 = document.createElement('script'),
		jq172 = document.createElement('script');

	inlineCalScript.src='javascripts/inlineCalScript.js';
	caljs.src='javascripts/jquery.weekcalendar.js';
	jq132.src='http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js';
	jq172.src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js';

	document.body.appendChild(inlineCalScript);
	document.body.appendChild(caljs);
	document.body.appendChild(jq132);
	document.body.appendChild(jq172);
}
