import React from 'react';


class BusinessIndexItem extends React.Component{
    render(){
     const {business} = this.props
        return(
            <li>
                <div className='business-index-item'>
                    <img src={business.photoUrls[0]} className='business-img'  /> 
                    <div className='business-index-info'>
                        <p>{business.name}</p> 
                        <p>{business.city}</p>  
                    </div>  
                </div>
            </li>
        )
    }
}

export default BusinessIndexItem;