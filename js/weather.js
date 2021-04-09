$.get("http://api.openweathermap.org/data/2.5/forecast", {
    appid: OPEN_WEATHER_APPID,
    q: "San Antonio, US",
    units: "imperial",
    count: 5
})
.done(function(data){
    console.log(data);
})
.fail(function(error){
    console.log(error);
})
.always(function(){
    console.log("AJAX Request Finished.");
})