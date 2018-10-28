import React, { Component } from 'react';
import './reviews-list.scss';
import * as PropTypes from 'prop-types';
import ReviewsListItem from "../reviewsListItem/ReviewsListItem";

class ReviewsList extends Component {
  render() {
    const { reviews } = this.props;
    const list = reviews.map((review, index) => {
      return <ReviewsListItem
        key={index}
        review={review}
      />
    });
    return (
      <div className='app-reviews-list'>
        {list.length ? list : 'No reviews yet. Be the first one to review this'}
      </div>
    );
  }
}
ReviewsList.propTypes = {
  reviews: PropTypes.array
};

export default ReviewsList;