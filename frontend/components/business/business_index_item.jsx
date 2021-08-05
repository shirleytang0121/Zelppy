import React from 'react';
import { Link } from 'react-router-dom';
import { FcCheckmark } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

class BusinessIndexItem extends React.Component{

    render(){
     const {business} = this.props
        return(
            <li>
                <Link to={`/businesses/${business.id}`}>
                <div className='business-index-item'>
                    <img src={business.photoUrls[0]} className='business-img'  /> 
                    <div className='business-index-info'>
                        <p className='business-index-title'>{business.name}</p> 
                        <p className='business-index-city'>{business.city}</p> 
                        <div>
                           {business.takeout? <p><FcCheckmark />takeout</p> : <p><IoClose />takeout</p>} 
                        </div> 
                    </div>  
                </div>
                </Link>
            </li>
        )
    }
}

export default BusinessIndexItem;