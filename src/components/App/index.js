import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header';
import Homepage from '../Homepage';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route path="/calendar" render={() => <h1>Calendario</h1>} />
          <Route path="/teams" render={() => <h1>Squadre</h1>} />
          <Route path="/players" render={() => <h1>Giocatori</h1>} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
