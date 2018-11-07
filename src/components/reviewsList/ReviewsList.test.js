import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewsList from './ReviewsList';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    reviews: [{
      key: 1
    }, {
      key: 2
    }]
  };

  const enzymeWrapper = shallow(<ReviewsList {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('ReviewsList', () => {
  it('should render itself', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.app-reviews-list').exists()).toBeTruthy();
  });

  it('should render the list of reviews', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.app-reviews-list').props().children).toHaveLength(2);
  });

  it('should show the placeholder if there is no reviews', () => {
    const { enzymeWrapper } = setup();
    enzymeWrapper.setProps({ reviews: [] }, () => {
      expect(enzymeWrapper.find('.app-reviews-list').props().children).toContain('No reviews yet');
    });
  });
});