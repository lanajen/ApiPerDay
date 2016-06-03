
var city;

function weathering() {
	city = prompt("What Californian city would you like to look up?");
	city = city.replace(/ /g,"_");
    $.ajax({
	url : "http://api.wunderground.com/api/0def10027afaebb7/conditions/q/CA/"+city+".json",
	dataType : "jsonp",
	success : function(parsed_json) {
        var location = parsed_json['current_observation']['display_location']['city'];
        var temp_f = parsed_json['current_observation']['feelslike_f'];
		var look = parsed_json['current_observation']['weather'];
		alert("Right now in " + location + ", it is "+look+" and feels like " +temp_f+" degrees F.");
	}
});
}


// $(document).ready(function($) {
//   $.ajax({
//   url : "http://api.wunderground.com/api/0def10027afaebb7/conditions/q/CA/"+city+".json",
//   dataType : "jsonp",
//   success : function(parsed_json) {
//   var location = parsed_json['location']['city'];
//   var temp_f = parsed_json['current_observation']['feelslike_f'];
//   var look = parsed_json['current_observation']['weather'];
//   alert("Right now in " + location + ", it is "+look+" and feels like " + feelslike_f+" degrees F.");
//   }
//   });
// });
