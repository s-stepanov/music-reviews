import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReviewsListItem from './ReviewsListItem';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    review: {
      mbid: '1',
      rating: '10',
      content: 'content',
      author: {
        name: 'name',
        photo: 'image'
      }
    }
  };

  const enzymeWrapper = shallow(<ReviewsListItem {...props}/>);

  return {
    props,
    enzymeWrapper
  };
};

describe('ReviewsListItem', () => {
  it('should render itself', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.app-reviews-list__item').exists()).toBeTruthy();
  });

  it('should show review author', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('img').props().src).toEqual('image');
    expect(enzymeWrapper.find('.app-reviews-list__item__header__user').find('span').props().children).toEqual('name');
    expect(enzymeWrapper)
  });

  it('should show review content', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.app-reviews-list__item__content').props().children).toEqual('content');
  });

  it('should show review rating', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.app-reviews-list__item__header__score').props().value).toEqual(10);
  });
});