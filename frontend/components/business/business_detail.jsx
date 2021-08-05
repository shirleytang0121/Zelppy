import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'

class BusinessDetail extends React.Component{

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render(){
        if(this.props.business === undefined) return null;
        return(
            <div >
                <header className='business-header'>
                    <Link to='/' className='business-title'>Zelppy</Link>
                    <GreetingContainer />
                </header>
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

