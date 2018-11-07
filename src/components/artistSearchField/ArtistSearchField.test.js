import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ArtistSearchField } from "./ArtistSearchField";

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    artist: '',
    searchArtist: jest.fn(),
    history: {
      push: jest.fn()
    }
  };

  const enzymeWrapper = shallow(<ArtistSearchField {...props}/>);
  return {
    props,
    enzymeWrapper
  };
};

describe('ArtistSearchField', () => {
  it('should render itself', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.app-artist-search').exists()).toBeTruthy();
  });

  it('should perform request on users submit', () => {
    const { enzymeWrapper, props } = setup();

    const form = enzymeWrapper.find('.app-artist-search__form');
    form.simulate('submit', {
      preventDefault: () => {}
    });
    expect(props.searchArtist.mock.calls.length).toBe(1);
  });

  it('should perform a request with correct data', () => {
    const { enzymeWrapper, props } = setup();

    const form = enzymeWrapper.find('.app-artist-search__form');

    enzymeWrapper.setProps({ artist: 'artist' }, () => {
      form.simulate('submit', {
        preventDefault: () => {}
      });
      expect(props.searchArtist.mock.calls[0][0]).toBe('artist');
    });
  });

  it('should change location to results page after request', () => {
    const { enzymeWrapper, props } = setup();

    const form = enzymeWrapper.find('.app-artist-search__form');
    form.simulate('submit', {
      preventDefault: () => {}
    });

    expect(props.history.push.mock.calls.length).toBe(1);
  });
});