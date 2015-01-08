

// $.item.setHeight($.item.getWidth());


exports.populate = function(newItem){
	// Ti.API.info("item: "+newItem);
	// Ti.API.info("item: "+JSON.parse(newItem));
	$.item_name.setValue(newItem.name);
};

 	 	