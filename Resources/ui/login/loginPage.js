
var win = Titanium.UI.currentWindow;
 
var username = Titanium.UI.createTextField({
    color:'#336699',
    top:10,
    left:10,
    width:"90%",
    height:80,
    hintText:'Phone Number',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(username);
 
var password = Titanium.UI.createTextField({
    color:'#336699',
    top:100,
    left:10,
    width:"90%",
    height:80,
    hintText:'Password',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(password);
 
var loginBtn = Titanium.UI.createButton({
    title:'Login',
    top:250,
    width:"90%",
    height:60,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});

Ti.include("/Resources/network/NetworkManager.js");

loginBtn.addEventListener('click', function(e){
	tryLogin(username.value, password.value);
});

function tryLogin(username, password){
	login(username, password);
}

win.add(loginBtn);



