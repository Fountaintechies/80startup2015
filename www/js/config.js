if (document.location.hostname == "localhost" || document.location.hostname == "icefire.in" ){
	/*var base = window.location.origin;
    var baseURL = base +"/api/";
    var uploadUrl = base +"/uploads/";
*/
var baseURL="http://localhost:3000/api";
} else {

	var baseURL="http://localhost:3000/api";
	var uploadUrl = "http://node.fountaintechies.com:9000/uploads/";
} 
