//this class belongs to Dan
//this class handles all API calls to JesseMe.com and any others

//example syntax for calling functions in this class is below
/*
 * var api = require("APIService");
 * api.login(username, password, callback);
 */

var url = "178.18.16.226:2730";
var token;

exports.login = function(username, password, callback){	
	var json;
	var client = Ti.Network.createHTTPClient({
		
		// timeout:5000, //5 second timeout
		
		//if the login was successful
		onload: function() {
			json = JSON.parse(this.responseText);
			token =  json.apiToken;
			Ti.API.info("new token saved: "+token);
			// StateManager.getInstance().setState("ordering");
			callback(true);
		},
		//if the login was unsuccessful
		onerror: function(e){
			Ti.API.debug(e.error);
			//connection failed
			if(this.status == 0){
				var toast = Ti.UI.createNotification({
			    message:"Connection to "+url+" refused",	
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
			}
			//TODOL when is this returned?
			//not found
			else if(this.status == 404){
				var toast = Ti.UI.createNotification({
			    message:"Invalid Username or Password",
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
			}
			//TODO: when is this code returned?
			else if(this.status == 401){
				var toast = Ti.UI.createNotification({
			    message:"Invalid Username or Password",
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
			}
			//server error response
			else if(this.status == 500){
				var toast = Ti.UI.createNotification({
			    message:"We have some technical difficulties :( try again later?)",
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
			}
			callback(false);
		}
	});
	//open the connection to the url designated
	client.open("POST", url+"/user/login");
	var data = {
		"phone":username,
		"password":password
	};
	client.send(data);
};

exports.getRestaurantByGeoLocation = function(callback){	
	var json;
	var client = Ti.Network.createHTTPClient({
		
		//if the login was successful
		onload: function() {
			json = JSON.parse(this.responseText);
			token =  json.apiToken;
			Ti.API.info("new token saved: "+token);
			// StateManager.getInstance().setState("ordering");
			callback(true);
		},
		//if the login was unsuccessful
		onerror: function(e){
			Ti.API.debug(e.error);
			//connection failed
			if(this.status == 0){
				var toast = Ti.UI.createNotification({
			    message:"Connection to "+url+" refused",	
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
			}
			//TODOL when is this returned?
			//not found
			else if(this.status == 404){
				var toast = Ti.UI.createNotification({
			    message:"Invalid Username or Password",
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
			}
			//TODO: when is this code returned?
			else if(this.status == 401){
				var toast = Ti.UI.createNotification({
			    message:"Invalid Username or Password",
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
			}
			//server error response
			else if(this.status == 500){
				var toast = Ti.UI.createNotification({
			    message:"We have some technical difficulties :( try again later?)",
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
			}
			callback(false);
		}
	});
	//open the connection to the url designated
	client.open("POST", url+"/user/login");
	var data = {
		"phone":username,
		"password":password
	};
	client.send(data);
};
