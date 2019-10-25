import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state={
    username:'AbdulMalik FullStackPro'
  }


  userNameChangedHandler=event=>{
    this.setState({username:event.target.value});

  }

  render() {
    return (
      <div className="App">
        <h1>Pece be upon you. Welcome</h1>
        <UserInput changed={this.userNameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="AbdulMalik ML Engineer too!"/>
        
      </div>
    );
  }
}

export default App;
