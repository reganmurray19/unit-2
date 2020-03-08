//Construct the map as a global variable
var mymap = L.map('mapid').setView([42.392792,-85.0733565], 5);
var yearMin;
var divMin;
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
            yearMin =calcMin(response, "yr");
            divMin = calcMin(response, "div");
            var attributes = processData(response);
            propSymbols(response, attributes);
            createSequenceControls(attributes);
        });
};
//This function styles point features
function pointToLayer(feature, latlng, attributes) {

  //Styling for proportional propSymbols of the two layers
  var yearCircleStyle = {
        radius: 6,
        fillColor: "#0088CE",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

  var divCircleStyle = {
        radius: 6,
        fillColor: "#0088CE",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

  //Use the base set of values to calculate the initial state of symbols
  var baseYrAttribute = attributes[0];
  var baseDivAttribute = attributes[7];
  var divInflated = attributes[8];
  var yrAttValue = Number(feature.properties[baseYrAttribute]);
  var divAttValue = Number(feature.properties[divInflated]);
  yearCircleStyle.radius=calcPropRadius(Number(yrAttValue));
  divCircleStyle.radius=calcPropRadius(Number(divAttValue));
  //Create prop symbol layers for the two data layers
  var yearLayer = L.circleMarker(latlng,yearCircleStyle);
  var divLayer = L.circleMarker(latlng, divCircleStyle);

  //Create popup content for two layers
  var yearPopUpContent = "<p><b>City:</b> " + feature.properties.City + "</p><p><b>University:</b>" + feature.properties.University + "</p><p><b>2012 Student Population:</b>" + feature.properties[baseYrAttribute] + "</p>";
  yearLayer.bindPopup(yearPopUpContent);
  var divPopUpContent = "<p><b>City:</b> " + feature.properties.City + "</p><p><b>University:</b>" + feature.properties.University + "</p><p><b>Diversity Index:</b>" + feature.properties[baseDivAttribute] + "</p>";
  divLayer.bindPopup(divPopUpContent);

  return toggleLayers(yearLayer,divLayer,attributes);
}

//This function provides functionality for radio buttons
function toggleLayers(yearLayer, divLayer,attributes) {
  var divOn = false;
  //Check which button is clicked
  $("input[type='radio'][name='mapLayer']").click(function() {
    if ($(this).attr('id') == 'studentPop'){
      mymap.removeLayer(divLayer);
      mymap.addLayer(yearLayer);
      document.getElementById("slider").style.visibility="visible";
    } else if ($(this).attr('id') == 'divScale'){
      mymap.removeLayer(yearLayer);
      mymap.addLayer(divLayer);
      document.getElementById("slider").style.visibility="hidden";
    }
  });

  //Default to year layer and initialize sequence controls
  return yearLayer;
};

//This function finds the minimum value in a dataset
function calcMin(data, type) {
   var dataArr = []
   if(type == "yr") {
     for(var city of data.features) {
       for(var i = 1; i <=7;i++ ){
         dataArr.push(Number(city.properties["yr" + String(i)]));
       };
     };
   } else if (type == "div") {
       for(var city of data.features) {
         dataArr.push(Number(city.properties["DiversityScaleRank"]));
       };
   }
   return Math.min(...dataArr);
}

//This function calculates the radius using Flannery's Law
function calcPropRadius(attValue) {
     //constant factor adjusts symbol sizes evenly
     var minRadius = 5;
     //Flannery Appearance Compensation formula
     var radius = 1.0083 * Math.pow(attValue/yearMin,0.5715) * minRadius;
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

//This function initializes the sequence slider
function createSequenceControls(attributes) {
  $('#slider').append('<input class="range-slider" type="range">');
  $('.range-slider').attr({
    max: 6,
    min: 0,
    value: 0,
    step: 1
  });
  $('#slider').append('<button class="step" id="backward">backward</button>');
  $('#slider').append('<button class="step" id="forward">Forward</button>');
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

//This function stores attribute strings in an array
function processData(response){
  var attributes = []
  //properties of the first feature in the dataset
    var properties = response.features[0].properties;
    //push each attribute name into attributes array
    for (var attribute in properties){
        //only take attributes with population values
        if (attribute.indexOf("yr") > -1){
            attributes.push(attribute);
        } else if (attribute.indexOf("DiversityScaleRank") > -1){
            attributes.push(attribute);
        } else if(attribute.indexOf("divInflated") > -1) {
            attributes.push(attribute);
        };
    };
    return attributes;
};

//This function updates proportional symbol sizes for the slider
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
};
callBackFunc();
