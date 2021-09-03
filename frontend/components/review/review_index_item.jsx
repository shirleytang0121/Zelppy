import React from 'react';

class ReviewIndexItem extends React.Component{

    constructor(props){
        super(props)
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteReview(this.props.review);
    }
    
    render(){
        const {review,userId} = this.props
        return(
            <li>
                <div className='review-index-container'>
                    <p className='reviewer'>{review.author.firstname} {review.author.lastname}</p>
                    {userId === review.userId ? 
                    <button onClick={this.handleDelete}>delete</button> : null
                     }
                    
                    <div className='review-index-stars'>
                        <img src={window.starURL} className={`review-index-${review.rating}stars`}/> 
                    </div>
                       <p className='review-date'>{review.createdAt.slice(0,10)}</p>
                       <p className='review-body'>{review.body}</p>  
                       <div className='review-photo-container'>{review.photoUrls.map((photo,idx)=> <img src={photo} key={idx} className='review-photo'/>)}</div> 
                </div>
            </li>
        )
    }
}

export default ReviewIndexItem;