import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ArtistPage from './ArtistPage';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    artist: {
      mbid: '1',
      albums: [{}, {}],
      image: 'photo',
      bio: {
        summary: 'summary',
        content: 'content'
      }
    },
    isLoading: false,
    getArtistInfo: jest.fn()
  };
  const enzymeWrapper = shallow(<ArtistPage {...props}/>);

  return {
    props,
    enzymeWrapper
  };
};

describe('ArtistPage', () => {
  it('should render itself', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.exists('.app-artist-page'));
  });

  it('should show spinner on loading', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.exists('.spinner')).toBeFalsy();
    enzymeWrapper.setProps({ isLoading: true }, () => {
      expect(enzymeWrapper.exists('.spinner'));
    });
  });

  it('should toggle artist info on users click', () => {
    const { enzymeWrapper } = setup();
    const toggler = enzymeWrapper.find('.app-artist-page__artist-description-container__bio__toggle');

    expect(enzymeWrapper.state().showFullBio).toBeFalsy();
    expect(enzymeWrapper.find('.app-artist-page__artist-description-container__bio').props().children).toContain('summary');
    expect(enzymeWrapper.find('.app-artist-page__artist-description-container__bio').props().children)
      .not.toContain('content');
    toggler.simulate('click');
    expect(enzymeWrapper.state().showFullBio).toBeTruthy();
    expect(enzymeWrapper.find('.app-artist-page__artist-description-container__bio').props().children)
      .not.toContain('summary');
    expect(enzymeWrapper.find('.app-artist-page__artist-description-container__bio').props().children).toContain('content');
  });

  it('should fetch artist info on mounting', () => {
    const { props } = setup();

    expect(props.getArtistInfo.mock.calls.length).toEqual(1);
  });
});