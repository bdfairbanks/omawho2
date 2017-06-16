var React = require('react');

class SpecialtiesDropdown extends React.Component{
 constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
          <div>
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
          </div>
      )
  }
};
module.exports= SpecialtiesDropdown