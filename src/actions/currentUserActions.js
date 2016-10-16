import * as types from './actionTypes';
import currentUserApi from '../api/currentUserApi';

function fetchCurrentUserSuccess(payload) {
  return {type: types.FETCH_CURRENT_USER_SUCCESS, payload: payload}
}

export function fetchCurrentUser() {
  return function(dispatch) {
    return currentUserApi.fetchCurrentUser().then(currentUserPayload => {
      dispatch(fetchCurrentUserSuccess(currentUserPayload))
    })
  }
}

