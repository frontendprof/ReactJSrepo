import React from "react";
import "./UserOutput.css"

const userOutput = (props) => {
  return(
    <div className="UserOutput">
      <p>First Paragraph. My name is {props.name}</p>
      
      <p>Second line starts from here. O {props.name}!</p>
      <hr></hr>
    </div>
  )
}

export default userOutput;
