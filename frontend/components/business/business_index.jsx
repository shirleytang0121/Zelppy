import React from 'react';
import BusinessIndexItem from './business_index_item';
import GreetingContainer from '../greeting/greeting_container'
import { Link } from 'react-router-dom';

class BusinessIndex extends React.Component{
    componentDidMount(){
        this.props.fetchAllBusinesses()
    }

    render(){
        return(
            <div>
                <header className='business-header'>
                    <Link to='/' className='business-title'><img src={window.logoURL} className='business-logo' /></Link>
                    <GreetingContainer />
                </header>
                <ul>
                    <p>All Results</p>
                    {this.props.businesses.map(business => <BusinessIndexItem key={business.id} business={business}/>)}
                </ul>
            </div>
        )
    }
}

export default BusinessIndex;