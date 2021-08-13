import React from "react";
import { withRouter, Link } from "react-router-dom";
import Footer from "../footer/footer";
import GreetingContainer from '../greeting/greeting_container'
import SearchBar from '../search/search_bar'

class BusinessPhotos extends React.Component{
    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }
    
    render(){
        if(this.props.business === undefined) return null;
        return(
            <div>
                <header className='business-header'>
                 <div className='title-box'>
                    <Link to='/' className='business-title'><img src={window.logoURL} className='business-logo' /></Link>
                </div>
                <div className='search-box'><SearchBar updateFilter={this.props.updateFilter} type='sub-search'/></div>
                <div><GreetingContainer /></div>
             </header>
                 <div className='all-photos'>
                    
                    <Link to={`/businesses/${this.props.match.params.businessId}`} > <h1>{`Photos for ${this.props.business.name}`}</h1></Link>
            
                <div>
                  {this.props.business.photoUrls.map( (url,idx)=> <img src={url} key={idx} className='business-photo-show'/>)}
                </div>    
            </div>
            <Footer/>
          </div>
        )
    }
    
}

export default withRouter(BusinessPhotos)