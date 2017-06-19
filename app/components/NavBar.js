var React = require('react');
var Link = require("react-router-dom").Link;


class NavBar extends React.Component{
  render(){
    return(
      <div className="NavBar">
        <Link className="NavLink" to={'/'}>Home </Link>
        <Link className="NavLink" to={'/edit'}>Edit </Link>
        <Link className="NavLink" to={'/sign'}>Signup/Signin</Link>  
      </div>
    )
  }
}
module.exports = NavBar