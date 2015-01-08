

exports.addItem = function(newItem){
	var item = Alloy.createController("menu/item");
	Ti.API.info("itemrow: "+newItem);
	item.populate(newItem);
	$.row_items_area.add(item.getView());
};

exports.addBlank = function(){
	var item = Alloy.createController("menu/blankItem");
	$.row_items_area.add(item.getView());
};
