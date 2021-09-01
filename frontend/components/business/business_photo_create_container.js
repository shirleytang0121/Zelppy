import { connect } from "react-redux";
import BusinessPhotoCreate from "./business_photo_create";
import { fetchBusiness } from "../../actions/business_actions";
import { updateBusiness } from "../../actions/business_actions";


const mapStateToProps = (state, ownProps)=>({
    business: state.entities.businesses[ownProps.match.params.businessId]
})

const mapDispatchToProps = (dispatch) =>({
    updateBusiness: (business, businessId)=>dispatch(updateBusiness(business,businessId)),
    fetchBusiness: (businessId)=>dispatch(fetchBusiness(businessId))
})


export default connect(mapStateToProps,mapDispatchToProps)(BusinessPhotoCreate);