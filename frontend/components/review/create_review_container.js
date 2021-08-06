import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions"
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.businessId],
    formType: 'Create Review',
    userId: state.session.id,
    
})

const mapDispatchToProps = (dispatch) =>({
    createReview: (businessId, review)=>dispatch(createReview(businessId,review)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);