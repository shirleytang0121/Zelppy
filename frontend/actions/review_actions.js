import * as ReviewsAPIUtil from '../util/review_api_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const recieveReviews =(reviews)=>({
    type: RECEIVE_REVIEWS,
    reviews
})


const recieveReview = (review)=>({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = (review) =>({
    type: REMOVE_REVIEW,
    review
})


export const fetchAllReviews=(businessId)=>(dispatch)=>(
    ReviewsAPIUtil.fetchAllReviews(businessId)
        .then(reviews => dispatch(recieveReviews(reviews)))
)


export const createReview = (businessId, review) => dispatch =>(
    ReviewsAPIUtil.createReview(businessId,review)
     .then(review => dispatch(recieveReview(review)))
)

export const updateReview = (review) => dispatch =>(
    ReviewsAPIUtil.updateReview(review)
     .then(review => dispatch(recieveReview(review)))
)

export const deleteReview = (review) => dispatch =>(
    ReviewsAPIUtil.deleteReview(review)
     .then( review => dispatch(removeReview(review)))
)