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
  let weatherGif = getWeatherGif(data.current.weather[0].id);
  currentWeatherDiv.setHTML(
    `
      <div class ='card container'>
        <div class="card-header row border-1 colorMe text-light">
            <h3 class="col-6 text-start">${myLocation}</h3>
            <h3 class="col-6 text-end">Today</h3>
        </div>
        <div class="card-body row p-0">
            <div class="col-6 p-0 d-flex">
                <img src=${weatherGif} alt="weather gif" class="img-fluid align-self-center">
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
                        <img src="/assets/weather-gifs/umbrella.png" alt="current temp" class="img-fluid">
                    </div>
                    <div class="col-8">
                    <span class="">${data.hourly[0].pop * 100}%</span>
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
    let weatherGif = getWeatherGif(data.daily[i].weather[0].id);
    html += '<div class="carousel-item active">'; //1
    html += '<div class="card forecastCard">'; //2
    html += '<div class="card-body">'; //3
    html += '<div class="col-12">'; //4
    html += getDate(data.daily[i].dt);
    html += "</div>"; //4
    html += '<div class="col-12">'; //4
    html +=
      "<img src=" +
      weatherGif +
      ' alt="weather gif" class="img-fluid align-self-center">';
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
    let weatherGif = getWeatherGif(data.daily[i].weather[0].id);
    html += '<div class="card col-6 col-md my-2 p-0">';
    html += '<div class="card-header colorMe text-white p-0 pt-3">';
    html += "<h3 class='text-center'>" + getDate(data.daily[i].dt) + "</h3>";
    html += "</div>";
    html += '<div class="card-body">';
    html +=
      "<img src=" +
      weatherGif +
      ' alt="weather gif" class="img-fluid align-self-center">';
    html += "</div>";
    html +=
      '<div class="card-footer bg-light d-flex justify-content-between p-0 pt-3">';
    html += '<div class="col-4 p-0 text-center">';
    html +=
      '<img src="/assets/weather-gifs/cold.png" alt="low temp" class="img-fluid w-50 mb-2">';
    html +=
      "<p>" +
      Math.round(data.daily[i].temp.min) +
      "<span class='unit'>&#8457</span></p>";
    html += "</div>";
    html += '<div class="col-4 p-0 text-center">';
    html +=
      '<img src="/assets/weather-gifs/hot.png" alt="high temp" class="img-fluid w-50 mb-2">';
    html +=
      "<p>" +
      Math.round(data.daily[i].temp.max) +
      "<span class='unit'>&#8457</span></p>";
    html += "</div>";
    html += '<div class="col-4 p-0 text-center">';
    html +=
      '<img src="/assets/weather-gifs/umbrella.png" alt="chance of rain" class="img-fluid w-50 mb-2">';
    html +=
      "<p>" +
      Math.round(data.daily[i].pop * 100) +
      "<span class='unit'>%</span></p>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
  }
  return html;
}

function getWeatherGif(weatherState) {
  let weatherGifSource = "";
  if (weatherState < 200) {
    weatherGifSource = "/assets/weather-gifs/rainbow.gif";
  }
  if (weatherState < 300 && weatherState >= 200) {
    weatherGifSource = "/assets/weather-gifs/storm.gif";
  }
  if (weatherState < 400 && weatherState >= 300) {
    weatherGifSource = "/assets/weather-gifs/drizzle.gif";
  }
  if (weatherState < 500 && weatherState >= 400) {
    weatherGifSource = "/assets/weather-gifs/rainbow.gif";
  }
  if (weatherState < 600 && weatherState >= 500) {
    if (weatherState === 511) {
      weatherGifSource = "/assets/weather-gifs/icicles.gif";
    }
    weatherGifSource = "/assets/weather-gifs/rain.gif";
  }
  if (weatherState < 700 && weatherState >= 600) {
    weatherGifSource = "/assets/weather-gifs/snow.gif";
  }
  if (weatherState < 800 && weatherState >= 700) {
    if (weatherState === 781) {
      weatherGifSource = "/assets/weather-gifs/whirlwind.gif";
    }
    weatherGifSource = "/assets/weather-gifs/foggy.gif";
  }
  if (weatherState === 800) {
    weatherGifSource = "/assets/weather-gifs/sun.gif";
  }
  if (weatherState === 801) {
    weatherGifSource = "/assets/weather-gifs/cloudy.gif";
  }
  if (weatherState >= 802) {
    weatherGifSource = "/assets/weather-gifs/clouds.gif";
  }
  return weatherGifSource;
}
