import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function currentUserReducer(state = initialState.currentUser, action) {
  switch(action.type) {
    case types.FETCH_CURRENT_USER_SUCCESS:
      return action.payload;
    default: 
      return state;
  }
}