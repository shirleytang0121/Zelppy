import React from "react";
// import GreetingContainer from './components/greeting/greeting_container'
import {Switch, Link, Route} from 'react-router-dom'
import LoginFormContainer from './components/session_form/login_form_container'
import SignupFormContainer from './components/session_form/signup_form_container'
import { AuthRoute } from "./util/route.util";
import HomePage from "./components/homepage/homepage";

const App = () => (
  <div className='app'>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path="/" component={HomePage}/>
      </Switch>
      
  </div>
);

export default App;