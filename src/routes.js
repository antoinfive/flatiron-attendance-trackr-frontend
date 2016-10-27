import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/common/HomePage';
import LogInPage from './components/LogInPage';
import auth from './auth/authenticator';
import ScheduleContainer from './components/containers/scheduleContainer'

export default (
  <Route path="/" component={App}>
    <Route path="/login" component={LogInPage} />
    <IndexRoute component={ScheduleContainer} onEnter={authenticate}/>
   </Route> 
);

function authenticate(nextState, replace, callback) {
  auth.loggedIn().then(function(loggedIn) {
      if (!loggedIn) {
        replace({
          pathname: '/login',
          state: { nextPathname: nextState.location.pathname }
        })
      }
      callback();
  });
}

