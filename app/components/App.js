var React = require('react');
var Index = require('./HomePage');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route; 
var DisplayIndividualProfile = require('./DisplayIndividualProfile')
var EditUser = require('./EditUser.js')
var SignUp = require('./SignInOrUp.js')
var NotFoundRoute = Router.NotFoundRoute;
var PageNotFound = require('./PageNotFound.js') 

class App extends React.Component {
  render(){
    return(
      <Router> 
        <div>
          <Route exact path='/' component={Index} />
          <Route path='/profile/:person' component={DisplayIndividualProfile} />
          <Route path='/edit' component={EditUser} />
          <Route path='/sign' component={SignUp} />
          <Route path='*' component={PageNotFound} />
        </div>
      </Router>
      )
  }
}

module.exports = App;