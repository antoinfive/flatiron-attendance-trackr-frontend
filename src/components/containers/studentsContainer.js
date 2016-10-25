import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as instructorActions from '../../actions/instructorActions';
import StudentList from '../studentList';

class StudentsContainer extends React.Component {
  componentDidMount() {
    if (this.props.students.length == 0) {
      this.props.actions.fetchStudents();
    }

  }

  render() {
    return ( 
      <div className="col-lg-4">
        <h2>Students</h2>
        <StudentList students={this.props.students} selectedStudent={this.props.selectedStudent} selectStudent={this.props.selectStudent}/>
      </div>

    )
  }
}

function mapStateToProps(state) {
  if (state.currentUser.instructor && state.students.length > 0) {    
    return {students: state.students}
  } else {
    return {students: []}
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(instructorActions, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentsContainer);

