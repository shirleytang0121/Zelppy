import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'
import { MdLaunch } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import ReviewIndexContainer from '../review/review_index_container'; 
import BusinessMap from '../map/business_map';
import SearchBar from '../search/search_bar'


class BusinessDetail extends React.Component{

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
        this.props.fetchAllReviews(this.props.match.params.businessId)
    }

    renderHours(){
        if(this.props.business.hours === undefined){
            return null
        }else{
            return this.props.business.hours.map( (hour,idx) => <li key={idx}><div>{hour.date}</div> <div>{hour.open} - {hour.close}</div></li>)
        }
    }

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
        if(this.props.business === undefined) return null;
        const {business} = this.props
        return(
            <div >
                <header className='business-header'>
                    <Link to='/' className='business-title'><img src={window.logoURL} className='business-logo' /></Link>
                    <SearchBar updateFilter={this.props.updateFilter} type='sub-search'/>
                    <GreetingContainer />
                </header>
                <div>
                    {business.photoUrls.map( (url,idx)=> <img src={url} key={idx} className='business-detail-img'/>)}
                </div>
               <h1 className='business-detail-title'>{business.name}</h1>
                    <div className='business-detail-subtitle'>
                        <div className='review-container'>{this.renderRate()} </div>
                        <div className='business-index-tags'>{this.renderTag()}</div>
                    </div>
               <div className='business-detail-container'>
                <div>
                   <div className='business-detail-buttons'>
                       <button className='review-btn'><Link to={`/businesses/${business.id}/reviews/new`}>Write a Review</Link></button>
                        {/* <button>Photo</button> */}
                   </div>
                       <div>
                            <p className='hour-title'>{`Location & Hours`}</p>
                            <div className='business-detail-box'>
                                <BusinessMap businesses='' singleBusiness={true} business={business}/>
                                <ul className='hours'>
                                    {this.renderHours()}
                                </ul>
                            </div>
                       </div>
                       <p className='review-title'>Reviews</p>
                       <ReviewIndexContainer businessId={business.id}/>
                   </div>
                   <div>
                    <div className='business-detail-info'>
                            <p>{business.address} {business.city},{business.state} {business.zipCode}</p>
                            <p><a href={business.website}>Website <MdLaunch /> </a></p>
                            <p>{business.phoneNumber} <BiPhoneCall /></p>
                    </div>
                    </div>
               </div>
            </div>
        )

    }
}


export default BusinessDetail;

