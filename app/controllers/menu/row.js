
var itemCount = 0;
var desc;

var funcs = {	
	showDesc:function(itemNum){
		Ti.API.info("showing desc");
		desc = Alloy.createController("menu/itemDescription");
		//desc must be populated
		$.row.add(desc.getView());
	},	
	hideDesc:function(itemNum){
		Ti.API.info("hidding desc");
		$.row.remove(desc.getView());
	}
};
	
exports.addItem = function(newItem){
	itemCount = itemCount+1;
	var item = Alloy.createController("menu/item");
	Ti.API.info("itemrow: "+newItem);
	item.populate(newItem, itemCount, funcs);
	$.row_items_area.add(item.getView());
	// $.row_description_area.add(Alloy.createController("menu/item").getView());
};

exports.addBlank = function(){
	var item = Alloy.createController("menu/blankItem");
	$.row_items_area.add(item.getView());
};

