'use strict';

var angular = require('angular');
var L = require('leaflet');
L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';


var map_test2 = angular.module('map_test2',[]);


map_test2.controller('MapCtrl', function($scope) {


   var map = L.map('map2').setView([51.5, -0.09], 13);

   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);



// Execute this function when advanced search button is pressed
 $scope.submit = function() {
     console.log($scope);
 };



});