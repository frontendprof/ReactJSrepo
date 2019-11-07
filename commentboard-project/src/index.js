import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'



const App=()=>{

  return (
    <div className="ui container comments">

    <CommentDetail 
    author="AbdulMalik" 
    timeAgo="Today at 9:15AM" 
    blogText="Some random generated blog post" 
    blogImage={faker.image.avatar()}
    />
    <CommentDetail 
     author="Sokhiba"
     timeAgo="Today at 6:15PM"
     blogText="Blog post about leading healthy life style"
     blogImage={faker.image.avatar()}
      />
    < CommentDetail 
    author="Sumayya"
    timeAgo="Yesterday at 2:15AM"
    blogText="Advanced aqida and arabic grammer classes"
    blogImage={faker.image.avatar()}
    />
      


      
    </div>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));