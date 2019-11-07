import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import { cpus } from 'os';


const App=()=>{

  return (
    <div className="ui container comments">

    <CommentDetail author="AbdulMalik"/>
    <CommentDetail author="Sokhiba"/>
    < CommentDetail author="Sumayya"/>
      


      
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));