import React, { Component } from 'react';
import Modal from "@material-ui/core/es/Modal/Modal";
import './create-review-modal.scss';
import { connect } from 'react-redux';
import { postReview } from "../../actions/reviewsActions";
import * as PropTypes from 'prop-types';
import { Field, formValueSelector, reduxForm } from "redux-form";
import { renderTextArea } from "../renderTextArea";
import StarRatingComponent from "react-star-rating-component";

export class CreateReviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      rating: 0
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { content, mbid, currentUser } = this.props;
    this.props.postReview(mbid, this.state.rating, content, currentUser.id);
    this.handleClose();
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
            <form>
              <div className={'app-create-review-modal__window__rating'}>
                <span className={'app-create-review-modal__window__rating__label'}>Rate this album:</span>
                <StarRatingComponent
                  name="rating"
                  value={this.state.rating}
                  onStarClick={this.onStarClick.bind(this)}
                  starCount={10}
                  className={'app-create-review-modal__window__rating__stars'}
                />
              </div>
              <Field
                name={'review-content'}
                component={renderTextArea}
                className='app-create-review-modal__window__text-field'
                label=""
                multiline
                rows="8"
                margin="normal"
                variant="outlined"
              />
              <button
                className={'app-create-review-modal__button app-create-review-modal__button--submit'}
                onClick={this.handleSubmit}
              >Done</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
CreateReviewModal.propTypes = {
  isLoading: PropTypes.bool,
  postReview: PropTypes.func,
  content: PropTypes.string,
  mbid: PropTypes.string
};

const select = formValueSelector('create-review');

const mapStateToProps = state => {
  return {
    isLoading: state.reviews.isFetching,
    currentUser: state.auth.currentUser,
    content: select(state, 'review-content')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postReview: (mbid, score, content, authorId) => dispatch(postReview(mbid, score, content, authorId))
  };
};

const createReviewModal = reduxForm({
  form: 'create-review'
})(CreateReviewModal);

export default connect(mapStateToProps, mapDispatchToProps)(createReviewModal);