
//TODO: I dont think this is how its supposed to be done, but to save time I am hacking this
var totalSale = 23;
var totalSalesTax = 2.35;
var paid = true;
var confirmed = false;
var restaurantID = 1;
var items = [];

exports.definition = {
    config: {
 "columns": {
 	// "items":"item"
        },
 "adapter": {
 "type": "sql",
 "collection_name": "orders"
        }
    },
    
    
    
    extendModel: function(Model) {		
        _.extend(Model.prototype, {
        	// Extend Backbone.Model
            add : function(attrs, opts){
            	items.push({"id":JSON.parse(JSON.stringify(attrs)).id});
            	//TODO: remove these
            	// items.push({"id":1});
            	// items.push({"id":2});
            	// items.push({"id":3});
            	
            	
            	Ti.API.info('I am an order model: '+JSON.stringify(attrs));
                Ti.API.info('collection data: '+JSON.parse(JSON.stringify(attrs)).id);
                // items.push(attrs);
            },
            
            getOrder: function(){	
    			return {
    				"totalSale":totalSale,
    				"totalSalesTax":totalSalesTax,
    				"paid":paid,
    				"confirmed":confirmed,
    				"restaurantID":restaurantID,
    				"items":items
    			};
    		}
        });
        
 
 		return Model;
    }  
    
};
