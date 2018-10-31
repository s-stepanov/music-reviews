import React from 'react';
import { Menu } from './Menu';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    logout: jest.fn()
  };

  const enzymeWrapper = shallow(<Menu {...props}/>);

  return {
    props,
    enzymeWrapper
  };
}

describe('Menu', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('header').hasClass('app-menu')).toBeTruthy();
    expect(enzymeWrapper.find('ArtistSearchField')).toBeTruthy();
  });

  it('should call logout on button click', () => {
    const { enzymeWrapper, props } = setup();

    const button = enzymeWrapper.find('button');
    button.simulate('click');
    expect(props.logout.mock.calls.length).toBe(1)
  });
});
