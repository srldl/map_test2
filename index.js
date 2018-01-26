'use strict';

var angular = require('angular');
var L = require('leaflet');
require('leaflet.markercluster');
L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';

var map_test2 = angular.module('map_test2',[]);


map_test2.controller('MapCtrl', function($scope) {
    console.log("ooo");

   var addressPoints = [
		[-37.8210922667, 175.2209316333, "2"],
		[-37.8210819833, 175.2213903167, "3"],
		[-37.8210881833, 175.2215004833, "3A"],
		[-37.8211946833, 175.2213655333, "1"],
		[-37.8209458667, 175.2214051333, "5"],
		[-37.8208292333, 175.2214374833, "7"],
		[-37.8325816, 175.2238798667, "537"],
		[-37.8315855167, 175.2279767, "454"],
		[-37.8096336833, 175.2223743833, "176"],
		[-37.80970685, 175.2221815833, "178"],
		[-37.8102146667, 175.2211562833, "190"],
		[-37.8088037167, 175.2242227, "156"],
		[-37.8112330167, 175.2193425667, "210"],
		[-37.8116368667, 175.2193005167, "212"],
		[-37.80812645, 175.2255449333, "146"],
		[-37.8080231333, 175.2286383167, "125"],
		[-37.8089538667, 175.2222222333, "174"],
		[-37.8080905833, 175.2275400667, "129"],
		[-37.808811, 175.2227592833, "172"],
		[-37.80832975, 175.2276898167, "131"],
		[-37.8089395333, 175.2281710333, "133"],
		[-37.8093421, 175.2274883167, "135"],
		[-37.8084820833, 175.22601925, "137"],
		[-37.80881015, 175.22622865, "139"]
	];

	var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 18,
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
			}),
			latlng = L.latLng(-37.82, 175.24);

		var map = L.map('map', {center: latlng, zoom: 13, layers: [tiles]});
		console.log("vvv");

		var markers = L.markerClusterGroup();

		for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[2];
			var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
			marker.bindPopup(title);
			markers.addLayer(marker);
		}

		map.addLayer(markers);



});