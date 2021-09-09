import React from "react";
import MarkerManager from "../../util/marker_manager";


class BusinessMap extends React.Component{
    componentDidMount() {
        let mapOptions
        if(this.props.singleBusiness===true){
            mapOptions = {
                center: { lat: this.props.business.lat, lng:  this.props.business.lng  }, 
                zoom: 14
                };
        }else{
            mapOptions = {
            center: { lat: 40.7981, lng:  -73.9152  }, 
            zoom: 10
            };
       }
    
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this))
        if(this.props.singleBusiness){
            this.MarkerManager.updateMarkers([this.props.business])
        }else{
            this.MarkerManager.updateMarkers(this.props.businesses)
        }
      }

      componentDidUpdate(){
        if(this.props.singleBusiness){
            this.MarkerManager.updateMarkers([this.props.business])
        }else{
            this.MarkerManager.updateMarkers(this.props.businesses)
        }
      }

      handleMarkerClick(business) {
        this.props.history.push(`businesses/${business.id}`);
      }
    
      render() {
        return (
          
          <div id='map-container'  ref={ map => this.mapNode = map }> 
          
          </div>
        )
      }

}

export default BusinessMap