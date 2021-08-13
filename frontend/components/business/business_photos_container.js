import { connect } from "react-redux";
import {fetchBusiness } from '../../actions/business_actions'
import { withRouter } from "react-router-dom";
import { updateBusiness } from "../../actions/business_actions";
import BusinessPhotos from "./business_photos";

const mapStateToProps = (state, ownProps)=>({
     business: state.entities.businesses[ownProps.match.params.businessId],
})


const mapDispatchToProps = (dispatch) =>({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    updateBusiness: (business,businessId) => dispatch(updateBusiness(business,businessId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessPhotos))