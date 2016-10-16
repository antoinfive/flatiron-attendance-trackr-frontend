import React from 'react';

class HomePage extends React.Component {
  componentWillMount() {
    fetch('http://localhost:3000/fetchCurrentUser').then(response => {
      return response.json()
    }).then(currentUserPayload => {
      console.log(currentUserPayload)
      return currentUserPayload
    })

  }
  render() {
    return ( 
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>...</p>
      </div>
    )
  }
}


export default HomePage;
