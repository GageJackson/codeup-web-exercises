const zoomLevel = document.querySelector("#zoomSelector");
const changeLocation = document.querySelector("#btn-submit-address");

$.ajax("/data/favoriteRestaurants.json").done(function (data, status, jqXhr) {
  createPointsOfInterest(data);
});

mapboxgl.accessToken = mapboxKey;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/gagejackson/clf2rk9pm000u01w3fa0kqmvr", // style URL
  zoom: 12, // starting zoom
  center: [-95.275, 32.315], // [lng, lat]
});

function createPointsOfInterest(data) {
  data.forEach(function (pointOfInterest) {
    // create a HTML element for each feature
    const createdElement = document.createElement("div");
    createdElement.className = "marker";
    console.log(pointOfInterest.coordinates);
    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(createdElement)
      .setLngLat(pointOfInterest.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<div class='card'>
            <div class='card-header bg-primary text-light'>
            <h5>${pointOfInterest.name}</h5>
            <span>${pointOfInterest.rating}</span>
            </div>
            <div class='card-body p-0'>
            <img src='${pointOfInterest.images[0]}'alt='text' style='width: 100%; height: 100%'>
            </div>
            <div class='card-footer bg-primary'>
            <p>${pointOfInterest.description}</p>
            </div>`
          )
      )
      .addTo(map);
  });
}

changeLocation.addEventListener("click", () => {
  let location = document.querySelector("#userLocation").value;
  geocode(location, mapboxKey).then(function (result) {
    console.log(result);
    //6354 creekview lane, fishers, in 46038
    map.flyTo({ center: result, zoom: 16 });
    let marker = new mapboxgl.Marker().setLngLat(result).addTo(map);
  });
});

zoomLevel.addEventListener("change", () => {
  console.log(zoomLevel.value);
  map.setZoom(zoomLevel.value);
});

// Start the animation.
map.on("load", function () {
  requestAnimationFrame(animateMarker);
});

// Add a new Marker.
const marker = new mapboxgl.Marker({
  color: "#F84C4C", // color it red
});

let counter = 0;
const counterMax = 70;
function animateMarker(timestamp) {
  if (counter < counterMax) {
    marker.setLngLat([-95.275, 32.315 + Math.sin(0.015 * timestamp) / 1000]);

    marker.addTo(map);

    counter++;
    requestAnimationFrame(animateMarker);
  } else {
  }
}

map.on("load", function () {
  requestAnimationFrame(animateMarker);
});
