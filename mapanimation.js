const busStops = [
    [77.2852,10.9956],
    [ 77.2211,10.9992],
    [77.1842,11.0175],
    [ 77.1569,11.0262],
    [ 77.1246,11.0254],
   
    
  ];
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';
    let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.2852,10.9956],
    zoom: 14,
  });  

  var marker= new mapboxgl.Marker()
            .setLngLat([77.1246,11.0254])
            .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(()=> {
    if (counter>=busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
    },1000);
}

if (typeof module !== 'undefined') {
    module.exports = { move };
  }
