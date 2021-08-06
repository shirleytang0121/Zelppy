import React from 'react';

class ReviewIndex extends React.Component{
   componentDidMount(){
        this.props.fetchAllReviews(this.props.businessId)
   }

    render(){
        console.log(this.props.reviews)
        return(
            <div>
                <ul>
                    {this.props.reviews.map( review => <li>{review.body}</li>)}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex;