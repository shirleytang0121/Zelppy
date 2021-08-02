import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import React from "react";
import { withRouter } from "react-router";

const mapStateToProps = ( {errors}) =>({
    user: {
        email:'',
        password: '',
        firstname: '',
        lastname: ''
    },
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/signup">Login instead</Link>
})


const mapDispatchToProps = (dispatch) => ({
    processForm: user=>dispatch(signup(user))
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SessionForm))