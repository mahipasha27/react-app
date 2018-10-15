import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input-component/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           chenna kesava App
           <Header></Header>
           <Input/>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Header extends Component{
  render(){
    return(
      <h1>First Component</h1>
    )
  }
}

export default App;
