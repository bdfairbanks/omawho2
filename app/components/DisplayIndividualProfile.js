var React = require('react');
var ProfilesDatabase = require('./ProfilesDatabase.js');
var NavBar = require('./NavBar.js')
var ProfileMiner = require('./ProfileMiner.js')
var PageNotFound = require('./PageNotFound.js')

function ReturnIndividualDisplay (props){
     var individualProfileHoldingObject = ProfileMiner.prepareIndividualProfile(props)
     if (individualProfileHoldingObject == null){
      return(
        <div>
          <PageNotFound />
        </div>
        )
      
     }
  return(
      <div>
        <NavBar />
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
        {!this.state.profiles
          ?<p>Loading...</p>
          :!this.props.location.query
              ?<ReturnIndividualDisplay params={this.props.match.params.person} profiles={this.state.profiles} />
              :<ReturnIndividualDisplay params={this.props.location} profiles={this.state.profiles} />}
      </div>
    )
  }
}

module.exports = DisplayIndividualProfile;