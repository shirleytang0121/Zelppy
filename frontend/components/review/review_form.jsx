import React from 'react'
import { Link } from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container'

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rating: 0,
            price_range: '',
            body: '',
            user_id: this.props.userId,
            business_id: this.props.match.params.businessId,
            // photos: null,
            // photoUrls:null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.hoverLeave =this.hoverLeave.bind(this)
        // this.handleFile =this.handleFile.bind(this)
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    navigateToBusiness(){
        this.props.history.push(`/businesses/${this.props.match.params.businessId}`)
    }

    // handleFile(e){
    //     const file = e.currentTarget.files[0]
    //     const fileReader =new FileReader()
    //     const files_arr=Object.values(files)
    //     fileReader.onloadend =()=>{
    //         this.setState({photos: file, photoUrls: fileReader.result})
    //     }

    //     if (files) {
    //         fileReader.readAsDataURL(files);
    //     }

    // }

    handleSubmit(e){
        e.preventDefault()
        this.props.createReview(this.state)
        this.navigateToBusiness()
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }
     
    hoverStars(rating){
        let star1 = document.getElementById("star1");
        let star2 = document.getElementById("star2");
        let star3 = document.getElementById("star3");
        let star4 = document.getElementById("star4");
        let star5 = document.getElementById("star5");
        if(rating===0){
            star1.className = 'star1-0';
            star2.className = 'star2-0';
            star3.className = 'star3-0';
            star4.className = 'star4-0';
            star5.className = 'star5-0';
        }else if(rating===1){
            star1.className = 'star1-1';
            star2.className = 'star2-1';
            star3.className = 'star3-1';
            star4.className = 'star4-1';
            star5.className = 'star5-1';
        }else if(rating===2){
            star1.className = 'star1-2';
            star2.className = 'star2-2';
            star3.className = 'star3-2';
            star4.className = 'star4-2';
            star5.className = 'star5-2';
        }else if(rating===3){
            star1.className = 'star1-3';
            star2.className = 'star2-3';
            star3.className = 'star3-3';
            star4.className = 'star4-3';
            star5.className = 'star5-3';
        }else if(rating===4){
            star1.className = 'star1-4';
            star2.className = 'star2-4';
            star3.className = 'star3-4';
            star4.className = 'star4-4';
            star5.className = 'star5-4';
        }else if(rating===5){
            star1.className = 'star1-5';
            star2.className = 'star2-5';
            star3.className = 'star3-5';
            star4.className = 'star4-5';
            star5.className = 'star5-5';
        }
    }


    hoverLeave(e){
        let star1 = document.getElementById("star1");
        let star2 = document.getElementById("star2");
        let star3 = document.getElementById("star3");
        let star4 = document.getElementById("star4");
        let star5 = document.getElementById("star5");
        let rating = e.currentTarget.value
        if(rating===0){
            star1.className = 'star1-0';
            star2.className = 'star2-0';
            star3.className = 'star3-0';
            star4.className = 'star4-0';
            star5.className = 'star5-0';
        }else if(rating===1){
            star1.className = 'star1-1';
            star2.className = 'star2-1';
            star3.className = 'star3-1';
            star4.className = 'star4-1';
            star5.className = 'star5-1';
        }else if(rating===2){
            star1.className = 'star1-2';
            star2.className = 'star2-2';
            star3.className = 'star3-2';
            star4.className = 'star4-2';
            star5.className = 'star5-2';
        }else if(rating===3){
            star1.className = 'star1-3';
            star2.className = 'star2-3';
            star3.className = 'star3-3';
            star4.className = 'star4-3';
            star5.className = 'star5-3';
        }else if(rating===4){
            star1.className = 'star1-4';
            star2.className = 'star2-4';
            star3.className = 'star3-4';
            star4.className = 'star4-4';
            star5.className = 'star5-4';
        }else if(rating===5){
            star1.className = 'star1-5';
            star2.className = 'star2-5';
            star3.className = 'star3-5';
            star4.className = 'star4-5';
            star5.className = 'star5-5';
        }

    }

    
    render(){
        console.log(this.state)
        if(this.props.business === undefined) return null;
        return(
            <div className='review-form-container'>
                <header className='business-header'>
                    <Link to='/' className='business-title'><img src={window.logoURL} className='business-logo' /></Link>
                    <GreetingContainer />
                </header>
                <Link to={`/businesses/${this.props.business.id}`}> <h1 className='review-business-name'>{this.props.business.name}</h1></Link> 
              <div className='review-box'>
                <form onSubmit={this.handleSubmit}>
                   <div className='rating-box'>
                        <input type="radio" value='1' onChange={this.update('rating')} name='rate' id="star1" onMouseEnter={()=>this.hoverStars(1)} onMouseLeave={this.hoverLeave} />
                        <input type="radio" value='2' onChange={this.update('rating')} name='rate' id="star2" onMouseEnter={()=>this.hoverStars(2)} onMouseLeave={this.hoverLeave} />
                        <input type="radio" value='3' onChange={this.update('rating')} name='rate' id="star3" onMouseEnter={()=>this.hoverStars(3)} onMouseLeave={this.hoverLeave} />
                        <input type="radio" value='4' onChange={this.update('rating')} name='rate' id="star4" onMouseEnter={()=>this.hoverStars(4)} onMouseLeave={this.hoverLeave} />
                        <input type="radio" value='5' onChange={this.update('rating')} name='rate' id="star5" onMouseEnter={()=>this.hoverStars(5)} onMouseLeave={this.hoverLeave} />
                    </div>
                    <div>
                        <select onChange={this.update('price_range')} className='price-range'>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                        </select>
                    </div>
                    <div>
                        <textarea name='textarea' value={this.state.body} onChange={this.update('body')}/>
                    </div>
                    {/* <input type="file" onChange={this.handleFile} multiple/> */}
                    <input type="submit" value={this.props.formType} className='review-btn'/>
                </form>
                </div>
            </div>
        )
    }
}

export default ReviewForm