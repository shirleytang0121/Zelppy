import React from "react";
import GreetingContainer from '../greeting/greeting_container';
import { Link } from "react-router-dom";



class BusinessPhotoCreate extends React.Component{
    constructor(props){
        super(props);

        this.state={
            photos: null
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
        window.scrollTo(0, 0)
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
             <div>
                  <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleFile} multiple /> 
                    <button type='submit'>upload</button>
                    <button>cancel</button>
                </form>
            </div>
            </div>
        )
    }

}

export default BusinessPhotoCreate;