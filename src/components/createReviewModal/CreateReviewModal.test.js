import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CreateReviewModal } from './CreateReviewModal';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('@material-ui/core/es/Modal/Modal', () => () =>
  <div></div>
);

jest.mock('@material-ui/core/es/TextField/TextField', () => () => <input/>);

const setup = () => {
  const props = {
    isLoading: false,
    postReview: jest.fn(),
    currentUser: {
      id: '1'
    }
  };

  const enzymeWrapper = shallow(<CreateReviewModal {...props}/>);
  return {
    props,
    enzymeWrapper
  };
};

describe('CreateReviewModal', () => {
  it('should render itself', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.exists('.app-create-review-modal'));
  });

  it('should change rating on star click', () => {
    const { enzymeWrapper } = setup();

    const ratingComponent = enzymeWrapper.find('StarRatingComponent');
    ratingComponent.props().onStarClick(10);
    expect(enzymeWrapper.state().rating).toEqual(10);
  });

  it('should post a review', () => {
    const { enzymeWrapper, props } = setup();

    const submitButton = enzymeWrapper.find('.app-create-review-modal__button--submit');
    submitButton.simulate('click', {
      preventDefault: () => {}
    });
    expect(props.postReview.mock.calls).toHaveLength(1);
  });
});
