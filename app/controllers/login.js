//belongs to Dan

$.login.open();

function attemptLogin(){
	var username = $.login_phone_field.value;
	var password = $.login_password_field.value;
	var api = require("APIService");
	var cb = function(success){
		if(success == true)
			Alloy.createController("menu/menu");
		else
			alert("username or password was wrong");
		Ti.API.info(success);
	};
	api.login(username, password, cb);
};

//TODO: remove this. this is just to speed up testing	
//attemptLogin();
