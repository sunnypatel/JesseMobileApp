

// $.item.setHeight($.item.getWidth());
var onClick;
var item;

exports.populate = function(newItem){
	// Ti.API.info("item: "+newItem);
	// Ti.API.info("item: "+JSON.parse(newItem));
	item = newItem;
	Ti.API.info("item description called with "+JSON.stringify(newItem));
	// $.item_description_field.setValue(newItem.price);	
	// $.item_name.addEventListener('click', onClick);
};

exports.setOnClick = function(cb){
	onClick = cb;
};

function addOrder(){
	var orderingService = require("OrderingService");
	orderingService.addOrder(item);
}
