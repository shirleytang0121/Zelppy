import { connect } from "react-redux";
import {fetchBusiness } from '../../actions/business_actions'
import BusinessDetail from "./business_detail";
import { withRouter } from "react-router-dom";
import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = (state, ownProps)=>({
     business: state.entities.businesses[ownProps.match.params.businessId],
})


const mapDispatchToProps = (dispatch) =>({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    updateFilter: (filter,value)=>dispatch(updateFilter(filter,value))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessDetail))