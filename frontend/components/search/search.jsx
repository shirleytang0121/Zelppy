import React from 'react';
import BusinessIndex from '../business/business_index';
import BusinessMap from '../map/business_map';

class Search extends React.Component{
    render(){
        return(
        <div>
            <BusinessIndex businesses={this.props.businesses} fetchAllBusinesses={this.props.fetchAllBusinesses}/>
            <BusinessMap />
        </div>
        )
    }
}

export default Search;