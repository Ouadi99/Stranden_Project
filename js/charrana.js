let YO_charrana_beach = L.map('YO_charrana_beach').setView([35.40050013306805, -3.002612547647227], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGVjdG9yd291dGVyIiwiYSI6ImNrM25qZWs1dTB4NHgza240bW0zOG1qZngifQ.1uF5JjJA8l5SpTW3NVQJJQ'
}).addTo(YO_charrana_beach);

let myIcon = L.icon({
    iconUrl: 'assets/logo2.png',

    iconSize:     [65, 95], // size of the icon
    iconAnchor:   [30, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let marker_charrana = L.marker([35.40050013306805, -3.002612547647227], {icon: myIcon}).addTo(YO_charrana_beach);