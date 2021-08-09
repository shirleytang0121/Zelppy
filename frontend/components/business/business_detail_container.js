import { connect } from "react-redux";
import {fetchBusiness } from '../../actions/business_actions'
import BusinessDetail from "./business_detail";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps)=>({
     business: state.entities.businesses[ownProps.match.params.businessId],
})


const mapDispatchToProps = (dispatch) =>({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessDetail))