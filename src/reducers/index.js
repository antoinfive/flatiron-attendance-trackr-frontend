import {combineReducers} from 'redux';
import currentUser from './currentUserReducer'
import attendanceRecords from './attendanceRecordsReducer'

const rootReducer = combineReducers({
  currentUser,
  attendanceRecords
})

export default rootReducer;