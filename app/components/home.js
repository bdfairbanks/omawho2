var React = require('react');
var Index = require('./Index');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route; 
var Profile = require('./IndividualProfile')
var Edit = require('./EditUser.js')
var Signs = require('./SignInOrUp.js')

class App extends React.Component {
  render(){
    return(
      <Router> 
        <div>
          <Route exact path='/' component={Index} />
          <Route path='/profile/:person' component={Profile} />
          <Route path='/edit' component={Edit} />
          <Route path='/sign' component={Signs} />
        </div>
      </Router>
      )
  }
}

module.exports = App;