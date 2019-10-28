import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {

  state ={
    username:"Engineer"
  }

  changeNameEventHandler=event=>{
    this.setState({username:event.target.value});
  }

  render() {
    return (
      <div className="App">
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
        <UserInput changed={this.changeNameEventHandler} currentName={this.state.username} />
        <UserOutput name="AbdulMalik" />
        <UserOutput name="AbdulMalik"/>
        <UserOutput name={this.state.username}/>
      </div>
    );
  }
}

export default App;
