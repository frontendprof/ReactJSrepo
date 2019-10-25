import React from 'react';


const userInput=props=>{

  const style={
    border:'2px solid orange'
    
  };


  return <input type="text" 
  onChange={props.changed}
  value={props.currentName}
  style={style}
  />;

}

export default userInput;