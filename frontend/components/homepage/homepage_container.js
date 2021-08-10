import { connect } from "react-redux";
import { fetchAllBusinesses } from "../../actions/business_actions";
import HomePage from "./homepage";

const mapDispatchToProps = (dispatch) =>({
    fetchAllBusinesses: (search)=>dispatch(fetchAllBusinesses(search))
})

export default connect(null,mapDispatchToProps)(HomePage)