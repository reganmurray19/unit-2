// The .map function instantiates a map object corresponding to an html element
// The .setView function centers the map and specifies map interactivity
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//The .tileLayer function displays imported map tiles on the webpage
//The .addTo function displays its argument on the map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmVnYW5tdXJyYXkiLCJhIjoiY2s2c3EwMXRwMGpncjNsczVjdnBncGtvOSJ9.0GY5BTM-s8hVU_KB98_GZw'
}).addTo(mymap);

//The .marker function drops a pin at the specified location
var marker = L.marker([51.5, -0.09]).addTo(mymap);

//The .circle function draws a circle with style and location parameters
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

//The .polygon function creates a polygon on the map using four points
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

//The .bindPopup function associates a popup with a map feature
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

//The .popup function instantiates a popup with specified location and message
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);
    var popup = L.popup();

//The .onMapClick function preps the interface to react to user clicks by providing
// a reaction and location
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
  }
mymap.on('click', onMapClick);
