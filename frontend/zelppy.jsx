import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store.js'
import {login, logout} from '../frontend/actions/session_actions'
import { fetchAllBusinesses, fetchBusiness } from './actions/business_actions';
import { fetchAllReviews, createReview, deleteReview } from './actions/review_actions';
import Root from './root'


document.addEventListener('DOMContentLoaded',()=>{
    let store;
    if (window.currentUser) {
      const preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
    window.store =store;
    // window.login = login;
    // window.logout = logout;
    // window.fetchAllBusinesses = fetchAllBusinesses;
    // window.fetchBusiness = fetchBusiness;
    window.fetchAllReviews=fetchAllReviews;
    window.createReview = createReview;
    window.deleteReview = deleteReview;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})