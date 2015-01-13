
var itemCount = 0;
var desc;
var activatedItem;
var rowNum;
var parent;

var funcs = {	
	itemClicked:function(itemNum){
		Ti.API.info("showing desc for row "+rowNum);
		parent.itemClicked(rowNum);
		if(desc != null){
			$.row.remove(desc.getView());
			if(itemNum == activatedItem){
				activatedItem=-1;
				return;
			}
		}
		desc = Alloy.createController("menu/itemDescription");
		//desc must be populated
		$.row.add(desc.getView());
		activatedItem = itemNum;
		Ti.API.info("activated item is now: "+itemNum);
	}
};

exports.init = function(rowNumber, parentFuncs){
	rowNum = rowNumber;
	parent = parentFuncs;
};

exports.forceCloseDesc = function(){
	Ti.API.info("forcing row "+rowNum+" closed");
	if(desc != null){
		$.row.remove(desc.getView());
		activatedItem = -1;
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


