var React = require('react');
require('../index.css');
var PropTypes = require('prop-types');
var random =require("random-js")();
var Link = require("react-router-dom").Link;

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
    var profileHolder = [];
    var numHolder = [];
    if (props.specialty != "All"){
      for (var i=0; i<Object.keys(props.profiles).length; i++){
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
    }
    else{
      for (var i=0; i<Object.keys(props.profiles).length; i++){
        profileHolder.push(props.profiles[i])
      }
       profileHolder.map(function (x){
        var num = random.integer(0, Object.keys(profileHolder).length-1)
        if (numHolder.includes(num) == false){
          numHolder.push(num)
        }})
    }
      return(
      <div className="mainPageProfiles">
        {numHolder.map(function (x){
          var fullName = profileHolder[x][1] + profileHolder[x][2]
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

module.exports = BuildGrid