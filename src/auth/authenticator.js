class Auth {
  static loggedIn() {
    return this._checkForSession().then(val => {
      return val
    })
  }

  static _checkForSession() {
    return fetch('http://localhost:3000/authenticate').then(res => {
      return res.json()
    }).then(res => {
      return res
    })
  }

  static logOut() {
    // sessionStorage.removeItem('jwt');
  }
}

export default Auth;