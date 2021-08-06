import React from 'react'

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rating: 0,
            price_range: '',
            body: '',
            user_id: this.props.userId,
            business_id: this.props.match.params.businessId
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log(this.state)
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createReview(this.state)
        .then(res => {history.push(`/businesses/${this.props.match.params.businessId}`)})
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }


    render(){
        if(this.props.business === undefined) return null;
        return(
            <div>
                <h1>{this.props.business.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.rating} onChange={this.update('rating')}/>
                    <select onChange={this.update('price_range')}>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                    </select>
                    <input type="textarea" value={this.state.body} onChange={this.update('body')}/>
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default ReviewForm