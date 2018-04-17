import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Header from '../Header';
import Homepage from '../Homepage';
import Giocatori from '../Giocatori';
import Footer from '../Footer';
import { client } from '../../graphql/client';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route path="/calendar" render={() => <h1>Calendario</h1>} />
            <Route path="/teams" render={() => <h1>Squadre</h1>} />
            <Route path="/players" render={Giocatori} />
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
