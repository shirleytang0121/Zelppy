import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'

class BusinessDetail extends React.Component{

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render(){
        if(this.props.business === undefined) return null;
        const {business} = this.props
        return(
            <div >
                <header className='business-header'>
                    <Link to='/' className='business-title'>Zelppy</Link>
                    <GreetingContainer />
                </header>
                <div>
                    {business.photoUrls.map( (url,idx)=> <img src={url} key={idx} className='business-detail-img'/>)}
                </div>
               {business.name}
               {business.address}
               {business.city}
               {business.website}
               {business.phoneNumber}
            </div>
        )

    }
}


export default BusinessDetail;

