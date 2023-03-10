mapboxgl.accessToken = js / mapskey;
var map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  //zoom: 14, // starting zoom
  //center: [-95.30066320177026, 32.35079556652797], // [lng, lat]
});

/* var marker = new mapboxgl.Marker()
  .setLngLat([-95.30066320177026, 32.35079556652797])
  .addTo(map);

var popup = new mapboxgl.Popup()
  .setLngLat([-95.30066320177026, 32.352])
  .setHTML("<p>Codeup Rocks!</p>")
  .addTo(map);

var alamoPopup = new mapboxgl.Popup().setHTML(
  "<p>Remember The Alamo!</p>"
);
marker.setPopup(alamoPopup);
// reverse geocode method from mapbox-geocoder-utils.js
reverseGeocode({ lng: -95.30192, lat: 32.35086 }, mapskey).then(function (
  results
) {
  // logs the address for The Alamo
  console.log(results);
});

 */
// the  geocode method from mapbox-geocoder-utils.js
geocode("3324 Old Henderson Hwy, Tyler, TX 75703", mapskey).then(function (
  result
) {
  console.log(result);
  map.setCenter(result);
  map.setZoom(16);
  let geoMarker = new mapboxgl.Marker().setLngLat(result).addTo(map);
  let geoMarkerPopup = new mapboxgl.Popup().setHTML(createPopupHtml());
  geoMarker.setPopup(geoMarkerPopup);
});

function createPopupHtml() {
  let html = "<div class='card'>";
  html +=
    "<div class='card-header bg-primary text-light d-flex justify-content-between'>";
  html += "<h5>" + "Villa Montez" + "</h5>";
  html += "<span>" + "#1" + "</span>" + "</div>";
  html += "<div class='card-body'>";
  html +=
    "<img src='assets/images/villaMontez.jpeg' alt='text' style='width: 100%; height: 100%'>" +
    "</div>";
  html += "<div class='card-footer'>";
  html +=
    "<p>Simply the best Mexican food in town. Fine dining at its finest</p>";
  html += "<p>5/5</p>" + "</div>";

  return html;
}
