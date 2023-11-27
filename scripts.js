var map = L.map('map').setView([50, -123.5], 5.5);

var Esri_OceanBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
	maxZoom: 20
}).addTo(map);

var seaLionLayer, snowyPloverLayer, seaTurtleLayer, humpbackWhaleLayer;


fetch('SeaLionSteller_WesternDPS_19940615.json')
.then(response => response.json())
.then(data => {
    L.geoJSON(data, {
        style: {
            color: 'brown', // Border color
            fillColor: 'brown', // Fill color
            weight: 2, // Border width
            opacity: 1, // Border opacity
            fillOpacity: 0.5 // Fill opacity
        },
        onEachFeature: function(feature, layer) {
            console.log(feature.properties); // Log the properties to the console
            layer.bindPopup('Steller Sea Lion Habitat');
        }
    }).addTo(map);
})

fetch('Snowy_Plover_Range_-_CWHR_B154_[ds929].geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            onEachFeature: function(feature, layer) {
                console.log(feature.properties); // Log the properties to the console
                layer.bindPopup('Snowy Plover Habitat');
            }
        }
            ).addTo(map);
    })
    .catch(error => console.error('Error: ', error));

    fetch('SeaTurtleLeatherback_20120126.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: 'darkgreen', // Border color
                fillColor: 'darkgreen', // Fill color
                weight: 2, // Border width
                opacity: 1, // Border opacity
                fillOpacity: 0.5 // Fill opacity
            },
            onEachFeature: function(feature, layer) {
                console.log(feature.properties); // Log the properties to the console
                layer.bindPopup('Leatherback Sea Turtle Habitat');
            }
        }).addTo(map);
    })

    fetch('WhaleHumpback_MexicoDPS_20210421.json')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: 'purple', // Border color
                fillColor: 'purple', // Fill color
                weight: 2, // Border width
                opacity: 1, // Border opacity
                fillOpacity: 0.5 // Fill opacity
            },
            onEachFeature: function(feature, layer) {
                console.log(feature.properties); // Log the properties to the console
                layer.bindPopup('Humpback Whale Habitat');
            }
        }).addTo(map);
    })