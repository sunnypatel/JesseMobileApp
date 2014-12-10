var menuDeactivateCB;

function MenuItemCollectionView(collectionData){

	Ti.include('/Resources/ui/main/MenuItemView.js');
	Ti.include('/Resources/ui/main/MenuItemBlankView.js');

	var collection = Ti.UI.createView({
		height:Ti.UI.FILL,
		width:Ti.UI.FILL,
		backgroundColor:'red',
		layout:'vertical'
	});

	var items = collectionData.items;
	var numRows = (items.length/3);
	
	dataDisplayViews = [numRows];
	
	for (var i = 0; i < numRows; i++){
		var dataDisplayView = createDataDisplay();
		var row = createRow();
		for(var j = i*3; j < (i+1)*3; j++){
			//adding the blank ensures that the boxes align with the left side
			if(j >= items.length)
				row.add(new MenuItemBlankView());	
			else{
				var item = new MenuItemView(collectionData.items[j], dataDisplayView); 
				row.add(item);
			}	
		}
		collection.add(row);
		collection.add(dataDisplayView);
		dataDisplayViews[i] = dataDisplayView;
	};

	return collection;
}

function createRow(){
			var row = Ti.UI.createView({
			height:Ti.UI.SIZE,
			width:Ti.UI.FILL,
			top:0,
			bottom:0,
			backgroundColor:'green',
			layout: 'horizontal'
		});
		return row;
}

function createDataDisplay(){
		var dataDisplayView = Ti.UI.createView({
			height:Ti.UI.SIZE,
			width:Ti.UI.FILL,
			backgroundColor:'#F77825'
		});
		return dataDisplayView;
}

function setDeactivateCB(deactivateCB){
	if(menuDeactivateCB != null)
		menuDeactivateCB();
	menuDeactivateCB = deactivateCB;
}


