$(function() {
	$.get( "http://api.adviceslip.com/advice", function( data ) {
	  data = JSON.parse(data);
	  $( "#advice-section" ).html(data.slip.advice);
	})
});
