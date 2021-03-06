import React from 'react'
import ReactDOM from 'react-dom'
import '@atlaskit/css-reset'
import store from './store';
import App from './App.jsx'
import { Provider } from 'react-redux';


ReactDOM.render( < Provider store = { store } > < App /> </Provider>, document.getElementById('root'));