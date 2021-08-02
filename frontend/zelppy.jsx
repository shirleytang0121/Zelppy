import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store.js'
import {login} from '../frontend/actions/session_actions'
import Root from './root'


document.addEventListener('DOMContentLoaded',()=>{
    let store = configureStore();
    // window.store =store;
    // window.login = login;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
})