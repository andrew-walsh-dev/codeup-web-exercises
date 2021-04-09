mapboxgl.accessToken = MAP_BOX_APPID;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 8,
    center: [-98.4916, 29.4252]
});

let restaurants = [
    {
        location: "Papa Johns San Antonio TX",
        name: "Papa Johns",
        description: "Pizza!"
    },
    {
        location: "Chick Fil A San Antonio TX",
        name: "Chick Fil A",
        description: "Eat More Chikin!"
    },
    {
        location: "Chipotle San Antonio TX",
        name: "Chipotle",
        description: "Extra rice please!"
    }
];

restaurants.forEach(function(restaurant){
    geocode(restaurant.location, MAP_BOX_APPID).then(function(res){
        var newMarker = new mapboxgl.Marker()
        .setLngLat(res)
        .addTo(map);
        var newPopup = new mapboxgl.Popup()
        .setHTML("<h6>" + restaurant.name + "</h6><p>" + restaurant.description + "</p>")
        
        newMarker.setPopup(newPopup);
    })
})
// geocode("Papa Johns San Antonio TX", MAP_BOX_APPID).then(function(res){
//     var papaJohnsMarker = new mapboxgl.Marker()
//     .setLngLat(res)
//     .addTo(map);
//     var papaJohnsPopup = new mapboxgl.Popup()
//     .setHTML("<p>Papa Johns!</p>")
    
//     papaJohnsMarker.setPopup(papaJohnsPopup);
// })