    //start at san antonio by default
    getFiveDayForecast("San Antonio");
    
    //ask for user location and make that starting position if they allow
    navigator.geolocation.getCurrentPosition(getLatLon);
    function getLatLon(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
        console.log("Latitude is " + latitude);
        console.log("Longitude is " + longitude);
        reverseGeocode({lat: latitude, lng: longitude}, MAP_BOX_APPID)
        .then(function(data){
            var userCity = data.split(",")[1].trim();
            getFiveDayForecast(userCity);
        })
    }

    //create mapbox
    mapboxgl.accessToken = MAP_BOX_APPID;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-98.4916, 29.4252]
    });

    //setup listener for search button
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
            updateCurrentCity(data.city.name);
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
        html += "<div class='d-flex flex-column justify-content-center mx-3 p-5 daycast'>"
        html += "<h2 class='text-center'>" + day.dt_txt.split(" ")[0] + "</h2>"
        html += "<p class='text-center'>" + day.main.temp + "°</p>"
        html += "<p>Description: <strong>" + day.weather[0].description + "</strong></p>"
        html += "<p>Humidity: <strong>" + day.main.humidity + "%</strong></p>"
        html += "<p>Wind: <strong>" + (day.wind.speed * 2.236936).toFixed(2) + " mph</strong></p>"
        html += "<p>Pressure: <strong>" + (day.main.pressure / 68.9475728).toFixed(2) + " lbs/in<sup>2</sup></strong></p>"
        html += "</div>"
        $("#forecast").html(html);
    }

    function updateCurrentCity(city){
        $("#currentCity").html("Current City: " + city);
    }