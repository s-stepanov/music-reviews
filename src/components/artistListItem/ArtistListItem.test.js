import React from 'react';
import { ArtistListItem } from './ArtistListItem';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    mbid: '1',
    name: 'name',
    image: 'image',
    listenersCount: '5'
  };
  const enzymeWrapper = shallow(<ArtistListItem {...props}/>);

  return {
    props,
    enzymeWrapper
  }
}

describe('ArtistListItem', () => {
  it('should render itself', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.app-artists-list__item').exists()).toBeTruthy();
  });

  it('should render artist information', () => {
    const { enzymeWrapper } = setup();

    const image = enzymeWrapper.find('.app-artists-list__item-header__image');
    const title = enzymeWrapper.find('.app-artists-list__item-header__title').find('Link');
    const listenersCount = enzymeWrapper.find('.app-artists-list__item-header__listeners-count').find('span');

    expect(image.prop('src')).toEqual('image');
    expect(title.props().children).toContain('name');
    expect(listenersCount.props().children).toContain('5');
  });

  it('should contain a link to the artist page', () => {
    const { enzymeWrapper } = setup();

    const link = enzymeWrapper.find('.app-artists-list__item-header__title').find('Link');
    expect(link.props().to).toEqual('/artists/1')
  });
});