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

function setCurrentWeatherDiv(data, myLocation) {
  let myDate = new Date(data.current.dt * 1000).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });

  currentWeatherDiv.setHTML(
    `
      <div class ='card container'>
        <div class="card-header row border-1">
            <h3 class="col-6 text-start">${myLocation}</h3>
            <h3 class="col-6 text-end">${myDate}</h3>
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

function setLocationName(data) {
  let locationName = "";
  $.get("http://api.openweathermap.org/geo/1.0/reverse", {
    APPID: weatherKey,
    lat: data.lat,
    lon: data.lon,
  }).done(function (locationData) {
    locationName = locationData[0].name;
    setCurrentWeatherDiv(data, locationName);
  });
}
