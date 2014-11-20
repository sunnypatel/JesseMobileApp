 // this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Ti.include('MenuItemCollectionView.js');

// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    title:'Olive Garden',
    height:Ti.UI.FILL,
    width:Ti.UI.FILL,
    backgroundColor:'#fff'
});

function setState(state){
	if(state == "login"){
		
	}else if(state == "ordering"){
		setStateOrdering();
	}
}

var item = new MenuItemCollectionView(getMenuList());
win.add(item);

win.open();

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
