import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

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
  return (
    <ListGroup>
      {studentListItems()}
    </ListGroup>
  )
}

export default StudentList;