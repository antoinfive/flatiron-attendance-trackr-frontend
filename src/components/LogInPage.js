import React from 'react';
const LEARN_ID = '2d449768e541f8932723a03138bc1cbc6087f3513fa3a2bc2520f7a6b143e341' 
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