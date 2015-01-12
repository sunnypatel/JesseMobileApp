

// $.item.setHeight($.item.getWidth());
var parentRow;
var clicked = false;
var colNum;

function onClick(){
	if(clicked == true){
		clicked = false;
		parentRow.hideDesc(colNum);
	}else{
		clicked = true;
		parentRow.showDesc(colNum);
	}
	Ti.API.info("clicked is now"+clicked+" "+colNum);
}

exports.populate = function(newItem, col, parent){
	// Ti.API.info("item: "+newItem);
	// Ti.API.info("item: "+JSON.parse(newItem));
	parentRow = parent;
	colNum = col; 
	$.item_name.setValue(newItem.name+" "+colNum);	
	$.item_name.addEventListener('click', onClick);
};