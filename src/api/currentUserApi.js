class CurrentUserApi {
  static fetchCurrentUser() {
    return fetch('http://localhost:3000/fetchCurrentUser').then(response => {
      return response.json()
    }).then(currentUserPayload => {
      return currentUserPayload
    })
  }
}

export default CurrentUserApi