import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from "../actions/review_actions";

const reviewsReducr =(oldState={}, action)=>{
    Object.freeze(oldState)
    switch(action.type){
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, {[action.review.id]: action.review})
        case REMOVE_REVIEW:
            const nextState = Object.assign({}, oldState)
            delete nextState[action.review.id]
            return nextState
        default:
            return oldState
    }
}


export default reviewsReducr;