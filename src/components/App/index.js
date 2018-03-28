import React, { Component } from 'react';
import Homepage from '../Homepage';
import Footer from '../Footer';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
