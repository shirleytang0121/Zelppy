import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component{
   componentDidMount(){
        this.props.fetchAllReviews(this.props.businessId)
   }

    render(){
        return(
            <div className='review-index-container'>
                <ul>
                    {this.props.reviews.map( review =><ReviewIndexItem key={review.id} review={review} deleteReview={this.props.deleteReview} userId={this.props.userId}/> )}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex;