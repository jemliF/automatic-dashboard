"use strict";

app.controller('HomeCtrl', function ($scope) {
    L.mapbox.accessToken = 'pk.eyJ1IjoiamVtbGlmYXRoaSIsImEiOiJjaXhnOG92aDgwMDBhMnRvMm54eHZjZTgyIn0.h6ZZM1kjRzFCCnK7hidzSw';
    var map = L.mapbox.map('map', 'mapbox.streets')
        .setView([40, -74.50], 9);
});