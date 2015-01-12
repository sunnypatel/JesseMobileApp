var location = {};

exports.beginService = function() {
    var providerGps = Ti.Geolocation.Android.createLocationProvider({
        name: Ti.Geolocation.PROVIDER_GPS,
        minUpdateDistance: 10,
        minUpdateTime: 5e3
    });
    Ti.Geolocation.Android.addLocationProvider(providerGps);
    Ti.Geolocation.Android.manualMode = true;
    var locationCallback = function(e) {
        !e.success || e.error ? Ti.API.info("error:" + JSON.stringify(e.error)) : location = e.coords;
    };
    Titanium.Geolocation.addEventListener("location", locationCallback);
};

exports.getLocation = function() {
    return location;
};