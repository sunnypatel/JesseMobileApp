

// $.item.setHeight($.item.getWidth());
var onClick;

exports.populate = function(newItem){
	// Ti.API.info("item: "+newItem);
	// Ti.API.info("item: "+JSON.parse(newItem));
	$.item_description_field.setValue(newItem.price);	
	$.item_name.addEventListener('click', onClick);
};

exports.setOnClick = function(cb){
	onClick = cb;
};
