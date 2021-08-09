import React from 'react';
import BusinessIndexItem from './business_index_item';


class BusinessIndex extends React.Component{
    componentDidMount(){
        this.props.fetchAllBusinesses()
    }

    render(){
        return(
            <div>
               
                <ul>
                    <p>All Results</p>
                    {this.props.businesses.map(business => <BusinessIndexItem key={business.id} business={business}/>)}
                </ul>
            </div>
        )
    }
}

export default BusinessIndex;