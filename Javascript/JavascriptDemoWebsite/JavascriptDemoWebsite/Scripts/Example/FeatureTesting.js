if (window.navigator && window.navigator.geolocation) {
    
    console.log("Geolocation supported in browser");
    navigator.geolocation.getCurrentPosition(successFunction);

} else {
    console.log("This browser does not support geolocation");
}


function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log("Lat: " + lat + " " + "Long: " + lng);
}