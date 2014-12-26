function doClick(e) {
    alert($.label.text);
}

// demonstrates manual mode:
// var providerGps = Ti.Geolocation.Android.createLocationProvider({
    // name: Ti.Geolocation.PROVIDER_GPS,
    // minUpdateDistance: 0.0,
    // minUpdateTime: 0
// });
// Ti.Geolocation.Android.addLocationProvider(providerGps);
// Ti.Geolocation.Android.manualMode = true;
// var locationCallback = function(e) {
    // if (!e.success || e.error) {
        // Ti.API.info('error:' + JSON.stringify(e.error));
    // } else {
        // Ti.API.info('coords: ' + JSON.stringify(e.coords));
    // }
// };
// Titanium.Geolocation.addEventListener('location', locationCallback);

$.index.open();
