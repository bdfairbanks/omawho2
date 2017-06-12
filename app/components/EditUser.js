var React = require('react');
var Link = require("react-router-dom").Link;
import Dropzone from 'react-dropzone';
var Dropbox = require('./Dropbox.js');

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
            Specialty:
            <select>
             <option>Web and Software</option> 
             <option>Graphic Design</option>
             <option>Architecture and Interior Design</option> 
             <option>Photography</option> 
             <option>Music Film and Art</option> 
             <option>Fashion</option>
             <option>Writing</option>
             <option>Venture Capital</option>
             <option>Community Connector</option>
             <option>Non-Profit</option>
             <option>Sales and Marketing</option>
            </select>
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