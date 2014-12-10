

function OrderingManager(){
	
	Ti.include('/Resources/ui/main/MenuItemCollectionView.js');

	var win = Ti.UI.createWindow({
		title:"Jesse Login",
	});
	
	var item = new MenuItemCollectionView(getMenuList());
	win.add(item);
	win.open();
}

function getMenuList(){
	var temp =  "{\"items\":["+
	"{\"name\":\"spagetti\",\"price\":\"16\"},"+
	"{\"name\":\"tea\",\"price\":\"4\"},"+
	"{\"name\":\"steak\",\"price\":\"18\"},"+
	"{\"name\":\"sushi\",\"price\":\"18\"},"+
	"{\"name\":\"rolls\",\"price\":\"2\"},"+
	"{\"name\":\"hoagie\",\"price\":\"6\"},"+
	"{\"name\":\"coffee\",\"price\":\"3\"},"+
	"{\"name\":\"shrimp\",\"price\":\"24\"}"+
	"]}";
	var data = JSON.parse(temp);
	return data;
}

