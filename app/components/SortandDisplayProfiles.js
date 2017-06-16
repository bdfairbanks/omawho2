var React = require('react');
require('../index.css');
var PropTypes = require('prop-types');
var random =require("random-js")();
var Link = require("react-router-dom").Link;

// Takes the props.profiles,(an object containing arrays of objects needed
// to createprofiles) and does one of two things with them. If props.specialty 
// != All the arrays are either stored in a new object(profileHoldingObject) or ignored.
// If props.specialty== All, no sorting occured and all arrays of profile
// ingedients will be used.  In the next step a series of random numbers are
// chosen from a range, with the lowest number in that range equalling 0 and the
// highest equalling the amount of arrays -1 in either the profileHoldingObject object or
// the object referenced by props.profiles. This randomly generated list of numbers
// is then used to decide the rendering order of the profiles that appear on screen.

function SortandDisplayProfiles (props) {
  var profileHoldingObject = {img: [], name: [], specialty: []};
  var numberHoldingArray = [];
  if (props.currentSpecialty != "All"){
    for (var i=0; i<props.profiles.name.length; i++){
      if (props.profiles.specialty[i] == props.currentSpecialty){
        profileHoldingObject.img.push(props.profiles.img[i])
        profileHoldingObject.name.push(props.profiles.name[i])
        profileHoldingObject.specialty.push(props.profiles.specialty[i])
      }
    }
  }
  else{
    for (var i=0; i<props.profiles.name.length; i++){
        profileHoldingObject.img.push(props.profiles.img[i])
        profileHoldingObject.name.push(props.profiles.name[i])
        profileHoldingObject.specialty.push(props.profiles.specialty[i])
    }
  }
  for (var i=0; i<profileHoldingObject.name.length;){
    var num = random.integer(0, profileHoldingObject.name.length-1)
    if (numberHoldingArray.includes(num) == false){
      numberHoldingArray.push(num);
      i++
    }
  }
  return(
    <div className="mainPageProfiles">
      {numberHoldingArray.map(function (x){
        return( 
          <div key={profileHoldingObject.name[x]} className={profileHoldingObject.specialty[x]}>          
            <Link className="link" to={{ pathname: '/profile/'+profileHoldingObject.name[x].replace(/\s+/g, ''), query: { img: profileHoldingObject.img[x], name: profileHoldingObject.name[x], specialty: profileHoldingObject.specialty[x] } }}>
              <img src={profileHoldingObject.img[x]} className="profilePic"/>
              <h1>{profileHoldingObject.name[x]}</h1>
              <h1>{profileHoldingObject.specialty[x]}</h1>
            </Link>
          </div>
        )})}
   </div>
  )  
} 

module.exports = SortandDisplayProfiles