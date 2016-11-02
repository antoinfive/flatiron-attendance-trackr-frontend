import React, { Component } from 'react'
import StudentCalendar from '../studentCalendar'
import * as currentUserActions from '../../actions/currentUserActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class StudentCalendarContainer extends Component {
  
  componentDidMount(){
    this.props.fetchCurrentUser();
  }

  render () {
    return ( 
      <StudentCalendar />      
    )
  }

}

function mapStateToProps(state, ownProps) {
  debugger;
  return {currentStudent: state.currentUser, attendanceRecords: state.attendanceRecords }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(currentUserActions, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentCalendarContainer)
