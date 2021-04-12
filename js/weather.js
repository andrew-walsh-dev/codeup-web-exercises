
    getFiveDayForecast("San Antonio");
    var submitButton = $("#submitSearch");
    var searchBar = $("#searchBar");
    submitButton.click(() => console.log(searchBar.val()))
    submitButton.click(() => getFiveDayForecast(searchBar.val()))

    function getFiveDayForecast(location) {
        $.get("https://api.openweathermap.org/data/2.5/forecast", {
        appid: OPEN_WEATHER_APPID,
        q: location,
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
            renderFiveDayForecast(days)
        })
        .fail(function(error){
            console.log("There is an error: \n",  error);
        })
        .always(function(){
            console.log("AJAX Request Finished.");
        })
    }

    function renderFiveDayForecast(days) {
        $("#forecast").html("");
        days.forEach((day) => renderSingleForecast(day))
    }

    function renderSingleForecast(day){
        var html = $("#forecast").html()
        html += "<div class='d-flex flex-column justify-content-center mx-5 px-2'>"
        html += "<h2 class='text-center'>" + day.dt_txt.split(" ")[0] + "</h2>"
        html += "<p class='text-center'>" + day.main.temp + "°</p>"
        html += "<p>Description: <strong>" + day.weather[0].description + "</strong></p>"
        html += "<p>Humidity: <strong>" + day.main.humidity + "%</strong></p>"
        html += "<p>Wind: <strong>" + day.wind.speed + "</strong></p>"
        html += "<p>Pressure: <strong>" + (day.main.pressure / 68.9475728).toFixed(2) + " lbs/in<sup>2</sup></strong></p>"
        html += "</div>"
        $("#forecast").html(html);
    }