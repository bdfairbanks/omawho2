var React = require('react');
var Index = require('./HomePage');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route; 
var Profile = require('./DisplayIndividualProfile')
var EditUser = require('./EditUser.js')
var SignUp = require('./SignInOrUp.js')

class App extends React.Component {
  render(){
    return(
      <Router> 
        <div>
          <Route exact path='/' component={Index} />
          <Route path='/profile/:person' component={Profile} />
          <Route path='/edit' component={EditUser} />
          <Route path='/sign' component={SignUp} />
        </div>
      </Router>
      )
  }
}

module.exports = App;