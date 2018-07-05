import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Header from '../Header';
import Homepage from '../Homepage';
import Calendario from '../Calendario';
import Giocatori from '../Giocatori';
import Squadre from '../Squadre';
import Squadra from '../Squadra';
import Footer from '../Footer';
import { client } from '../../graphql/client';
import Giocatore from '../Giocatore';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route path="/calendar" render={() => <Calendario />} />
            <Route
              exact
              path="/teams"
              render={props => <Squadre {...props} />}
            />
            <Route path="/teams/:id" render={Squadra} />
            <Route
              exact
              path="/players"
              render={props => <Giocatori {...props} />}
            />
            <Route path="/players/:id" render={Giocatore} />
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
