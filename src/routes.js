import React from 'react'
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/common/HomePage';


export default (
  <Route path="/" component={App}>
    <IndexRouter component={HomePage} />
   </Route> 
)
