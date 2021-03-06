import React from "react";
import GreetingContainer from '../greeting/greeting_container';
import { Link } from "react-router-dom";

import { AiFillCamera } from "react-icons/ai";
import Footer from "../footer/footer";

class BusinessPhotoCreate extends React.Component{
    constructor(props){
        super(props);

        this.state={
            photos: [],
            url:[]
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
        window.scrollTo(0, 0)
    }


    handleFile(e){
        
        let files = e.currentTarget.files;

        for(let i=0;i<files.length;i++){
            let reader = new FileReader();
            reader.onloadend = () => {
                this.setState({    
                    photos: [...this.state.photos, files[i]],
                    url: [...this.state.url, reader.result]
                });
            }
            reader.readAsDataURL(files[i]);
        
        }

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
      
        this.props.updateBusiness(formData,this.props.match.params.businessId);
        this.navigateBack()
        
    }


    navigateBack(){
        this.props.history.push(`/businesses/${this.props.match.params.businessId}`)
    }


    renderPreview(){
        if(this.state.url.length!==0){
            return(
                <div >
                    {this.state.url.map((url,i)=> <img src={url} key={i} className='preview-photo'></img>)}
                </div>
            )
        }else{
            return (
                <div className='camera-icon'>
                    <AiFillCamera/>
                </div>
            )
        } 
    }
    


    render(){
        if(this.props.business === undefined) return null;
       
        return(
            <div>
            <header className='business-header'>
                 <div className='title-box'>
                    <Link to='/' className='business-title'><img src={window.logoURL} className='business-logo' /></Link>
                </div>
                <div><GreetingContainer /></div>
             </header>
             <Link to={`/businesses/${this.props.business.id}`}> <h1 className='review-business-name'>{this.props.business.name}</h1></Link> 
             <div className='photo-upload-div'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='preview'>
                  {this.renderPreview()}
                    <label className='photo-upload-label'>
                        Upload
                        <input type="file" onChange={this.handleFile} className='photo-upload-btn' multiple /> 
                    </label>
                    </div>
                    <button type='submit' className='photo-submit-btn'>submit</button>
                    <button onClick={()=>this.navigateBack()} className='photo-cancel-btn'>cancel</button>
                </form>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default BusinessPhotoCreate;