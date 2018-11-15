import * as React from 'react';
import Select from 'react-select';

import { roles } from '../Giocatore';

type Roles = typeof roles;

interface IProps {
  player: {
    firstName: string;
    lastName: string;
    role: keyof Roles;
    versatile: boolean;
  };
}

interface IState {
  firstName: string;
  lastName: string;
  preferredRole: keyof Roles;
  versatile: boolean;
}

class EditProfileForm extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    const { firstName, lastName, role, versatile } = props.player;
    this.state = {
      firstName,
      lastName,
      preferredRole: role,
      versatile,
    };
  }

  public render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="firstName">Nome</label>
          <input
            className="form-control"
            name="firstName"
            id="firstName"
            placeholder="Indica un nome..."
            value={this.state.firstName}
            onChange={this.onChangeFirstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Cognome</label>
          <input
            className="form-control"
            name="lastName"
            id="lastName"
            placeholder="Indica un cognome..."
            value={this.state.lastName}
            onChange={this.onChangeLastName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preferred-role">Ruolo preferito</label>
          <Select
            name="prefrole"
            id="preferred-role"
            value={this.state.preferredRole}
            onChange={this.onChangeRole}
            clearable={false}
            options={Object.keys(roles).map(role => ({
              label: roles[role],
              value: role as string,
            }))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="versatile">Versatile</label>
          <input
            name="versatile"
            id="versatile"
            type="checkbox"
            checked={this.state.versatile}
            onChange={this.onChangeVersatile}
          />
        </div>
        <div className="form-submit">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            Salva
          </button>
        </div>
      </form>
    );
  }

  private onChangeFirstName = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const newName = e.currentTarget.value;
    this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        firstName: newName,
      }),
    );
  };

  private onChangeLastName = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const newName = e.currentTarget.value;
    this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        lastName: newName,
      }),
    );
  };

  private onChangeRole = ({
    value,
  }: {
    value: IState['preferredRole'];
  }): void => {
    this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        preferredRole: value,
      }),
    );
  };

  private onChangeVersatile = (e: React.FormEvent<HTMLInputElement>): void => {
    const newValue = e.currentTarget.checked;
    this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        versatile: newValue,
      }),
    );
  };

  private onSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };
}

export default EditProfileForm;
