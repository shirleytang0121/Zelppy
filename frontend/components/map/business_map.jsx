import React from "react";
import MarkerManager from "../../util/marker_manager";


class BusinessMap extends React.Component{
    componentDidMount() {
        const mapOptions = {
          center: { lat: 40.7981, lng:  -73.9152  }, 
          zoom: 10
        };
    
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map)
        this.MarkerManager.updateMarkers(this.props.businesses)
      }

      componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.businesses)
      }
    
      render() {
        return (
          
          <div id='map-container'  ref={ map => this.mapNode = map }> 
          
          </div>
        )
      }

}

export default BusinessMap