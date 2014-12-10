

function LoginManager(){
	
	// Ti.include("network/NetworkManager.js");
	
	
	var win = Ti.UI.createWindow({
		title:"Jesse Login",
		url:"ui/login/loginPage.js"
	});
	win.open();
	
	// var win = Ti.UI.createView({
// 		
	// });
// 	
	// var usernameBox = Ti.UI.createTextArea({
		// height:"20%",
		// width:"80%",
		// hintText:"phone number",
		// center:true
	// });
// 	
	// var passwordBox = Ti.UI.createTextArea({
		// height:"20%",
		// width:"80%",
		// hintText:"phone number",
		// center:true
	// });
// 	
	// var item = Ti.UI.createView({
		// height:"15%",
		// width:"15%",
		// backgroundColor:'blue'
	// });	
	// return item;
// 	
	// item.addEventListener('click', function(e){
			// login("2403570609", "jesse2014");
	// });
// 	
	// win.add(usernameBox);
	// win.add(passwordBox);
	// win.add(item);
// 	
	// return win;
}