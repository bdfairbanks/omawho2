var React = require('react');
var Link = require("react-router-dom").Link;

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
        profiles: {
        img:["/app/profiles/profile.jpg", "/app/profiles/profile2.jpg", "/app/profiles/profile3.jpg", "/app/profiles/profile4.jpg", "/app/profiles/profile5.jpg", "/app/profiles/profile6.jpg", "/app/profiles/profile7.jpg", "/app/profiles/profile8.jpg", "/app/profiles/profile9.jpg", "/app/profiles/profile10.jpg", "/app/profiles/profile11.jpg",],
        name:[ "Ben Fairbanks", "Sumeet Jain", "Suzy Creamcheese", "John Debut", "Bob Silversteen", "Thad Prefect", "Jenny Allimony", "Horseface John", "Tret Stevenson", "Sherry Black", "Aluise LaMont"],
        specialty:["Web and Software", "Graphic Design", "Architecture and Interior Design","Photography", "Music Film and Art", "Fashion", "Writing", "Venture Capital", "Community Connector", "Non-Profit", "Sales and Marketing"],
      },
    }
  }

  render(){
    return(
      <div>
        <ReturnIndividualDisplay params={this.props.location} profiles={this.state.profiles}/>
      </div>
    )
  }
}

module.exports = DisplayIndividualProfile;