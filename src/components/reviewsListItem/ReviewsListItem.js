import React from 'react';
import './reviews-list-item.scss';
import * as PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

const ReviewsListItem = props => {
  const { score, content, author } = props.review;

  return (
    <div className='app-reviews-list__item'>
      <div className={'app-reviews-list__item__header'}>
        <div className={'app-reviews-list__item__header__user'}>
          <img src={author.photo}/>
          <span>{author.name}</span>
        </div>
        <StarRatingComponent
          name="rate2"
          editing={false}
          starCount={10}
          value={+score}
          className={'app-reviews-list__item__header__score'}
        />
      </div>
      <div className={'app-reviews-list__item__content'}>
        {content}
      </div>
    </div>
  );
};

ReviewsListItem.propTypes = {
  review: PropTypes.shape({
    mbid: PropTypes.string,
    score: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
      photo: PropTypes.string
    })
  })
};

export default ReviewsListItem;