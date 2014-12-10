
var StateManager = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
 		
    // Singleton
    // Private methods and variables
    
 	Ti.include('/Resources/ui/main/OrderingManager.js');
	Ti.include('/Resources/ui/login/LoginManager.js');
 
	var win = Titanium.UI.createWindow({  
	    title:'Olive Garden',
	    height:Ti.UI.FILL,
	    width:Ti.UI.FILL,
	    backgroundColor:'#fff'
	});

    return {
      // Public methods and variables
    	setState: function(state){
			if(state == "login"){
				// if(item != null)
					// win.remove(item);
				new LoginManager();
				// win.add(item);
				// win.open();
			}else if(state == "ordering"){
				// if(item != null)
					// win.remove(item);
				new OrderingManager();
				// win.add(item);
				// win.open();
			}
		}
    };
  };
  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };
})();

















// create base UI tab and root window

var StateManagerSingleton = function(){


};