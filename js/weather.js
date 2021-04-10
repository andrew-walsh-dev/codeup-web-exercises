$.get("https://api.openweathermap.org/data/2.5/forecast", {
    appid: OPEN_WEATHER_APPID,
    q: "San Antonio, US",
    units: "imperial",
})
.done(function(data){
    console.log(data);
    var days = [];
    for (var i = 0; i < data.list.length; i++){
        if (i % 8 === 0) {
            days.push(data.list[i]);
        }
    }
    console.log(days);
    renderFiveDayForecast(days)
})
.fail(function(error){
    console.log("There is an error: \n" + error);
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
    days.forEach((day) => renderSingleForecast(day))
}

function renderSingleForecast(day){
    var html = $("#forecast").html()
    html += "<div class='d-flex flex-column'>"
    html += "<h2>" + day.dt_txt.split(" ")[0] + "</h2>"
    html += "<p>" + day.main.temp_min + " / " + day.main.temp_min + "</p>"
    html += "<p>" + day.weather[0].description + "</p>"
    html += "<p>" + day.main.humidity + "</p>"
    html += "<p>" + day.wind.speed + "</p>"
    html += "<p>" + day.main.pressure + "</p>"
    html += "</div>"
    $("#forecast").html(html);
}