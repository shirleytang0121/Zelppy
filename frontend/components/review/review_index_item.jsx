import React from 'react';

class ReviewIndexItem extends React.Component{
    render(){
        const {review} = this.props
        return(
            <li>
                <div className='review-container'>
                    <p>{review.author.firstname} {review.author.lastname}</p>
                    <div className='review-index-stars'>
                        <img src={window.starURL} className={`review-index-${review.rating}stars`}/> 
                    </div>
                       <p>{review.createdAt.slice(0,10)}</p>
                        <p>{review.body}</p>
                    
                </div>
            </li>
        )
    }
}

export default ReviewIndexItem;