import React from "react";
import GreetingContainer from './components/greeting/greeting_container'
import {Switch, Link, Route} from 'react-router-dom'

import LoginFormContainer from './components/session_form/login_form_container'
import SignupFormContainer from './components/session_form/signup_form_container'
import { AuthRoute } from "./util/route.util";

const App = () => (
  <div className='app'>
      <header className='app-header'>
      <GreetingContainer />  
      </header>
      <Link to='/'> <h1>Zelppy</h1> </Link>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
      
  </div>
);

export default App;