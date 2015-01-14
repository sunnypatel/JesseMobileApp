

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

// exports.show = function(){
	// isVisible = true;
	// var barHeight = $.bar.height;
	// $.container.height = Ti.UI.FILL;
	// $.options.animate({
		// top: barHeight,
		// curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
	// });
// 	
	// return;
// };
