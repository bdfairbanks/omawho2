var React = require('react');
var Dropbox = require('./Dropbox.js');
var SpecialtiesDropdown = require('./SpecialtiesDropdown')
var NavBar = require('./NavBar.js')

class EditUser extends React.Component{
 constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div className="EditBox">
        <NavBar />
        <Dropbox />
        <h1> Edit Your OmahaWho Account</h1>
        <form className="editingForm">
          <label> First Name:<input type="text" />
            Last Name:<input type="text" />
            <SpecialtiesDropdown />
            Username: <input type="text"/>
            Password: <input type="password" />
            E-Mail: <input type="email" />
          </label>
        </form>
      </div>
      )
  }
};
module.exports= EditUser