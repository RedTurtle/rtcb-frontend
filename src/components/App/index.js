import React, { Component } from 'react';
import './index.css';
import Header from '../Header';
import Homepage from '../Homepage';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
