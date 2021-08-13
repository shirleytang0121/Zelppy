import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'
import { MdLaunch } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import ReviewIndexContainer from '../review/review_index_container'; 
import BusinessMap from '../map/business_map';
import SearchBar from '../search/search_bar';
import Footer from '../footer/footer';


class BusinessDetail extends React.Component{
    constructor(props){
        super(props)

        this.state={
            show: false,
            photos: null
        }
       
       
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile =this.handleFile.bind(this)
        this.handleAllPhotos=this.handleAllPhotos.bind(this)
    }

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

    handleFile(e){
        const files = e.currentTarget.files
        const fileReader =new FileReader()
        this.setState({photos: files})
    }

    handleSubmit(e){
        e.preventDefault();
        const { name,address,city,state,zip_code,phone_number,website,lat,lng,delivery,takeout, outdoor } = this.props.business;
        const { photos } =this.state;
        const formData = new FormData();
        
      
        formData.append("business[name]", name);
        formData.append("business[address]", address);
        formData.append("business[city]", city);
        formData.append("business[state]", state);
        formData.append("business[zip_code]", zip_code);
        formData.append("business[phone_number]", phone_number);
        formData.append("business[website]", website);
        formData.append("business[lat]", lat);
        formData.append("business[lng]", lng);
        formData.append("business[delivery]", delivery);
        formData.append("business[takeout]", takeout);
        formData.append("business[outdoor]", outdoor);

        for (let i = 0; i < photos.length; i++) {
            formData.append("business[photos][]", photos[i]);
          }
      
        this.props.updateBusiness(formData,this.props.match.params.businessId)
           .then( this.setState({show: !this.state.show}))
        
    }

    handleShow(){
        this.setState({show: !this.state.show})
    }

    renderUpload(){
        if(this.state.show){
        return(
            <div className='upload-photo'>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleFile} multiple /> 
                    <button type='submit'>upload</button>
                    <button onClick={()=>this.handleShow()}>cancel</button>
                </form>
            </div>
        )}else{
            return null
        }
    }

    handleAllPhotos(){
        this.props.history.push(`/businesses/${this.props.match.params.businessId}/photos`)
    }

    render(){
        if(this.props.business === undefined) return null;
        const {business} = this.props
        console.log(this.state)
        return(
            <div >
                <header className='business-header'>
                 <div className='title-box'>
                    <Link to='/' className='business-title'><img src={window.logoURL} className='business-logo' /></Link>
                </div>
                <div className='search-box'><SearchBar updateFilter={this.props.updateFilter} type='sub-search'/></div>
                <div><GreetingContainer /></div>
             </header>
                <div>
                    {/* {business.photoUrls.map( (url,idx)=> <img src={url} key={idx} className='business-detail-img'/>)} */}
                    <img src={business.photoUrls[0]}  className='business-detail-img'/>
                    <img src={business.photoUrls[1]}  className='business-detail-img'/>
                    <img src={business.photoUrls[2]}  className='business-detail-img'/>
                </div>
               <h1 className='business-detail-title'>{business.name}</h1>
                    <div className='business-detail-subtitle'>
                        <div className='review-container'>{this.renderRate()} </div>
                        <div className='business-index-tags'>{this.renderTag()}</div>
                        <button className='all-photo-btn' onClick={this.handleAllPhotos}>All Photos</button>
                    </div>
               <div className='business-detail-container'>
                <div>
                   <div className='business-detail-buttons'>
                       <button className='review-btn'><Link to={`/businesses/${business.id}/reviews/new`}>Write a Review</Link></button>
                        <button className='photo-btn'onClick={()=>this.handleShow()}>Add Photo</button>
                        {this.renderUpload()}
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
               <Footer/>
            </div>
        )

    }
}


export default BusinessDetail;

