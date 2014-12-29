//this class belongs to Dan
//this class handles all API calls to JesseMe.com and any others

//example syntax for calling functions in this class is below
/*
 * var api = require("APIService");
 * api.send("GET", url, data, callback);
 */

exports.send = function(command, url, data, callback){
	
	var client = Ti.Network.createHTTPClient({
		
	});
	//open the connection to the url designated
	client.open(command, url);
	client.send();
};
