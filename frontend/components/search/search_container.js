import { connect } from "react-redux";
import { fetchAllBusinesses } from "../../actions/business_actions";
import Search from "./search";
import { withRouter } from "react-router-dom";
import {updateFilter} from '../../actions/filter_actions'

const mapStateToProps = ({entities,filters}) =>({
    businesses: Object.values(entities.businesses),
    value: filters.value,
    position: filters.position
})



const mapDispatchToProps =(dispatch) =>({
    fetchAllBusinesses: ()=>dispatch(fetchAllBusinesses())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search))