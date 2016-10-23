class InstructorApi {
  static fetchStudents() {
    return fetch('http://localhost:3000/fetchStudents').then(response => {
      return response.json()
    }).then(students => {
      return students
    })
  }
}

export default InstructorApi;