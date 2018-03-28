import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Header from '../Header';
import Homepage from '../Homepage';
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
            <Route path="/players" render={() => <h1>Giocatori</h1>} />
            <Query
              query={gql`
                {
                  players {
                    edges {
                      node {
                        id
                        firstName
                        lastName
                      }
                    }
                  }
                }
              `}
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return data.players.edges.map(({ node }) => (
                  <div key={node.id}>
                    <p>
                      {node.firstName} {node.lastName}
                    </p>
                  </div>
                ));
              }}
            </Query>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
