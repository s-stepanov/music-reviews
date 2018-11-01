import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { AlbumPage } from './AlbumPage';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../createReviewModal/CreateReviewModal', () => ()=> <div className="mockCreateReviewModal">
  mockReviewModal
</div>);

const setup = () => {
  const props = {
    album: {
      name: 'name',
      mbid: '1',
      image: 'image',
      averageRating: '5.5',
      wiki: {
        published: '',
        summary: 'summary',
        content: 'content'
      }
    },
    mbid: '1',
    getAlbumInfo: jest.fn(),
    getReviews: jest.fn(),
    isLoading: false,
    reviews: [{
      mbid: '1',
      rating: '4',
      content: 'content',
      author: {
        name: 'authorName',
        photo: 'authorPhoto'
      }
    }, {
      mbid: '1',
      rating: '7',
      content: 'anotherContent',
      author: {
        name: 'anotherAuthor',
        photo: 'anotherPhoto'
      }
    }]
  };
  const enzymeWrapper = shallow(<AlbumPage {...props}/>);

  return {
    props,
    enzymeWrapper
  };
};

describe('AlbumPage', () => {
  it('should render itself', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.exists('.app-album-page')).toBeTruthy();
  });

  it('should show spinner on loading', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.exists('.spinner')).toBeFalsy();
    enzymeWrapper.setProps({ isLoading: true }, () => {
      expect(enzymeWrapper.exists('.spinner'));
    });
  });

  it('should show album average rating', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.app-album-page__album-info-container__rating').props().value).toEqual(5.5);
  });

  it('should toggle album info on users click', () => {
    const { enzymeWrapper } = setup();
    const toggler = enzymeWrapper.find('.app-album-page__album-description-container__description__toggle');

    expect(enzymeWrapper.state().showFullDescription).toBeFalsy();
    toggler.simulate('click');
    expect(enzymeWrapper.state().showFullDescription).toBeTruthy();
  });

  it('should render the list of reviews for the album', () => {
    const { enzymeWrapper } = setup();

    const reviews = enzymeWrapper.find('ReviewsList');
    expect(reviews.props().reviews).toHaveLength(2);
  });

  it('should fetch album info on mounting', () => {
    const { props } = setup();

    expect(props.getReviews.mock.calls.length).toEqual(1);
  });

  it('should fetch reviews on mounting', () => {
    const { props } = setup();

    expect(props.getReviews.mock.calls.length).toEqual(1);
  });
});