module.exports = {
   prepareIndividualProfile: function (props) {
   if (props.params.query == null){
      for (var i=0; i<Object.keys(props.profiles).length; i++){
        if (props.profiles[i].Name.replace(/ /g, '').toLowerCase() == props.params){
          var individualProfileHoldingObject = 
          { img: props.profiles[i].Image, 
            name: props.profiles[i].Name, 
            specialty: props.profiles[i].Specialty}
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