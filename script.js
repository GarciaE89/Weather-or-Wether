var openWeatherApi = "37758de61e4631e7c9db9d1e9dae46d1";

var currentCityURL = "https://api.openweathermap.org/data/2.5/weather?"

var forecastURL = "https://api.openweathermap.org/data/2.5/onecall?"

var now = moment()

var currentDay = (now.format("l"));

function createWeatherDiv() {
    var weather = document.getElementById("weatherForecast")
    var weatherDiv = document.createElement("div");
    weatherDiv.className = "weatherDiv";
    weather.append(weatherDiv);
}

