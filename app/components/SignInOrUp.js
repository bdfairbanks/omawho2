var React = require('react');
var Link = require("react-router-dom").Link;

class SignInOrUp extends React.Component{
  render(){
    return(
      <div className="SignInOrUp">
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