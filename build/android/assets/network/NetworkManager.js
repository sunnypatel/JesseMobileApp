

var token;

//TODO: enter production url
// var productionURL = "jesseme.com";
var stagingURL = "178.18.16.226:2730";
//the devURL is always changing based on what local address my laptop is given.
var devURL = "10.0.0.18:8123";
var url = devURL;

Ti.include("/Resources/state/StateManager.js");
Ti.include("/Resources/ui/main/OrderingManager.js");

function login(username, password){
	var json;
	var net = Ti.Network.createHTTPClient({
		//if the login was successful
		onload: function() {
			json = JSON.parse(this.responseText);
			token =  json.apiToken;
			Ti.API.info("new token saved: "+token);
			StateManager.getInstance().setState("ordering");
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
			    message:"Server Error :(",
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
		}
	});
	
	net.open('POST',url+"/user/login");
	var data = {
		'phone':username,
		'password':password
	};
	net.send(data);
}

function getRestaurants(long, lat){
	
	Ti.API.info("longtiude: "+JSON.stringify(long)+", latitude: "+lat);
	var json;
	var jsonString;
	var net = Ti.Network.createHTTPClient({
		onload: function() {
			jsonString = JSON.stringify(this.responseText);
			json = JSON.parse(this.responseText);
			populateList(json);
			Ti.API.info("restaurant response: "+jsonString);
		}
	});
	
	net.open('POST',url+"/restaurant/2");
	var data = {
		'apiToken':token
	};
	net.send(data);
}

