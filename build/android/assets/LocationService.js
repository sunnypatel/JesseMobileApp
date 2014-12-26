function beginService() {
    var providerGps = Ti.Geolocation.Android.createLocationProvider({
        name: Ti.Geolocation.PROVIDER_GPS,
        minUpdateDistance: 0,
        minUpdateTime: 0
    });
    Ti.Geolocation.Android.addLocationProvider(providerGps);
    Ti.Geolocation.Android.manualMode = true;
    var locationCallback = function(e) {
        if (!e.success || e.error) Ti.API.info("error:" + JSON.stringify(e.error)); else {
            alert("coords: " + JSON.stringify(e.coords));
            Ti.API.info("coords: " + JSON.stringify(e.coords));
        }
    };
    Titanium.Geolocation.addEventListener("location", locationCallback);
}