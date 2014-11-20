function MenuItemBlankView(item){

	var buttonPad = Ti.UI.createView({
		width:"30%",
		height:"30%",
		top:3,
		bottom:3,
		left:3,
		right:3,
	});	
	
	var button = Ti.UI.createView({
		height:50,
		width:50,
	});	
	
	buttonPad.add(button);
	
	return buttonPad;
}