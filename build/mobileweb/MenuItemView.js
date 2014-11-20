

function MenuItemView(item, dataDisplayView){

	Ti.include("MenuItemCollectionView.js");
	
	
	var isActive = false;

	var buttonPad = Ti.UI.createView({
		width:"30%",
		height:"30%",
		top:3,
		bottom:0,
		left:3,
		right:3,
	});	
	var triangle = createTriangle();
	var button = Ti.UI.createView({
		height:"75%",
		width:"95%",
		backgroundColor:'blue'
	});	
	
	var text = Ti.UI.createTextField({
		value:item.name,
		height:50,
		width:Ti.UI.FILL,
		touchEnabled:false
	});
	
	button.add(text);
	
	var a = function activate(){
		isActive = true;
		buttonPad.add(triangle);
		dataDisplayView.add(Ti.UI.createTextField({
			value:"$"+item.price,
			height:150,
			width:Ti.UI.FILL,
			borderColor:'clear'
		}));
	};
	var b = function deactivate(){
		isActive = false;
		buttonPad.remove(triangle);
		dataDisplayView.removeAllChildren();
	};
	
	button.addEventListener('click', function(e){
		if(isActive == true){
			b();
		}
		else{
			setDeactivateCB(b);
			a();
		}
	});
	
	buttonPad.add(button);
	
	return buttonPad;
}

function createTriangle(){
	var triangle;
	triangle = Ti.UI.createView({
		height:35,
		width:75,
		bottom:0,
		backgroundImage:"triangle.png"
	});
	return triangle;
}
