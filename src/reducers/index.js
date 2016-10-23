import {combineReducers} from 'redux';
import currentUser from './currentUserReducer';
import attendanceRecords from './attendanceRecordsReducer';
import students from './studentsReducer';

const rootReducer = combineReducers({
  currentUser,
  attendanceRecords,
  students
})

export default rootReducer;