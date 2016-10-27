import React from 'react'
import {ListGroup, ListGroupItem, Tabs, Tab} from 'react-bootstrap'

const StudentList = (props) => {
  function triggerSelectStudent(e) {
    e.preventDefault();
    props.selectStudent(e.target.id)
  }
  function studentListItems() {
    return props.students.map((student, i) => {
      return <ListGroupItem 
                key={i} 
                onClick={triggerSelectStudent} 
                id={student.id}
                active={(props.selectedStudent && student.id == props.selectedStudent.id) ? true : false}>
                  {student.first_name} {student.last_name}
                </ListGroupItem>
    })
  }

  function absentStudentListItems() {
    const absentStudents = props.students.filter((student) => {
      return props.absentStudentIds.includes(student.id)
    })
    return absentStudents.map((student, i) => {
      return <ListGroupItem 
                key={i} 
                onClick={triggerSelectStudent} 
                id={student.id}
                active={(props.selectedStudent && student.id == props.selectedStudent.id) ? true : false}>
                  {student.first_name} {student.last_name}
                </ListGroupItem>
    })
  }

  function studentListGroup() {
    return (
      <ListGroup style={{height: '400px', maxHeight: '400px', overflowY: 'scroll'}}>
        {studentListItems()}
      </ListGroup>
    )
  }

  function absentStudentListGroup() {
    return (
      <ListGroup style={{height: '400px', maxHeight: '400px', overflowY: 'scroll'}}>
        {absentStudentListItems()}
      </ListGroup>
    )
  }
  return (
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="late/absent">{absentStudentListGroup()}</Tab>
      <Tab eventKey={2} title="all">{studentListGroup()}</Tab>
    </Tabs>
  )
}

export default StudentList;
