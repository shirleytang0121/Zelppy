import React from 'react';

class BusinessDetail extends React.Component{

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render(){
        if(this.props.business === undefined) return null;
        return(
            <div >
               {this.props.business.name}
               {this.props.business.address}
               {this.props.business.city}
               {this.props.business.website}
               {this.props.business.phoneNumber}
            </div>
        )

    }
}


export default BusinessDetail;

