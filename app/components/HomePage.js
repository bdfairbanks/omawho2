var React = require('react');
require('../index.css');
var PropTypes = require('prop-types');
var random =require("random-js")();
var Link = require("react-router-dom").Link
var SortandDisplayProfiles = require("./SortandDisplayProfiles.js")
var ChangeSpecialty = require('./ChangeSpecialty')


// This component is the main element of this page.  It containes the state (profiles, 
// specialty) that allows information to be passed the the above functions.  It
// includes pickSpecialty, the chunck of the component that allows specific specialties
// to be selected.  Finaily ProfileDisplay contains the render call that renders the 
// ChooseSpecialty and BuildGrid functions and gives them the props they need to function.
class HomePage extends React.Component{
  constructor(props) {
    super();
    this.state= {
      profiles: {
        img:["/app/profiles/profile.jpg", "/app/profiles/profile2.jpg", "/app/profiles/profile3.jpg", "/app/profiles/profile4.jpg", "/app/profiles/profile5.jpg", "/app/profiles/profile6.jpg", "/app/profiles/profile7.jpg", "/app/profiles/profile8.jpg", "/app/profiles/profile9.jpg", "/app/profiles/profile10.jpg", "/app/profiles/profile11.jpg",],
        name:[ "Ben Fairbanks", "Sumeet Jain", "Suzy Creamcheese", "John Debut", "Bob Silversteen", "Thad Prefect", "Jenny Allimony", "Horseface John", "Tret Stevenson", "Sherry Black", "Aluise LaMont"],
        specialty:["Web and Software", "Graphic Design", "Architecture and Interior Design","Photography", "Music Film and Art", "Fashion", "Writing", "Venture Capital", "Community Connector", "Non-Profit", "Sales and Marketing"],
      },
      currentSpecialty: "All",
    };
    this.pickSpecialty = this.pickSpecialty.bind(this);
  }

  pickSpecialty(spesh) {
    this.setState(function () {
      return{
       currentSpecialty: spesh
      }
    })
  }
  render(){
    return (
      <div>
      <ChangeSpecialty onSelect={this.pickSpecialty}
        currentSpecialty={this.state.currentSpecialty}/>
        <SortandDisplayProfiles profiles={this.state.profiles} currentSpecialty={this.state.currentSpecialty} />
      </div>
      )
  }
}

ChangeSpecialty.PropTypes = {
  currentSpecialty: PropTypes.string.isRequired,
  pickSpecialty: PropTypes.func.isRequired,
};

module.exports = HomePage