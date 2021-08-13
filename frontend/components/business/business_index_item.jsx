import React from 'react';
import { Link } from 'react-router-dom';
import { FcCheckmark } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

class BusinessIndexItem extends React.Component{

    renderRate(){
        const {business} = this.props;
        const rate = business.averageRating
        if(rate>4.5){
            return(
                <div className='review-index-stars'>
                    <img src={window.starURL} className={`review-index-5stars`}/> 
                </div>
            )
        }else if(rate>3.5){
            return(
                <div className='review-index-stars'>
                    <img src={window.starURL} className={`review-index-4stars`}/> 
                </div>
            )
        }else if(rate>2.5){
            return(
                <div className='review-index-stars'>
                    <img src={window.starURL} className={`review-index-3stars`}/> 
                </div>
            )
        }else if(rate>1.5){
            return(
                <div className='review-index-stars'>
                    <img src={window.starURL} className={`review-index-2stars`}/> 
                </div>
            )
        }else if(rate>0.5){
            return(
                <div className='review-index-stars'>
                    <img src={window.starURL} className={`review-index-1stars`}/> 
                </div>
            )
        }else{
            return(
                <div className='review-index-stars'>
                  <img src={window.starURL} className={`review-index-0stars`}/> 
                </div>
            )
        }
    }

    renderTag(){
        const {business} = this.props;
        const categories = business.categories;
        return categories.map( (cate,idx) =>  <p key={idx}>{cate.category_name}</p> )
    }

    render(){
     const {business} = this.props

        return(
            <li className='business-index-list'>
                <Link to={`/businesses/${business.id}`}>
                <div className='business-index-item'>
                    <img src={business.photoUrls[0]} className='business-img'  /> 
                    <div className='business-index-info'>
                        <p className='business-index-title'>{this.props.idx}.{business.name}</p>
                        <div className='review-container'>{this.renderRate()} </div>
                        <div className='business-index-tags'>{this.renderTag()}</div>
                        <p className='business-index-city'>{business.city}</p> 
                        <div className='business-index-takeout'>
                           {business.takeout? <p><FcCheckmark />takeout</p> : <p><IoClose />takeout</p>} 
                           {business.delivery? <p><FcCheckmark />delivery</p> : <p><IoClose />delivery</p>} 
                           {business.outdoor? <p><FcCheckmark />outdoor eating</p> : <p><IoClose />outdoor eating</p>} 
                        </div> 
                    </div>  
                </div>
                </Link>
            </li>
        )
    }
}

export default BusinessIndexItem;