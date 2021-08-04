import React from 'react';
import BusinessIndexItem from './business_index_item';
import GreetingContainer from '../greeting/greeting_container'

class BusinessIndex extends React.Component{
    componentDidMount(){
        this.props.fetchAllBusinesses()
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <GreetingContainer />
                <ul>
                    {this.props.businesses.map(business => <BusinessIndexItem key={business.id} business={business}/>)}
                </ul>
            </div>
        )
    }
}

export default BusinessIndex;