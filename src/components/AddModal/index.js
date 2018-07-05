import React, { Component } from 'react';
import Modal from 'react-modal';
import './index.css';

Modal.setAppElement('#root');

class AddModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    let label = this.props.btnLabel
      ? `Aggiungi ${this.props.btnLabel}`
      : 'Aggiungi';
    return (
      <div className="add-modal-wrapper">
        <button onClick={this.openModal} className="btn btn-primary">
          <span className="icon">+</span>
          <span>{label}</span>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Add Modal"
        >
          <div className="add-modal-content">
            <h2>{label}</h2>
            <button className="modal-close" onClick={this.closeModal}>
              <span className="icon">&times;</span>
            </button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
