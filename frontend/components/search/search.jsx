import React from 'react';
import BusinessIndex from '../business/business_index';
import BusinessMap from '../map/business_map';
import GreetingContainer from '../greeting/greeting_container'
import { Link } from 'react-router-dom';

class Search extends React.Component{
    render(){
        console.log(this.props)
        return(
        <div>
             <header className='business-header'>
                    <Link to='/' className='business-title'><img src={window.logoURL} className='business-logo' /></Link>
                    <GreetingContainer />
             </header>
        <div className='business-map-container'>
            <BusinessIndex businesses={this.props.businesses} updateFilter={this.props.updateFilter} val={this.props.match.params.val} pos={this.props.match.params.pos}/>
            <div className='business-side'>
                <BusinessMap businesses={this.props.businesses} singleBusiness={false} business='' updateFilter={this.props.updateFilter} />
            </div>
        </div>
        </div>
        )
    }
}

export default Search;