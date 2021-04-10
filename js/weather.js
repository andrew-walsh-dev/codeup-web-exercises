$.get("https://api.openweathermap.org/data/2.5/forecast", {
    appid: OPEN_WEATHER_APPID,
    q: "San Antonio, US",
    units: "imperial",
})
.done(function(data){
    var days = [];
    for (var i = 0; i < data.list.length; i++){
        if (i % 8 === 0) {
            days.push(data.list[i]);
        }
    }
    console.log(days);
    // renderFiveDayForecast(days)
})
.fail(function(error){
    console.log(error);
})
.always(function(){
    console.log("AJAX Request Finished.");
})

function getFiveDayForecast(location) {
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
    appid: OPEN_WEATHER_APPID,
    q: location,
    units: "imperial",
    cnt: 5
    })
    .done(renderFiveDayForecast(data.list))
    .fail(function(error){
        console.log(error);
    })
    .always(function(){
        console.log("AJAX Request Finished.");
    })
}

function renderFiveDayForecast(days) {
    days.forEach(renderSingleForecast(day))
}

function renderSingleForecast(day){
    
    $("#forecast").html()
}