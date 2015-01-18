

//belongs to Dan
var loader;
var api = require("APIService");
var expandedRowIndex;
var rows;

function displayLoading(){
	$.menu.open();
	loader = Alloy.createController("activityIndicator").getView();
	$.menu.add(loader);
	api.getRestaurantsByGeolocation(geolocationLookupCallback);
}

var geolocationLookupCallback = function(locations){
	api.getRestaurantById(locations[0].id, idLookupCallback);
};

var idLookupCallback = function(restaurant){
	if(restaurant == false)
		return;
	$.menu.remove(loader);
	$.menu.title = restaurant.name;
	// Ti.API.info(JSON.stringify(restaurant.items));
	
	var funcs = {
		itemClicked:function(rowNum){
			Ti.API.info("row number "+rowNum+" activated");
			if(expandedRowIndex != rowNum && expandedRowIndex != null){
				rows[expandedRowIndex].forceCloseDesc();
			}
			expandedRowIndex = rowNum;
		}
	};
	
	var orderingService = require("OrderingService");
	orderingService.setRestaurant(restaurant);
	
	var items = restaurant.items;
	var i;
	rows = [];
	for(i = 0; i < items.length; i+=3){
		var row = Alloy.createController("menu/row");
		row.init(i/3, funcs);
		rows.push(row);
		var j;
		for(j = 0; j < 3; j++){
			if(i+j < items.length){
				row.addItem(items[i+j]);
				Ti.API.info("itemmenu: "+items[i+j].name);
			}
			else{
				row.addBlank();
			}
		}
		$.menu.add(row.getView());
	}
};

displayLoading();
