var React = require('react');
require('../index.css');
var PropTypes = require('prop-types');
var random =require("random-js")();
var Link = require("react-router-dom").Link
var BuildGrid = require("./BuildGrid.js")

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
// This component is the main element of this page.  It containes the state (profiles, 
// specialty) that allows information to be passed the the above functions.  It
// includes pickSpecialty, the chunck of the component that allows specific specialties
// to be selected.  Finaily ProfileDisplay contains the render call that renders the 
// ChooseSpecialty and BuildGrid functions and gives them the props they need to function.
class ProfileDisplay extends React.Component{
  constructor(props) {
    super();
    this.state= {
      profiles: {
        0:["/app/profiles/profile.jpg", "Ben", "Fairbanks", "Web and Software"],
        1:["/app/profiles/profile2.jpg", "Sumeet", "Jain", "Graphic Design"],
        2:["/app/profiles/profile3.jpg", "Bob", "Silversteen", "Architecture and Interior Design"],
        3:["/app/profiles/profile4.jpg", "Suzy", "Creamcheese", "Photography"],
        4:["/app/profiles/profile5.jpg", "John", "Debut", "Music Film and Art"],
        5:["/app/profiles/profile6.jpg", "Thad", "Prefect", "Fashion"],
        6:["/app/profiles/profile7.jpg", "Jenny", "Allimony", "Writing"],
        7:["/app/profiles/profile8.jpg", "Horseface", "John", "Venture Capital"],
        8:["/app/profiles/profile9.jpg", "Tret", "Stevenson", "Community Connector"],
        9:["/app/profiles/profile10.jpg", "Sherry", "Black", "Non-Profit"],
        10:["/app/profiles/profile11.jpg", "Aluise", "LaMont", "Sales and Marketing"],
      },
      specialty: "All",
    };
    this.pickSpecialty = this.pickSpecialty.bind(this);
  }

  pickSpecialty(spesh) {
    this.setState(function () {
      return{
       specialty: spesh
      }
    })
  }
  render(){
    return (
      <div>
      <ChooseSpecialty onSelect={this.pickSpecialty}
        specialty={this.state.specialty}/>
        <BuildGrid profiles={this.state.profiles} specialty={this.state.specialty} />
      </div>
      )
  }
}

ChooseSpecialty.PropTypes = {
  specialty: PropTypes.string.isRequired,
  pickSpecialty: PropTypes.func.isRequired,
};

module.exports = ProfileDisplay