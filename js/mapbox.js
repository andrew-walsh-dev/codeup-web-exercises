//map
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmV3LXdhbHNoLWRldiIsImEiOiJja25hanBleHoxaTVjMndyaTFpN2VrcXBjIn0.tscRzZ-dBouiqJrT0DG6UA';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});



geocode("Papa Johns", MAP_BOX_APPID).then(function(res){
    console.log(res);
})