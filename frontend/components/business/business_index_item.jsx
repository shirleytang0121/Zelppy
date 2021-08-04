import React from 'react';
import { Link } from 'react-router-dom';


class BusinessIndexItem extends React.Component{
    render(){
     const {business} = this.props
        return(
            <li>
                <Link to={`/businesses/${business.id}`}>
                <div className='business-index-item'>
                    <img src={business.photoUrls[0]} className='business-img'  /> 
                    <div className='business-index-info'>
                        <p>{business.name}</p> 
                        <p>{business.city}</p>  
                    </div>  
                </div>
                </Link>
            </li>
        )
    }
}

export default BusinessIndexItem;