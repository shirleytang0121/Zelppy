import React from 'react'

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.review
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createReview(this.state.businessesId, this.state)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }


    render(){
        return(
            <div>
                <form>
                    <input type="textarea" value={this.state.body} />
                </form>
            </div>
        )
    }
}

export default ReviewForm