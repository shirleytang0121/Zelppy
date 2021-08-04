import React from 'react';

class BusinessIndex extends React.Component{
    componentDidMount(){
        this.props.fetchAllBusinesses()
    }

    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.businesses.map(business => business.name)}
            </div>
        )
    }
}

export default BusinessIndex;