var React = require('react');
require('../index.css');
var PropTypes = require('prop-types');
var random =require("random-js")();
var Link = require("react-router-dom").Link

// Takes the props.profiles,(an object containing arrays of objects needed
// to createprofiles) and does one of two things with them. If props.specialty 
// != All the arrays are either stored in a new object(profileHolder) or ignored.
// If props.specialty== All, no sorting occured and all arrays of profile
// ingedients will be used.  In the next step a series of random numbers are
// chosen from a range, with the lowest number in that range equalling 0 and the
// highest equalling the amount of arrays -1 in either the profileHolder object or
// the object referenced by props.profiles. This randomly generated list of numbers
// is then used to decide the rendering order of the profiles that appear on screen.

function BuildGrid (props) {
   if (props.specialty == "All") {

    var numHolder = [];
    var number = 0;
    var length = Object.keys(props.profiles).length;
    for (var i=0; i< length;){
      var num = random.integer(0, length-1)
      if (numHolder.includes(num) == false){
          numHolder.push(num);
          i++;
      }
    }
    return(
      <div className="mainPageProfiles">
        {numHolder.map(function (x){
          var fullName = props.profiles[x][1] + props.profiles[x][2]
          return( 
            <div key={props.profiles[x][1]} className={props.profiles[x][3]}>          
              <Link className="link" to={{ pathname: '/profile/'+fullName, query: { query: props.profiles[x] } }}>
                <img src={props.profiles[x][0]} className="profilePic"/>
                <h1>{props.profiles[x][1]} {props.profiles[x][2]}</h1>
                <h1>{props.profiles[x][3]}</h1>
              </Link>
            </div>
          )})}
     </div>
    )  
  }
  else{
    var profileHolder = [];
    var numHolder = [];
    for (i=0; i<Object.keys(props.profiles).length; i++){
      if (props.profiles[i][3] == props.specialty){
        profileHolder.push(props.profiles[i])
      }
    }
    profileHolder.map(function (x){
      var num = random.integer(0, Object.keys(profileHolder).length-1)
      if (numHolder.includes(num) == false){
        numHolder.push(num)
      } 
    })
    return(
       <div className="mainPageProfiles">
        {numHolder.map(function (x){
          var fullName = [profileHolder][x][1] + profileHolder[x][2]
          return(
          <div key={profileHolder[x][1]} className={profileHolder[x][3]}>
          <Link className="link" to={{ pathname: '/profile/'+fullName, query: { query: profileHolder[x] } }}>
              <img src={profileHolder[x][0]} className="profilePic"/>
              <h1>{profileHolder[x][1]} {profileHolder[x][2]}</h1>
              <h1>{profileHolder[x][3]}</h1>
          </Link>
          </div>
          )})}
     </div>
    )
  }
} 

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