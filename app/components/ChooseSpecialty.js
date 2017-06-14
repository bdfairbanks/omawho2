var React = require('react');
require('../index.css');
var PropTypes = require('prop-types');

// This function generates a list of specialites to be displayed on the screen.
// When clicked each specialty will turn red and launch a function. 
function ChooseSpecialty (props){
 var specialties = ["All", "Web and Software", "Graphic Design", "Architecture and Interior Design", "Photography", "Music Film and Art", "Fashion", "Writing", "Venture Capital", "Community Connector", "Non-Profit", "Sales and Marketing"]
  return(
    <ul className='choiceBox'>
      {specialties.map(function (spesh) {
        return(
          <li key={spesh}
          onClick={props.onSelect.bind(null, spesh)}
            style={spesh === props.specialty ? {color: '#d0021b'} : null}>
            {spesh}
          </li>
        )
      })}
    </ul>
  )
}

module.exports = ChooseSpecialty;