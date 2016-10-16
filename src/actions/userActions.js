function getCurrentUser() {
  let currentUserPayload = fetch('http://localhost:3000/fetchCurrentUser').then(response => {
    return response.json()
  }).then(currentUserPayload => {
    return currentUserPayload
  })

  return {type: 'FETCH_CURRENT_USER_SUCCESS', payload: currentUserPayload}
}