import React from 'react';

class BusinessIndexItem extends React.Component{
    render(){
     const {business} = this.props
        return(
            <li>
                <div className='business-index-item'>
                    <p>{business.name}</p> 
                    <p>{business.city}</p> 
                    <img src={business.photoUrls[0]} className='business-img'  /> 
                </div>
            </li>
        )
    }
}

export default BusinessIndexItem;