import React from 'react';

class ReviewIndexItem extends React.Component{
    render(){
        const {review} = this.props
        return(
            <li>
                <div className='review-container'>
                    <p>{review.author.firstname}</p>
                    <p>{review.rating}</p>
                    <p>{review.body}</p>
                </div>
            </li>
        )
    }
}

export default ReviewIndexItem;