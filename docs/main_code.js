let map;
let center =  { lat: -34.397, lng: 150.644 };

async function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center,
    zoom: 8,
    mapId: "DEMO_MAP_ID",
  });

  addMarker();
}

async function addMarker() {
  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: center,
  });
}

initMap();
