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
    return (
      <div className="add-modal-wrapper">
        <button onClick={this.openModal} className="btn btn-primary">
          {this.props.icon && <span className="icon">{this.props.icon}</span>}
          <span>{this.props.btnLabel}</span>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={this.props.btnLabel}
        >
          <div className="add-modal-content">
            <h2>{this.props.btnLabel}</h2>
            <button className="modal-close" onClick={this.closeModal}>
              <span className="icon">&times;</span>
            </button>
            {this.props.form}
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
