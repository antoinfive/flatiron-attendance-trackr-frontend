import React from 'react';
import { Calendar } from 'react-bootstrap-calendar'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currentUserActions from '../../actions/currentUserActions'
import * as attendanceRecordActions from '../../actions/attendanceRecordActions'


class ScheduleContainer extends React.Component {
  componentWillMount() {
    if (Object.keys(this.props.currentUser).length === 0) {
      this.props.actions.fetchCurrentUser();
    }

    if (this.props.attendanceRecords.length == 0) {
      this.props.actions.fetchAttendanceRecords();
    }

    // if current use is admin, also get students

  }
  render() {

    const currentUser = this.props.currentUser
    const attendanceRecords = this.props.attendanceRecords.map((record) => { 
      return <p key={record.id}>{record}</p>
    })
    return ( 
      <div>
        <div> {currentUser.first_name} </div>
        <div> {attendanceRecords} </div>
        
      </div>

    )
  }
}

function mapStateToProps(state, ownProps) {
  return {currentUser: state.currentUser, attendanceRecords: state.attendanceRecords}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Object.assign(currentUserActions, attendanceRecordActions), dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);
