module.exports = {
   prepareIndividualProfile: function (props) {
   if (props.params.query == null){
      for (var i=0; i<Object.keys(props.profiles).length; i++){
        if (props.profiles[i][1].replace(/\s+/g, '') == props.params){
          var individualProfileHoldingObject = 
          { img: props.profiles[i][0], 
            name: props.profiles[i][1], 
            specialty: props.profiles[i][2]}
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