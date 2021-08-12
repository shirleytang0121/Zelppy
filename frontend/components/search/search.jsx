import React from 'react';
import BusinessIndex from '../business/business_index';
import BusinessMap from '../map/business_map';
import GreetingContainer from '../greeting/greeting_container'
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';
import Footer from '../footer/footer';

class Search extends React.Component{
    render(){
        console.log(this.props)
        return(
        <div>
             <header className='business-header'>
                 <div className='title-box'>
                    <Link to='/' className='business-title'><img src={window.logoURL} className='business-logo' /></Link>
                </div>
                <div className='search-box'><SearchBar updateFilter={this.props.updateFilter} type='sub-search'/></div>
                <div><GreetingContainer /></div>
             </header>
             
            <div className='business-map-container'>
                <div className='business-search-container'>
                    <BusinessIndex businesses={this.props.businesses} updateFilter={this.props.updateFilter} val={this.props.match.params.val} pos={this.props.match.params.pos}/> 
                </div>
                <div className='business-side'>
                    <BusinessMap businesses={this.props.businesses} singleBusiness={false} business='' updateFilter={this.props.updateFilter} />
               </div> 
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Search;