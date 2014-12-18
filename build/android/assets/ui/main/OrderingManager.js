

function OrderingManager(){
	
	Ti.include('/Resources/ui/main/MenuItemCollectionView.js');
	Ti.include('/Resources/network/NetworkManager.js');

	var win = Ti.UI.createWindow({
		title:"restaurant",
	});
		
	if (Ti.Geolocation.locationServicesEnabled) {
		Ti.Geolocation.purpose = 'Get Current Location';
		Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
		Ti.Geolocation.distanceFilter = 100;
		Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
		Ti.Geolocation.addEventListener('location', function(e) {
			if (e.error) {
				alert("GPS is disabled, please enable it to find restaurants");
			} else {
				getRestaurants(e.coords.longitude, e.coords.latitude);
				Ti.API.info(JSON.stringify(e.coords));
			}
		});
	} else {
		alert('Please enable location services');
	}
	// var item = new MenuItemCollectionView(getMenuList());
// 	
	// win.add(item);
	// win.open();
}

function populateList(restaurant){
	win.setTitle(restaurant.name);
	Ti.API.info("restaurant name: "+restaurant.name);
	var item = new MenuItemCollectionView(restaurant);
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

