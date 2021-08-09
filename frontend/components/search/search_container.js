import { connect } from "react-redux";
import { fetchAllBusinesses } from "../../actions/business_actions";
import Search from "./search";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({entities}) =>({
    businesses: Object.values(entities.businesses)
})



const mapDispatchToProps =(dispatch) =>({
    fetchAllBusinesses: ()=>dispatch(fetchAllBusinesses())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search))