import { connect } from "react-redux";
import { fetchAllReviews } from "../../actions/review_actions";
import ReviewIndex from "./review_index";

const mapStateToProps = (state, {businessId}) =>({
    reviews: Object.values(state.entities.reviews),
    businessId: businessId
    
})


const mapDispatchToProps = (dispatch) =>({
    fetchAllReviews: (businessId) =>dispatch(fetchAllReviews(businessId))
})


export default connect(mapStateToProps,mapDispatchToProps)(ReviewIndex)