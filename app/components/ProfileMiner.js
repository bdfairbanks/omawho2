module.exports = {
   prepareIndividualProfile: function (props) {
   if (props.params.query == null){
      for (var i=0; i<props.profiles.name.length; i++){
        if (props.profiles.name[i].replace(/\s+/g, '') == props.params){
          var individualProfileHoldingObject = 
          { img: props.profiles.img[i], 
            name: props.profiles.name[i], 
            specialty: props.profiles.specialty[i]}
        }
      }
  }
  else{
    var individualProfileHoldingObject = 
    { img: props.params.query.img, 
      name: props.params.query.name, 
      specialty: props.params.query.specialty}
  }
  return individualProfileHoldingObject
  }
}