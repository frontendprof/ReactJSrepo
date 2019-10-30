import React, { Component } from 'react';

import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state={
    username: ""
  }


  inputChangedHandler=event=>{
    this.setState({username:event.target.value});
  }

  deleteCharHandler=index=>{
    const text=this.state.username.split('');
    text.splice(index,1);
    const updatedText=text.join('');
    this.setState({username:updatedText});


  }


  render() {
    const charList=this.state.username.split('').map((ch,index)=>{
      return <Char character={ch}
       key={index}
       clicked={()=>this.deleteCharHandler(index)}  />;

    });

    return (
      <div className="App">
        
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <input onChange={this.inputChangedHandler} value={this.state.username} />
        <p>{this.state.username}</p>
        <Validation inputLength={this.state.username.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
