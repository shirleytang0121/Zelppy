import React from "react";
import GreetingContainer from './components/greeting/greeting_container'
import { Switch, Route, Link } from "react-router";
import LoginFormContainer from './components/session_form/login_form_container'
import SignupFormContainer from './components/session_form/signup_form_container'

const App = () => (
  <div>
      <header>
          <GreetingContainer />
          <h1>Zelppy Routes</h1>
      </header>
      <Switch>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
      </Switch>
      
  </div>
);

export default App;