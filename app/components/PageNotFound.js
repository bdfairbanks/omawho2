var React = require('react');
var NavBar = require('./NavBar.js');

class PageNotFound extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        <h1> 404 </h1>
      </div>
    )
  }
}
module.exports = PageNotFound;