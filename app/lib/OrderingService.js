
var items = [];
var order;
var myRestaurant;

exports.setRestaurant = function(restaurant){
	myRestaurant = restaurant;
	// myRestaurant.id = 1;
};

exports.getRestaurant = function(){
	return myRestaurant;
};

exports.addOrder = function(item){
	// orders.push(order);
	// var i = 0;
	// for(;i < items.length; i++){
		// Ti.API.info("current order #"+i+JSON.stringify(items[i]));
	// }
	var i = Alloy.createModel('item',item);
	order = Alloy.createModel('order');
	order.add(i);
	items.push(i);
	
	var cb = function(json){
		Ti.API.info(JSON.stringify(json));
	};
	
	var api = require("APIService");
	api.sendOrder(order, cb);
	// var o = Alloy.createModel('order', items);
	// Ti.API.info("model testing: "+JSON.stringify(order));
};
