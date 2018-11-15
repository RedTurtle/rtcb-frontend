import * as React from 'react';
import Select from 'react-select';

import { roles } from '../Giocatore';

type Roles = typeof roles;

interface IState {
  name: string;
  preferredRole: keyof Roles;
}

class EditProfileForm extends React.Component<{}, IState> {
  public state: IState = {
    name: 'Ciccio Pasticcio',
    preferredRole: 'S',
  };

  public render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            className="form-control"
            name="name"
            id="name"
            placeholder="Indica un nome..."
            value={this.state.name}
            onChange={this.onChangeName}
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

  private onChangeName = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const newName = e.currentTarget.value;
    this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        name: newName,
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

  private onSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };
}

export default EditProfileForm;
