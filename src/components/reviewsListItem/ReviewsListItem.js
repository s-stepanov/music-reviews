import React, { Component } from 'react';
import './reviews-list-item.scss';
import * as PropTypes from 'prop-types';

class ReviewsListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { score, content } = this.props;

    return (
      <div className='app-reviews-list__item'>
        <div className={'app-reviews-list__item__header'}>
          <div className={'app-reviews-list__item__header__review-score'}>{score}</div>
        </div>
        <div className={'app-reviews-list__item__content'}>
          {content}
        </div>
      </div>
    );
  }
}
ReviewsListItem.propTypes = {
  review: PropTypes.shape({
    mbid: PropTypes.string,
    score: PropTypes.number,
    content: PropTypes.string
  })
};

export default ReviewsListItem;