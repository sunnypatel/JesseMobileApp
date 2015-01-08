

//belongs to Dan

function displayLoading(){
	populate();
}
displayLoading();

function populate(){
	$.menu.open();
	$.menu.title="Olive Garden";
	$.menu.add(Alloy.createController("activityIndicator").getView());
}

// $.menu.add(Alloy.createController("menu/row").getView());
