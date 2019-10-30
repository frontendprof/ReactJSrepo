import React from 'react'



const validation =(props)=>{
  let ValidationMessage="Text long enough";

  if(props.inputLength<=5){
    ValidationMessage="Text is too short";

  }

  return(
    <div>
    <p>{ValidationMessage}</p>

    </div>
  );

}

export default validation;