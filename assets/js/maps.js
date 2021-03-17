
function initMap() {
    
    const location = {lat: 42.100, lng: 13.875,};
    
    const map = new google.maps.Map(document.getElementById("map"),{
      zoom: 15,
      center: location,
    });
    
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
}

  