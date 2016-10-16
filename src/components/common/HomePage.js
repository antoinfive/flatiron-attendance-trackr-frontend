import React from 'react';
const LEARN_ID = '0618d1cfd3af7231504179389412d85a6981781151f66c910bea0bfd73e54f93' 
const REDIRECT_URI = 'http://localhost:5000/auth/learn/callback'
const URL = `https://learn.co/oauth/authorize?client_id=${LEARN_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`

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
        <a href={URL} className="btn btn-large"> CLICK THE THINGS </a>     
      </div>
    )
  }
}
// const HomePage = () => {
//   function shouldComponentUpdate(nextProps, nextState) {
//     debugger;
//   }
//   return ( 
//     <div className="jumbotron">
//       <h1>Hello, world!</h1>
//       <p>...</p>
//       <a href={URL} className="btn btn-large"> CLICK THE THINGS </a>     
//     </div>
//   )
// }; 

export default HomePage;
