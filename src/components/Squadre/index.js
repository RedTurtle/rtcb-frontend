import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TeamsList from '../TeamsList';
import matchSorter from 'match-sorter';
import AddModal from '../AddModal';
import './index.css';

const teamsQuery = gql`
  {
    teams {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

class Squadre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamPattern: '',
    };
  }

  onType = e => {
    let pattern = e.currentTarget.value;
    this.setState(() => ({
      teamPattern: pattern,
    }));
  };

  render() {
    return (
      <div className="squadre container">
        <h1>Squadre</h1>
        <div className="search-add-wrapper">
          <input
            value={this.state.teamPattern}
            onChange={this.onType}
            placeholder="Cerca una squadra..."
            type="text"
            className="form-control"
          />
          <AddModal btnLabel="squadra" />
        </div>
        <div className="squadre-list list-group">
          <Query query={teamsQuery}>
            {({ loading, error, data }) => {
              if (loading) {
                return <p>Loading...</p>;
              }
              if (error) {
                return (
                  <p>
                    Error{' '}
                    <span role="img" aria-label="FeelsMadMan">
                      😱
                    </span>
                  </p>
                );
              }

              return (
                <TeamsList
                  teams={matchSorter(
                    data.teams.edges.map(el => el.node),
                    this.state.teamPattern,
                    { keys: ['id', 'name', 'striker', 'defender'] },
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

export default Squadre;
