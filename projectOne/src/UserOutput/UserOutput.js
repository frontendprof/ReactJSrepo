import React from 'react';

import './UserOutput.css';

const userOutput=(props)=>{
  return(
    <div className='UserOutput'>
      <p>First row for {props.userName}</p>
      <p>Second row for future reference</p>
   
    </div>
  );
}

export default userOutput;
