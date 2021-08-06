import React from "react";
// import GreetingContainer from './components/greeting/greeting_container'
import {Switch, Link, Route} from 'react-router-dom'
import LoginFormContainer from './components/session_form/login_form_container'
import SignupFormContainer from './components/session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from "./util/route.util";
import HomePage from "./components/homepage/homepage";
import BusinessIndexContainer from './components/business/business_index_container'
import BusinessDetailContainer from './components/business/business_detail_container'
import CreateReviewContainer from './components/review/create_review_container'

const App = () => (
  <div className='app'>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/businesses/:businessId/reviews/new" component={CreateReviewContainer}/>
        <Route exact path="/businesses/:businessId" component={BusinessDetailContainer}/>
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        <Route path="/" component={HomePage}/>
      </Switch>
      
  </div>
);

export default App;