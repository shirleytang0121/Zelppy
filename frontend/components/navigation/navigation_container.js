import { connect } from "react-redux";
import { fetchAllBusinesses } from "../../actions/business_actions";
import Navigation from "./navigation";

const mapStateToProps = ()=>({

})

const mapDispatchToProps =(dispatch)=>({
     fetchAllBusinesses: search =>dispatch(fetchAllBusinesses(search))
})


export default connect(mapStateToProps,mapDispatchToProps)(Navigation)