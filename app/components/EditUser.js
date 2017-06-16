var React = require('react');
var Link = require("react-router-dom").Link;
import Dropzone from 'react-dropzone';
var Dropbox = require('./Dropbox.js');
var SpecialtiesDropdown = require('./SpecialtiesDropdown')

class EditUser extends React.Component{
 constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div className="EditBox">
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