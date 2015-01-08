
var style;
if (Ti.Platform.name === 'iPhone OS'){
  style = Ti.UI.iPhone.ActivityIndicatorStyle.PLAIN;
}
else {
  style = Ti.UI.ActivityIndicatorStyle.PLAIN;
}

$.activityIndicator.setStyle(style);

$.activityIndicator.show();

setTimeout(function(){
	$.activityIndicator.hide();
}, 2000000);
//populate();

function hide(){
	$.activityIndicator.hide();
}
