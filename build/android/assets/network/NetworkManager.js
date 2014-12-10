var token;

//TODO: enter production url
// var productionURL = "jesseme.com";
var stagingURL = "178.18.16.226:2730";
var devURL = "10.0.0.4:8123";
var url = devURL;

Ti.include("/Resources/state/StateManager.js");

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
			//not found
			if(this.status == 404){
				var toast = Ti.UI.createNotification({
			    message:"Invalid Username or Password",
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
			}
			//bad request response
			else if(this.status == 400){
				var toast = Ti.UI.createNotification({
			    message:"Invalid Username or Password",
			    duration: Ti.UI.NOTIFICATION_DURATION_LONG
				});
				toast.show();
			}
			//TODO: check with sunny if forbidden can happen during login
			//forbidden response
			else if(this.status == 403){
				var toast = Ti.UI.createNotification({
			    message:"Forbidden",
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

function getRestaurants(){
	
	var json;
	var net = Ti.Network.createHTTPClient({
		onload: function() {
			json = JSON.parse(this.responseText);
			// loginResponse(json);
		}
	});
	
	net.open('POST',url+"/user/login");
	var data = {
		'phone':username,
		'password':password
	};
	net.send(data);
}

