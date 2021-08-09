import React from 'react';
import BusinessIndex from '../business/business_index';
import BusinessMap from '../map/business_map';
import GreetingContainer from '../greeting/greeting_container'
import { Link } from 'react-router-dom';

class Search extends React.Component{
    render(){
        return(
        <div>
             <header className='business-header'>
                    <Link to='/' className='business-title'><img src={window.logoURL} className='business-logo' /></Link>
                    <GreetingContainer />
             </header>
        <div className='business-map-container'>
            <BusinessIndex businesses={this.props.businesses} fetchAllBusinesses={this.props.fetchAllBusinesses}/>
            <div className='business-side'>
                <BusinessMap businesses={this.props.businesses}/>
            </div>
        </div>
        </div>
        )
    }
}

export default Search;