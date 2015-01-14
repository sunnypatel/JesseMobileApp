
var itemCount = 0;
var desc;
var activatedItem;
var rowNum;
var parent;

//TODO: it may be better to have the desc view hidden but always present for memory reasons

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
		var descView = desc.getView();
		//desc must be populated
		$.row.add(descView);
		
		//description box animation
		// var matrix0 = Ti.UI.create2DMatrix();
  		// matrix0 = matrix0.translate(0, -200);
  		// var a0 = Ti.UI.createAnimation({
  			// // anchorPoint:{x:1,y:1},
    		// transform : matrix0,
    		// duration : 5000,
  		// });
  		// descView.animate(a0);
  		var matrix = Ti.UI.create2DMatrix();
  		matrix = matrix.translate(0, 100);
  		var a = Ti.UI.createAnimation({
  			anchorPoint:{x:0,y:0},
    		transform : matrix,
    		duration : 5000,
  		});
  		
  		var matrix2 = Ti.UI.create2DMatrix();
  		matrix2 = matrix2.scale(1, 2);
  		matrix2 = matrix2.translate(0,100);
  		var a2 = Ti.UI.createAnimation({
  			anchorPoint:{x:0,y:0},
    		transform : matrix2,
    		duration : 5000,
  		});
  		
  		var matrix3 = Ti.UI.create2DMatrix();
  		matrix3 = matrix3.scale(1, .5);
  		matrix3 = matrix3.translate(0,-100);
  		var a3 = Ti.UI.createAnimation({
  			anchorPoint:{x:0,y:0},
    		transform : matrix3,
    		duration : 5000,
  		});
  		
  		$.row.animate(a2);
  		$.row_items_area.animate(a3);
  		descView.animate(a);
  		
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


