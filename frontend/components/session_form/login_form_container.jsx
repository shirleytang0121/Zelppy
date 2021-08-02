import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import React from "react";
import { withRouter } from "react-router";

const mapStateToProps = ( {errors}) =>({
    user: {
        email:'',
        password: ''
    },
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign up instead</Link>
})


const mapDispatchToProps = (dispatch) => ({
    processForm: user=>dispatch(login(user))
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SessionForm))
