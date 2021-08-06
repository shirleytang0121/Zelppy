import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const mapStateToProps = (state,ownProps) => ({
    ownProps
})

const mapDispatchToProps = (dispatch) =>({
    createReview: review=>dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)