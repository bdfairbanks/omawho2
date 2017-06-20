var React = require('react');
var NavBar = require('./NavBar.js')

class SignInOrUp extends React.Component{
  render(){
    return(
      <div className="SignInOrUp">
      <NavBar />
        <form className="SignIn">
          <h1>Sign In to Your Account</h1>
            <label>
              E-Mail: <input type="email" />
              Password: <input type="password" />
            </label>
          </form>
          <form className="SignUp">
            <h1>Or Create Your Own Account!</h1>
            <label>
              Username: <input type="text" />
              E-Mail: <input type="email" />
              Password: <input type="password" />
            </label>
          </form>
        </div>
    )
  }
}

module.exports = SignInOrUp