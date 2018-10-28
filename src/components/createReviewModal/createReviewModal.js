import React, { Component } from 'react';
import Modal from "@material-ui/core/es/Modal/Modal";
import Typography from "@material-ui/core/es/Typography/Typography";
import './create-review-modal.scss';
import TextField from "@material-ui/core/es/TextField/TextField";

class CreateReviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className={'app-create-review-modal'}>
        <button className={'app-create-review-modal__button'} onClick={this.handleOpen}>Create Review</button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={'app-create-review-modal__window'}>
            <h4 className={'app-create-review-modal__window__title'}>
              Write Review
            </h4>
            <TextField className='app-create-review-modal__window__text-field'
                       label=""
                       multiline
                       rows="8"
                       defaultValue="Share your thoughts about this album"
                       margin="normal"
                       variant="outlined"/>
            <button className={'app-create-review-modal__button'}>Done</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateReviewModal;