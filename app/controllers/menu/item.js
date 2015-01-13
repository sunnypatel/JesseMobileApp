

// $.item.setHeight($.item.getWidth());
var parentRow;
var colNum;

function onClick(){
	parentRow.itemClicked(colNum);
}

exports.populate = function(newItem, col, parent){
	// Ti.API.info("item: "+newItem);
	// Ti.API.info("item: "+JSON.parse(newItem));
	parentRow = parent;
	colNum = col; 
	$.item_name.setValue(newItem.name);	
	$.item_name.addEventListener('click', onClick);
};
