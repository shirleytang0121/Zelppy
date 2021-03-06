import { connect } from "react-redux";
import {fetchBusiness } from '../../actions/business_actions'
import BusinessDetail from "./business_detail";
import { withRouter } from "react-router-dom";
import { updateFilter } from "../../actions/filter_actions";
import { fetchAllReviews } from "../../actions/review_actions";
import { updateBusiness } from "../../actions/business_actions";

const mapStateToProps = (state, ownProps)=>({
     business: state.entities.businesses[ownProps.match.params.businessId],
})


const mapDispatchToProps = (dispatch) =>({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    updateFilter: (filter,value)=>dispatch(updateFilter(filter,value)),
    fetchAllReviews: (businessId) =>dispatch(fetchAllReviews(businessId)),
    updateBusiness: (business,businessId) => dispatch(updateBusiness(business,businessId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessDetail))