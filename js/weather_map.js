$.get("http://api.openweathermap.org/data/2.5/onecall", {
  APPID: weatherKey,
  lat: 29.423017,
  lon: -98.48527,
  units: "imperial",
}).done(function (data) {
  console.log("The entire response:", data);
  setLocationName(data);
});

const currentWeatherDiv = document.querySelector("#currentWeather");
const forecastedWeatherDiv = document.querySelector(".carousel-inner");
const forecastedWeatherTiles = document.querySelector("#forecastTiles");

function setCurrentWeatherDiv(data, myLocation) {
  currentWeatherDiv.setHTML(
    `
      <div class ='card container'>
        <div class="card-header row border-1 colorMe text-light">
            <h3 class="col-6 text-start">${myLocation}</h3>
            <h3 class="col-6 text-end">Today</h3>
        </div>
        <div class="card-body row p-0">
            <div class="col-6 p-0 d-flex">
                <img src="/assets/weather-gifs/sun.gif" alt="sunny" class="img-fluid align-self-center">
            </div>
            <div class="col-6">
                <div class="row mb-3 d-flex align-items-center">
                    <div class="col-4 py-2">
                        <img src="/assets/weather-gifs/temperature.png" alt="current temp" class="img-fluid">
                    </div>
                    <div class="col-8">
                    <span class="">${Math.round(data.current.temp)}&#8457</span>
                    </div>
                </div>
                <div class="row bg-light mb-3 d-flex align-items-center">
                    <div class="col-4 py-2">
                        <img src="/assets/weather-gifs/drop.png" alt="current temp" class="img-fluid">
                    </div>
                    <div class="col-8">
                    <span class="">${data.hourly[0].pop}%</span>
                    </div>
                </div>
                <div class="row mb-3 d-flex align-items-center">
                    <div class="col-4 py-2">
                        <img src="/assets/weather-gifs/wind.png" alt="current temp" class="img-fluid">
                    </div>
                    <div class="col-8">
                    <span class="">${data.current.wind_speed} mph</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer row">
            <h3 class="text-center">${data.current.weather[0].description}</h3>
        </div>
      </div>
    `
  );
}

function getDate(date) {
  return new Date(date * 1000).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function setLocationName(data) {
  let locationName = "";
  $.get("http://api.openweathermap.org/geo/1.0/reverse", {
    APPID: weatherKey,
    lat: data.lat,
    lon: data.lon,
  }).done(function (locationData) {
    locationName = locationData[0].name;
    setCurrentWeatherDiv(data, locationName);
    setForecastedWeather(data);
  });
}

function setForecastedWeather(data) {
  forecastedWeatherTiles.innerHTML = getForecastedWeatherTiles(data);
  forecastedWeatherDiv.innerHTML = getForecastedWeatherCarousel(data);
}

function getForecastedWeatherCarousel(data) {
  let forecastedDayCount = 5;
  let html = "";
  for (let i = 0; i < forecastedDayCount; i++) {
    html += '<div class="carousel-item active">'; //1
    html += '<div class="card forecastCard">'; //2
    html += '<div class="card-body">'; //3
    html += '<div class="col-12">'; //4
    html += getDate(data.daily[i].dt);
    html += "</div>"; //4
    html += '<div class="col-12">'; //4
    html +=
      '<img src="/assets/weather-gifs/sun.gif" alt="sunny" class="img-fluid align-self-center">';
    html += "</div>"; //4
    html += "</div>"; //3
    html += '<div class="card-footer">'; //3
    html += data.daily[i].dt;
    html += "</div>"; //3
    html += "</div>"; //2
    html += "</div>"; //1
  }
  return html;
}
function getForecastedWeatherTiles(data) {
  let forecastedDayCount = 5;
  let html = "";
  for (let i = 1; i < forecastedDayCount; i++) {
    html += '<div class="card col-6 col-md my-2">';
    html += '<div class="card-header row colorMe text-white">';
    html += "<h3 class='text-center'>" + getDate(data.daily[i].dt) + "</h3>";
    html += "</div>";
    html += '<div class="card-body row">';
    html += '<div class="col-12">';
    html +=
      '<img src="/assets/weather-gifs/sun.gif" alt="sunny" class="img-fluid align-self-center">';
    html += "</div>";
    html += "</div>";
    html += '<div class="card-footer bg-light row d-flex">';
    html += '<div class="col m-2">';
    html +=
      '<img src="/assets/weather-gifs/cold.png" alt="sunny" class="img-fluid w-50 mb-2">';
    html += "<h5>" + Math.round(data.daily[i].temp.min) + "&#8457</h5>";
    html += "</div>";
    html += '<div class="col m-2">';
    html +=
      '<img src="/assets/weather-gifs/hot.png" alt="sunny" class="img-fluid w-50 mb-2">';
    html += "<h5>" + Math.round(data.daily[i].temp.max) + "&#8457</h5>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
  }
  return html;
}
