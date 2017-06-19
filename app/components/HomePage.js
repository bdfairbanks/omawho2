var React = require('react');
require('../index.css');
var PropTypes = require('prop-types');
var random =require("random-js")();
var Link = require("react-router-dom").Link
var SortandDisplayProfiles = require("./SortandDisplayProfiles.js");
var ChangeSpecialty = require('./ChangeSpecialty');
var ProfilesDatabase = require('./ProfilesDatabase.js');
var NavBar = require('./NavBar.js')

// This component is the main element of this page.  It containes the state (profiles, 
// specialty) that allows information to be passed the the above functions.  It
// includes pickSpecialty, the chunck of the component that allows specific specialties
// to be selected.  Finaily ProfileDisplay contains the render call that renders the 
// ChooseSpecialty and BuildGrid functions and gives them the props they need to function.
class HomePage extends React.Component{
  constructor(props) {
    super();
    this.state= {
      profiles: null,
      currentSpecialty: "All",
    };
    this.pickSpecialty = this.pickSpecialty.bind(this);
  }
    componentDidMount () {
    this.setState(function () {
      return{
        profiles: ProfilesDatabase.returnProfiles()
      };
    })}
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
        <NavBar />
        {!this.state.profiles
          ?<p>Loading...</p>
          :<SortandDisplayProfiles profiles={this.state.profiles} currentSpecialty={this.state.currentSpecialty} />}
      </div>

      )
  }
}

ChangeSpecialty.PropTypes = {
  currentSpecialty: PropTypes.string.isRequired,
  pickSpecialty: PropTypes.func.isRequired,
};

module.exports = HomePage