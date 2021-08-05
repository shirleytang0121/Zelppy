import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'
import { MdLaunch } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

class BusinessDetail extends React.Component{

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    renderHours(){
        if(this.props.business.hours === undefined){
            return null
        }else{
            return this.props.business.hours.map( (hour,idx) => <li key={idx}>{hour.date}   {hour.open} - {hour.close}</li>)
        }
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
               <h1 className='business-detail-title'>{business.name}</h1>
               <div className='business-detail-container'>
                   <div>
                       <p>Hours</p>
                       <ul>
                          {this.renderHours()}
                       </ul>
                   </div>
                   <div className='business-detail-info'>
                        <p>{business.address} {business.city},{business.state} {business.zipCode}</p>
                        <a href={business.website}> Website <MdLaunch /> </a>
                        <p>{business.phoneNumber} <BiPhoneCall /></p>
                    </div>
               </div>
            </div>
        )

    }
}


export default BusinessDetail;

