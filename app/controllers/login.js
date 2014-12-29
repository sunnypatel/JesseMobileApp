//belongs to Dan

$.login.open();

function attemptLogin(){
	alert("attempting login");
	var username = $.login_phone_field.value;
	var password = $.login_password_field.value;
	var api = require("APIService");
	var cb = function(success){
		if(success == true)
			alert("user logged in");
		else
			alert("username or password was wrong");
		Ti.API.info(success);
	};
	api.login(username, password, cb);
};

// var api = require("APIService");

// api.login("2403570609","jesse2014", cb);
