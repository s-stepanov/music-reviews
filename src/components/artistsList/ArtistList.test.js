import React from 'react';
import ArtistList from './ArtistsList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    artists : [{
      mbid: 1,
      name: 'name 1',
      listeners: '1',
      image: 'image'
    }, {
      mbid: 2,
      name: 'name 2',
      listeners: '4',
      image: 'image'
    }, {
      mbid: 3,
      name: 'name 3',
      listeners: '2',
      image: 'image'
    }],
    isLoading: false,
    getArtists: jest.fn()
  };

  const enzymeWrapper = shallow(<ArtistList {...props} />);

  return {
    enzymeWrapper,
    props
  };
}

describe('ArtistList', () => {
  it('should render itself', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.exists('.app-list')).toBeTruthy();
  });

  it('should render the list of artists', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.app-list').children()).toHaveLength(3);

    enzymeWrapper.setProps({
      artists: []
    }, () => {
      expect(enzymeWrapper.find('.app-list').children()).toHaveLength(0);
    })
  });

  it('should show spinner on loading', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.exists('.spinner')).toBeFalsy();
    enzymeWrapper.setProps({ isLoading: true }, () => {
      expect(enzymeWrapper.exists('.spinner'));
    });
  });
});
