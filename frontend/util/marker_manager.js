
export default class MarkerManager {
    constructor(map) {
      this.map = map;
      this.markers = {};
    }
    
    updateMarkers(businesses) {
        const businessObj ={}
        businesses.forEach(business => businessObj[business.id]=businesses)
        businesses.filter(business => !this.markers[business.id])
                  .forEach(newBusiness => this.createMarkerFromBusiness(newBusiness))

        Object.keys(this.markers).filter(businessId => !businessObj[businessId])
                                 .forEach(businessId => this.removeMarker(this.markers[businessId]))
    }

    createMarkerFromBusiness(business){
        const myLatLng = { lat: business.lat, lng: business.lng };
        const marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            businessId: business.id

          });

          this.markers[marker.businessId] =marker;
    }

    removeMarker(marker){

        this.markers[marker.businessId].setMap(null)
        delete this.markers[marker.businessId]

    }

  }