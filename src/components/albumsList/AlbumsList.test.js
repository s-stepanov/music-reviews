import React from 'react';
import AlbumsList from './AlbumsList';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    albums: [{
      name: 'name',
      mbid: '1',
      artist: {
        name: 'artistName',
        mbid: '2',
        url: 'url'
      }
    }, {
      name: 'anotherName',
      mbid: '3',
      artist: {
        name: 'anotherArtistName',
        mbid: '4',
        url: 'anotherUrl'
      }
    }]
  };
  const enzymeWrapper = shallow(<AlbumsList {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('AlbumsList', () => {
  it('should render itself', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('.app-albums-list').exists()).toBeTruthy();
  });

  it('should render the list of albums', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.app-albums-list').props().children).toHaveLength(2);
    enzymeWrapper.setProps({ albums: [] }, () => {
      expect(enzymeWrapper.find('.app-albums-list').props().children).toHaveLength(0);
    });
  });
});
