
var itemCount = 0;
var desc;
var activatedItem;

var funcs = {	
	itemClicked:function(itemNum){
		Ti.API.info("showing desc");
		if(desc != null){
			if(itemNum != activatedItem){
				$.row.remove(desc.getView());
			}else{
				$.row.remove(desc.getView());
				return;
				Ti.API.info("new item number "+itemNum+" matches activated item "+activatedItem);
			}
		}
		desc = Alloy.createController("menu/itemDescription");
		//desc must be populated
		$.row.add(desc.getView());
		activatedItem = itemNum;
		Ti.API.info("activated item is now: "+itemNum);
	},	
	// hideDesc:function(){
		// Ti.API.info("hidding desc");
		// $.row.remove(desc.getView());
		// activatedItem = -1;
	// }
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


