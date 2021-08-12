import { connect } from "react-redux";
import { fetchAllBusinesses } from "../../actions/business_actions";
import { updateFilter } from "../../actions/filter_actions";
import HomePage from "./homepage";

const mapDispatchToProps = (dispatch) =>({
    fetchAllBusinesses: (search)=>dispatch(fetchAllBusinesses(search)),
    updateFilter: (filter,value)=>dispatch(updateFilter(filter,value))
})

export default connect(null,mapDispatchToProps)(HomePage)