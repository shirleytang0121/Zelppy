import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) => ({
    formType: 'Create Review',
    review: {
        body:'',
        rating: 0,
        priceRange: '',
        userId: state.session.id,
        businessId: parseInt(ownProps.match.params.businessId)
    }
})

const mapDispatchToProps = (dispatch) =>({
    createReview: (businessId, review)=>dispatch(createReview(businessId,review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);