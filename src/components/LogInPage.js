import React from 'react';
const LEARN_ID = '0618d1cfd3af7231504179389412d85a6981781151f66c910bea0bfd73e54f93' 
const REDIRECT_URI = 'http://localhost:5000/auth/learn/callback'
const URL = `https://learn.co/oauth/authorize?client_id=${LEARN_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`

const LogInPage = () => {
  return ( 
    <div className="jumbotron">
      <h1>Flatiron Attendance Tracker</h1>
      <a href={URL} className="btn btn-large"> log in with Learn </a>     
    </div>
  )
}; 

export default LogInPage