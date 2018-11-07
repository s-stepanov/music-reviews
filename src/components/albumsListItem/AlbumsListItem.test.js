import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AlbumsListItem } from './AlbumsListItem';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = { album: {
      name: 'name',
      mbid: '1',
      image: 'image'
    }
  };

  const enzymeWrapper = shallow(<AlbumsListItem {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('AlbumsListItem', () => {
  it('should render itself', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.app-albums-list__item').exists()).toBeTruthy();
  });

  it('should display info about an album', () => {
    const { enzymeWrapper } = setup();
    const image = enzymeWrapper.find('.app-albums-list__item__album-image-container__image');
    const title = enzymeWrapper.find('.app-albums-list__item__album-name');

    expect(image.props().src).toEqual('image');
    expect(title.find('Link').props().children).toContain('name');
  });

  it('should contain a link to the album page', () => {
    const { enzymeWrapper } = setup();

    const title = enzymeWrapper.find('.app-albums-list__item__album-name');
    expect(title.find('Link').props().to).toEqual('/albums/1');
  });
});