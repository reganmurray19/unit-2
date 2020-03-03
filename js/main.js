//Construct the map as a global variable
var mymap = L.map('mapid').setView([41.106765, -86.837098], 5);
var min;
var years = [2012,2013,2014,2015,2016,2017,2018];

//This function applies general styles to the map
function styleMap() {
  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', {
  	maxZoom: 20,
  	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(mymap);
}
//This function loads data onto the map
function loadData(){
  $.getJSON("data/bigten_enrollment.geojson", function(response){
            //create a Leaflet GeoJSON layer and add it to the map
            min =calcMin(response);
            var attributes = processData(response);
            propSymbols(response, attributes);
            createSequenceControls(attributes);
        });
};
//This function styles point features
function pointToLayer(feature, latlng, attributes) {
  var attribute = attributes[0];
  var circleStyle = {
        radius: 6,
        fillColor: "#0088CE",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
  var attValue = Number(feature.properties[attribute]);
  circleStyle.radius=calcPropRadius(Number(attValue));
  var layer = L.circleMarker(latlng,circleStyle);
  var popUpContent = "<p><b>City:</b> " + feature.properties.City + "</p><p><b>University:</b>" + feature.properties.University + "</p><p><b>2012 Student Population:</b>" + feature.properties[attribute] + "</p>";
  layer.bindPopup(popUpContent);
  return layer;
}
//This function finds the minimum value in a dataset
function calcMin(data) {
   var dataArr = []
   for(var city of data.features) {
     for(var i = 1; i <=7;i++ ){
       dataArr.push(Number(city.properties["yr" + String(i)]));
     };
   };

   return Math.min(...dataArr);
}
//This function calculates the radius using Flannery's Law
function calcPropRadius(attValue) {
     //constant factor adjusts symbol sizes evenly
     var minRadius = 5;
     //Flannery Appearance Compensation formula
     var radius = 1.0083 * Math.pow(attValue/min,0.5715) * minRadius;
     return radius;
};
//This function creates proportional symbols
function propSymbols(data,attributes){
  L.geoJson(data, {
    pointToLayer: function(feature, latlng){
      return pointToLayer(feature,latlng,attributes);
    }
  }).addTo(mymap)
};
function createSequenceControls(attributes) {
  $('#panel').append('<input class="range-slider" type="range">');
  $('.range-slider').attr({
    max: 6,
    min: 0,
    value: 0,
    step: 1
  });
  $('#panel').append('<button class="step" id="backward">backward</button>');
  $('#panel').append('<button class="step" id="forward">Forward</button>');
  $('#backward').html('<img src="img/backward.png">');
  $('#forward').html('<img src="img/forward.png">');
  index = $('.range-slider').val();
  $('.step').click(function(){
        if ($(this).attr('id') == 'forward'){
            index++;
            index = index > 6 ? 0 : index;
        } else if ($(this).attr('id') == 'backward'){
            index--;
            index = index < 0 ? 6 : index;
        };
        updatePropSymbols(attributes[index], index);
        $('.range-slider').val(index);
  });


    $('.range-slider').on('input', function(){
        index = $(this).val();
        updatePropSymbols(attributes[index],index);
    });
};
function processData(response){
  var attributes = []
  //properties of the first feature in the dataset
    var properties = response.features[0].properties;
    //push each attribute name into attributes array
    for (var attribute in properties){
        //only take attributes with population values
        if (attribute.indexOf("yr") > -1){
            attributes.push(attribute);
        };
    };
    return attributes;
}
function updatePropSymbols(attribute, index){
  mymap.eachLayer(function(layer) {
    if(layer.feature && layer.feature.properties[attribute]) {
      var props = layer.feature.properties;
      var radius = calcPropRadius(props[attribute]);
      layer.setRadius(radius);
      var popupContent = "<p><b>City:</b> " + props.City + "</p><p><b>University:</b>" + props.University;
      popupContent+="<p><b>Fall " + years[index] +" student population:</b>" + props[attribute];
      popup = layer.getPopup();
      popup.setContent(popupContent).update();
    };
  });
};
function callBackFunc(){
  styleMap();
  loadData();
}
callBackFunc();
