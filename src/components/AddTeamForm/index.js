import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { debug } from 'util';

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

class AddTeamForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defender: { id: '', name: '' },
      name: '',
      striker: { id: '', name: '' },
    };
  }

  handleChangeSelect = field => {
    return e => {
      let player = e;

      this.setState({
        [field]: { id: player.value, name: player.label },
      });
    };
  };

  handleChangeInput = e => {
    let input = e.target.value;
    this.setState({ name: input });
  };

  render() {
    return (
      <Query query={playersQuery}>
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

          const players = data.players.edges.map(el => ({
            label: `${el.node.firstName} ${el.node.lastName}`,
            value: el.node.id,
          }));

          return (
            <form>
              <div className="form-group">
                <label htmlFor="team-name">Nome</label>
                <input
                  className="form-control"
                  id="team-name"
                  name="team-name"
                  placeholder="Indica un nome"
                  value={this.state.name}
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="team-defender">Difensore</label>
                <Select
                  id="team-defender"
                  name="team-defender"
                  value={this.state.defender.name}
                  onChange={this.handleChangeSelect('defender')}
                  options={players}
                />
              </div>
              <div className="form-group">
                <label htmlFor="team-striker">Attaccante</label>
                <Select
                  id="team-striker"
                  name="team-striker"
                  value={this.state.striker.name}
                  onChange={this.handleChangeSelect('striker')}
                  options={players}
                />
              </div>
            </form>
          );
        }}
      </Query>
    );
  }
}

export default AddTeamForm;
