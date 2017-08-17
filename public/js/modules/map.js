import axios from 'axios';

const mapOptions = {
  center: {
    lat: 55.7, 
    lng: 37.6
  },
  zoom: 10
}

function loadPlaces(map, lat = 55.7, lng = 37.6){
  axios.get(`api/stores/near?lat=${lat}&lng=${lng}`)
       .then( res => {
         const places = res.data;
         console.log(places)
         if(!places) return;

         const bounds = new google.maps.LatLngBounds();
         const infoWindow = new google.maps.InfoWindow();

         const markers = places.map( place => {
           const [ placeLng, placeLat ] = place.location.coordinates;
           const position = { lat: placeLat, lng: placeLng };
           bounds.extend(position);
           console.log(position)
           const marker = new google.maps.Marker({ map, position });
           marker.place = place;
           return marker;
         })
        
         markers.forEach( marker => marker.addListener('click', function(){
           const html = `<div class="popup">
              <a href="/store/${this.place.slug}">
                <img src="/uploads/${this.place.photo || 'store.png'}" alt="${this.place.name}"/>
                <p>${this.place.name} - ${this.place.location.address}</p>
              </a>
            </div>`
           infoWindow.setContent(html);
           infoWindow.open(map, this)
         }))

         map.setCenter(bounds.getCenter());
         map.fitBounds(bounds)
       })
} 

export default function makeMap(mapContainer){
  if(!mapContainer) return;
  const map = new google.maps.Map(mapContainer, mapOptions)
  console.log(map)
  loadPlaces(map)

  const input = document.querySelector('[name="geolocate"]');
  const autocomplete = new google.maps.places.Autocomplete(input)
  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    loadPlaces(map, place.geometry.location.lat(), place.geometry.location.lng())
  })
}