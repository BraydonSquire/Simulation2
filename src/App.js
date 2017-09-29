import React, { Component } from 'react';
import Router from './Router'
import './App.css';
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      
      <div className="parent-container">
        
        {Router}

      </div>
      </div>
    );
  }
}

export default App;
