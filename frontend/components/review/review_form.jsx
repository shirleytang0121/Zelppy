import React from 'react'

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
        if(rating===1){

        }
    }


    render(){
        if(this.props.business === undefined) return null;
        return(
            <div >
                <h1>{this.props.business.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="radio" value='1' onChange={this.update('rating')} name='rate' id="star1" onMouseEnter={()=>this.hoverStars(1)} onMouseLeave={()=>this.hoverStars(0)}/>
                    <input type="radio" value='2' onChange={this.update('rating')} name='rate' id="star2" onMouseEnter={()=>this.hoverStars(2)} onMouseLeave={()=>this.hoverStars(0)}/>
                    <input type="radio" value='3' onChange={this.update('rating')} name='rate' id="star3" onMouseEnter={()=>this.hoverStars(3)} onMouseLeave={()=>this.hoverStars(0)}/>
                    <input type="radio" value='4' onChange={this.update('rating')} name='rate' id="star4" onMouseEnter={()=>this.hoverStars(4)} onMouseLeave={()=>this.hoverStars(0)}/>
                    <input type="radio" value='5' onChange={this.update('rating')} name='rate' id="star5" onMouseEnter={()=>this.hoverStars(5)} onMouseLeave={()=>this.hoverStars(0)}/>
                   
                    <select onChange={this.update('price_range')}>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                    </select>
                    <input type="textarea" value={this.state.body} onChange={this.update('body')}/>
                    {/* <input type="file" onChange={this.handleFile} multiple/> */}
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default ReviewForm