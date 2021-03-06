import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import React from "react";


const mapStateToProps = ( {errors}) =>({
    user: {
        email:'',
        password: ''
    },
    errors: errors.session,
    formType: 'Login',
    navLink: <Link to="/signup">Sign up instead</Link>
})


const mapDispatchToProps = (dispatch) => ({
    processForm: user=>dispatch(login(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
