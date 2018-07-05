import gql from 'graphql-tag';
import * as React from 'react';
import CalendarResults from './CalendarResults';
import { TournamentsQuery } from './TournamentsQuery';

const tournamentsQuery = (id: string) => gql`
  {
    tournaments {
      edges {
        node {
          id
          name
        }
      }
    }
    ${!!id &&
      `tournament(id: "${id}") {
      name
    }`}
  }
`;

interface IState {
  selected: string;
}

export default class Calendario extends React.Component<{}, IState> {
  public state = {
    selected: '',
  };

  public render() {
    return (
      <TournamentsQuery query={tournamentsQuery(this.state.selected)}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }
          if (error || !data) {
            return (
              <p>
                Error&nbsp;
                <span role="img" aria-label="FeelsBadMan">
                  😭
                </span>
              </p>
            );
          }

          return (
            <div className="calendario container">
              <h1 className="title">Calendario</h1>
              <div className="tournament-selector">
                <form>
                  <label>
                    Torneo:&nbsp;
                    <select
                      name="tournament"
                      onChange={this.onTournamentChange}
                    >
                      <option value="">Seleziona un torneo</option>
                      {data.tournaments.edges.map(({ node }) => (
                        <option
                          value={node.id}
                          selected={node.id === this.state.selected}
                        >
                          {node.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button type="button" onClick={this.addTournament}>
                    Aggiungi torneo
                  </button>
                </form>
              </div>
              <CalendarResults name={this.state.selected} />
            </div>
          );
        }}
      </TournamentsQuery>
    );
  }

  private addTournament = () => null;
  private onTournamentChange = (e: any) => {
    const value = e.target.value;
    this.setState({
      selected: value,
    });
  };
}
