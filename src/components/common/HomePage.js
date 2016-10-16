import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as currentUserActions from '../../actions/currentUserActions'
import * as attendanceRecordActions from '../../actions/attendanceRecordActions'

class HomePage extends React.Component {
  componentWillMount() {
    // if (Object.keys(this.props.currentUser).length === 0) {
    //   this.props.actions.fetchCurrentUser();
    // }

    // if (this.props.attendanceRecords.length == 0) {
    //   this.props.actions.fetchAttendanceRecords();
    // }

  }
  render() {
    return ( 
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>...</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
