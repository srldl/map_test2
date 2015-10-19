'use strict';

var angular = require('angular');
var L = require('leaflet');
  L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';
  require('leaflet-draw');
  require('angular-simple-logger');
  require('angular-leaflet-directive');

var map_test = angular.module('map_test',['leaflet-directive', 'nemLogging']);


map_test.controller('MapCtrl', function($scope, nemSimpleLogger, leafletData) {

  // Setting up the map
    angular.extend($scope, {
      center: {
                    lat: 78.000,
                    lng: 16.000,
                    zoom: 4
      },
      layers: {
        tileLayer: "http://tilestream.data.npolar.no/v2/WorldHax/{z}/{x}/{y}.png",
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap2</a> contributors',
        maxZoom: 14,
        minZoom: 2
      },
      controls: {
        draw: { position : 'topleft',
        polygon : false,
        polyline : false,
        rectangle : true,
        circle : false,
        marker: false }
      }
  });

    //Draw a rectangle on the map to get coordinates from
  leafletData.getMap().then(function(map) {

       var drawnItems = new L.featureGroup().addTo(map);


       map.on('draw:created', function (e) {
                 var layer = e.layer;
                drawnItems.addLayer(layer);
                var res = (layer.toGeoJSON()).geometry.coordinates;

                //fetch zero and second coordinate pair to get a rectangle
                $scope.lat1= res[0][0][0];
                $scope.lng1= res[0][0][1];
                $scope.lat2= res[0][2][0];
                $scope.lng2= res[0][2][1];

                console.log($scope);
                console.log("2");
  });
});

// Execute this function when advanced search button is pressed
 $scope.submit = function() {
     console.log($scope);
     $scope.user.firstName = 'petter';
     $scope.user.lastName = 'hansen';
     $scope.apply();
 };



});