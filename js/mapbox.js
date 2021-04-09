mapboxgl.accessToken = MAP_BOX_APPID;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 8,
    center: [-98.4916, 29.4252]
});

geocode("Papa Johns San Antonio TX", MAP_BOX_APPID).then(function(res){
    var papaJohnsMarker = new mapboxgl.Marker()
    .setLngLat(res)
    .addTo(map);
    var papaJohnsPopup = new mapboxgl.Popup()
    .setHTML("<p>Papa Johns!</p>")
    
    papaJohnsMarker.setPopup(papaJohnsPopup);
})