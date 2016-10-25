import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

const StudentList = (props) => {
  function studentListItems() {
    return props.students.map((student, i) => {
      return <ListGroupItem key={i}>{student.first_name} {student.last_name}</ListGroupItem>
    })
  }
  debugger;
  return (
    <ListGroup>
      {studentListItems()}
    </ListGroup>
  )
}

export default StudentList;