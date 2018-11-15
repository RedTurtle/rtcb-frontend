import * as React from 'react';
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
          <select
            name="prefrole"
            id="preferred-role"
            value={this.state.preferredRole}
            onChange={this.onChangeRole}
          >
            {Object.keys(roles).map(role => (
              <option value={role}>{roles[role]}</option>
            ))}
          </select>
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

  private onChangeRole = (e: React.FormEvent<HTMLSelectElement>): void => {
    e.preventDefault();
    const newRole = e.currentTarget.value as IState['preferredRole'];
    this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        preferredRole: newRole,
      }),
    );
  };

  private onSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };
}

export default EditProfileForm;
