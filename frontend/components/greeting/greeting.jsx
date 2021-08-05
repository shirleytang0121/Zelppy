import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class Greeting extends React.Component{ 
    sessionLinks(){
        return(
         <nav className="login-signup">
             <Link to="/login">Login</Link>
             <Link to="/signup">SignUp</Link>
         </nav>
        )
     }
     personalGreeting(){
       return(
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {this.props.currentUser.firstname}!</h2>
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </hgroup>
       )
     }

     render(){
      return (
        <div>
            {this.props.currentUser ? this.personalGreeting() : this.sessionLinks()}
        </div>
      )
     }
    }



export default Greeting;