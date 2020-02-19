
var mymap = L.map('mapid').setView([20, 0], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmVnYW5tdXJyYXkiLCJhIjoiY2s2c3EwMXRwMGpncjNsczVjdnBncGtvOSJ9.0GY5BTM-s8hVU_KB98_GZw'
}).addTo(mymap);

$.getJSON("data/MegaCities.geojson", function(response){

  var cityPtStyle = {
    radius: 6,
    fillColor: "#32a854",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };
  L.geoJson(response, {
    pointToLayer: function (feature, latlng){
                   return L.circleMarker(latlng, cityPtStyle);
                 },
    onEachFeature: function(feature, layer) {
                    var popup = "";
                    if (feature.properties) {
                      for(var i in feature.properties) {
                        popup+="<p>" + i + ": " + feature.properties[i] + "</p>";
                      }
                    layer.bindPopup(popup);
                    }
    }
  }).addTo(mymap);
});
