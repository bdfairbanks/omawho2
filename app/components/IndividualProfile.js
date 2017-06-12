var React = require('react');
var Link = require("react-router-dom").Link;

function GettingStuff (props){
  if (props.params.query == null){
      var pageName =props.params.pathname.slice(9);
      for (var i=0; i<Object.keys(props.profiles).length; i++){
        if (props.profiles[i][1]+props.profiles[i][2]==pageName){
         return(
          <div>
            <img src={props.profiles[i][0]} alt={props.profiles[i][0]}/>
            <h1> {props.profiles[i][1]} {props.profiles[i][2]}</h1>
            <h2>{props.profiles[i][3]}</h2>
          </div>
          )
        }
      }
  }
  else{
    return(
      <div>
        <img src={props.params.query.query[0]}/>
        <h1> {props.params.query.query[1]} {props.params.query.query[2]}</h1>
        <h2>{props.params.query.query[3]}</h2>
      </div>
      )
  }
}

class IndividualProfile extends React.Component{
  constructor(props) {
    super();
    this.state={
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
    }
  }

  render(){
    return(
      <div>
        <GettingStuff params={this.props.location} profiles={this.state.profiles}/>
      </div>
    )
  }
}

module.exports = IndividualProfile;