var React = require('react');
var Link = require("react-router-dom").Link;
var ProfilesDatabase = require('./ProfilesDatabase.js');
var NavBar = require('./NavBar.js')

function ReturnIndividualDisplay (props){
  if (props.params.query == null){
      var pageName =props.params.pathname.slice(9);
      for (var i=0; i<props.profiles.name.length; i++){
        if (props.profiles.name[i].replace(/\s+/g, '') == pageName){
          var individualProfileHoldingObject = {img: props.profiles.img[i], name: props.profiles.name[i], specialty: props.profiles.specialty[i]}
        }
      }
  }
  else{
    var individualProfileHoldingObject = {img: props.params.query.img, name: props.params.query.name, specialty: props.params.query.specialty}
  }
  return(
      <div>
        <img src={individualProfileHoldingObject.img}/>
        <h1> {individualProfileHoldingObject.name}</h1>
        <h2>{individualProfileHoldingObject.specialty}</h2>
      </div>
  )
}

class DisplayIndividualProfile extends React.Component{
  constructor(props) {
    super();
    this.state={
        profiles: null,
    }
  }
 componentDidMount () {
    this.setState(function () {
      return{
        profiles: ProfilesDatabase.returnProfiles()
      };
    })}

  render(){
    return(
      <div>
        <NavBar />
        {!this.state.profiles
          ?<p>Loading...</p>
          :<ReturnIndividualDisplay params={this.props.location} profiles={this.state.profiles} />}
      </div>
    )
  }
}

module.exports = DisplayIndividualProfile;