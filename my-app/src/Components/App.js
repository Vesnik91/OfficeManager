import React, { Component } from 'react';
import '../Styles/App.css';
import Header from './header/Header.js';
import Content from './content/Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
