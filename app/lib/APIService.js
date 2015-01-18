 //this class belongs to Dan
//this class handles all API calls to JesseMe.com and any others

//example syntax for calling functions in this class is below
/*
 * var api = require("APIService");
 * api.login(username, password, callback);
 */

var url = "http://178.18.16.226:2730";
var token;

exports.login = function(username, password, callback){	
	var json;

	var client = Ti.Network.createHTTPClient();
		//open the connection to the url designated
	client.open("POST", url+"/user/login");
	client.setRequestHeader('Content-Type', 'application/json');
	
	// **************************************************
	// *     IMPORTANT TO USE JSON.STRINGIFY FOR iOS    *
	// **************************************************
	client.send(JSON.stringify({
		"phone": "2154590332",
		"password": "password"
	}));
	
	//if the login was successful
	client.onload = function() {
		Ti.API.debug('In onLoad');
		json = JSON.parse(this.responseText);
		token =  json.apiToken;
		Ti.API.info("new token saved: "+token);
		callback(true);
	};
		//if the login was unsuccessful
	client.onerror = function(e) {
		Ti.API.debug(e.error);
		//connection failed
		if(this.status == 0){
			Ti.API.debug(this);
			alert("Connection to "+url+" refused");
		}
		//TODOL when is this returned?
		//not found
		else if(this.status == 404){
			alert("Invalid Phone/Password combo");
		}
		//TODO: when is this code returned?
		else if(this.status == 401){
			alert("Invalid Phone/Password combo");
		}
		//server error response
		else if(this.status == 500){
		    alert("We're having technical difficulties");
		}
		callback(false);
	};
};

exports.getRestaurantsByGeolocation = function(callback){	
	var json;
	var locationService = require("LocationService");
	var location = locationService.getLocation();
	var client = Ti.Network.createHTTPClient({
		
		//if the login was successful
		onload: function() {
			json = JSON.parse(this.responseText);
			callback(json);
		},
		//if the login was unsuccessful
		onerror: function(e){
			Ti.API.debug(e.error);
			//connection failed
			if(this.status == 0){
				alert('Connection to "+url+" refused"');
			}
			//TODO when is this returned?
			//not found
			else if(this.status == 404){
				alert('Invalid Phone/Password combo')
			}
			//TODO: when is this code returned?
			else if(this.status == 401){
				var toast = Ti.UI.createNotification({
			    message:"",
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
				alert('Invalid Phone/Password combo')
			}
			//server error response
			else if(this.status == 500){
				alert("We're having technical difficulties");
			}
			callback(false);
		}
	});
	//open the connection to the url designated
	client.open("POST", url+"/location/near");
	var data = {
		"latitude":location.latitude,
		"longitude":location.longitude
	};
	client.send(JSON.stringify(data));
};


exports.getRestaurantById = function(id, callback){	
	var json;
	var client = Ti.Network.createHTTPClient({
		
		//if the login was successful
		onload: function() {
			json = JSON.parse(this.responseText);
			callback(json);
		},
		//if the login was unsuccessful
		onerror: function(e){
			Ti.API.debug(e.error);
			//connection failed
			if(this.status == 0){
				alert('Connection refused');
			}
			//TODO when is this returned?
			//not found
			else if(this.status == 404){
				alert('Invalid Phone/Password combo');
			}
			//TODO: when is this code returned?
			else if(this.status == 401){
				alert('Invalid Phone/Password combo');
			}
			//server error response
			else if(this.status == 500){
				alert("We're having technical difficulties");
			}
			callback(false);
		}
	});
	//open the connection to the url designated
	client.open("POST", url+"/restaurant/"+id);
	client.send();
};

exports.sendOrder = function(orderModel, callback){
	var json;
	var client = Ti.Network.createHTTPClient({
		
		//if the login was successful
		onload: function() {
			json = JSON.parse(this.responseText);
			callback(json);
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
			//TODO when is this returned?
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
	client.open("POST", url+"/order");
	//TODO: should be checking if it is paid yet, or should this even be a field? (it should be if they dont have to enter their info)
	//TODO: what does confirmed mean?
	var myOrder = orderModel.getOrder();
	var orderingService = require("OrderingService");
	
	var data = {
		"apiToken":token,
		"totalSale":myOrder.totalSale,
		"totalSalesTax":myOrder.totalSalesTax,
		"paid":myOrder.paid,
		"confirmed":myOrder.confirmed,
		"restaurant":orderingService.getRestaurant().id,
		"items":myOrder.items
	};
	
	Ti.API.info("this is the order im sending: "+JSON.stringify(data));
	
	client.send(JSON.stringify(data));
};
