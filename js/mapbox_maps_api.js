$.ajax("/data/favoriteRestaurants.json").done(function (data, status, jqXhr) {
  createPointsOfInterest(data);
});

const zoomLevel = document.querySelector("#zoomSelector");
const changeLocation = document.querySelector("#btn-submit-address");
const mapboxKey =
  "pk.eyJ1IjoiZ2FnZWphY2tzb24iLCJhIjoiY2xlOTE5NGh4MGtsbzNyczN5eXp4Nzd1eiJ9.LKDaekT77moIJzCdQbqcIw";

mapboxgl.accessToken = mapboxKey;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/gagejackson/clf2s2gln001601qik4wqike1", // style URL
  zoom: 12, // starting zoom
  center: [-95.275, 32.315], // [lng, lat]
});

function createPointsOfInterest(data) {
  for (const rando of data.features) {
    // create a HTML element for each feature
    const createdElement = document.createElement("div");
    createdElement.className = "marker";

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(createdElement)
      .setLngLat(rando.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h3>${rando.properties.title}</h3>
            <p>${rando.properties.description}</p>`
          )
      )
      .addTo(map);
  }
}

changeLocation.addEventListener("click", () => {
  let location = document.querySelector("#userLocation").value;
  geocode(location, mapboxKey).then(function (result) {
    console.log(result);
    //6812 southplace drive, tyler, tx 75703
    //6354 creekview lane, fishers, in 46038
    //map.setCenter(result);
    map.flyTo({ center: result, zoom: 16 });
    let marker = new mapboxgl.Marker().setLngLat(result).addTo(map);
  });
});

zoomLevel.addEventListener("change", () => {
  console.log(zoomLevel.value);
  map.setZoom(zoomLevel.value);
});
// Start the animation.
//requestAnimationFrame(animateMarker);
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
