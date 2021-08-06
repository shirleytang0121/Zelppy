import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component{
   componentDidMount(){
        this.props.fetchAllReviews(this.props.businessId)
   }

    render(){
        console.log(this.props.reviews)
        return(
            <div>
                <ul>
                    {this.props.reviews.map( review =><ReviewIndexItem key={review.id} review={review}/> )}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex;