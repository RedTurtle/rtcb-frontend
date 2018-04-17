import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import matchSorter from 'match-sorter';
import './styles.css';
import PlayersList from '../PlayersList';

const playersQuery = gql`
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
`;

class Giocatori extends Component {
  state = {
    searchValue: '',
  };

  onInputChange = event => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    const { match } = this.props;

    return (
      <div className="giocatori">
        <div className="container">
          <h1>Giocatori</h1>
          <input
            type="text"
            placeholder="Cerca un giocatore&hellip;"
            onChange={this.onInputChange}
          />
          <Query query={playersQuery}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error)
                return (
                  <p>
                    Error{' '}
                    <span role="img" aria-label="FeelsBadMan">
                      😭
                    </span>
                  </p>
                );

              return (
                <PlayersList
                  url={match.url}
                  players={matchSorter(
                    data.players.edges.map(({ node }) => node),
                    this.state.searchValue,
                    {
                      keys: ['lastName', 'firstName'],
                    },
                  )}
                />
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default Giocatori;
