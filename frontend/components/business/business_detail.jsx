import React from 'react';

class BusinessDetail extends React.Component{

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render(){
        console.log(this.props)
        return(
            <div>
               {this.props.business.name}
            </div>
        )

    }
}


export default BusinessDetail;

