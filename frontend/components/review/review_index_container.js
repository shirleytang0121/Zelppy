import { connect } from "react-redux";
import { deleteReview, fetchAllReviews} from "../../actions/review_actions";
import ReviewIndex from "./review_index";

const mapStateToProps = (state, {businessId}) =>({
    reviews: Object.values(state.entities.reviews),
    businessId: businessId,
    userId: state.session.id
    
})


const mapDispatchToProps = (dispatch) =>({
    fetchAllReviews: (businessId) =>dispatch(fetchAllReviews(businessId)),
    deleteReview: (review) => dispatch(deleteReview(review))
})


export default connect(mapStateToProps,mapDispatchToProps)(ReviewIndex)