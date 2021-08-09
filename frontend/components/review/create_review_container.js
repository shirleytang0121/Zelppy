import { connect } from "react-redux";
import { createReview, fetchAllReviews } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions"
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    formType: 'Post Review',
    userId: state.session.id,
    
})

const mapDispatchToProps = (dispatch) =>({
    createReview: (review)=>dispatch(createReview(review)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchAllReviews: (businessId) =>dispatch(fetchAllReviews(businessId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);