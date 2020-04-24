import { shallow } from 'enzyme';
import React from 'react';
import { MenuItem } from './menu-item.component';

describe('MenuItem component', () => {
  let wrapper;
  let snapshot;
  let mockMatch;
  let mockHistory;
  const linkURL = '/hats';
  const imageURL = 'www.coolimage.com';
  const size = 'large';

  beforeAll(() => {
    mockMatch = {
      url: '/shop'
    };
    mockHistory = {
      push: jest.fn()
    };
    const mockProps = {
      title: 'hats',
      imageURL: imageURL,
      size: size,
      history: mockHistory,
      linkURL: linkURL,
      match: mockMatch
    }
    wrapper = shallow(<MenuItem { ...mockProps } />);
    snapshot = wrapper.debug();
  })

  it('should render MenuItem component',() => {
    expect( snapshot ).toMatchSnapshot();
  })

  it('should push history and call the right addy when clicked',() => {
    wrapper.find('MenuItemContainer').simulate('click');
    expect( mockHistory.push ).toHaveBeenCalledWith(`${mockMatch.url}${linkURL}`);
  })

  it('should pass size to MenuItemContainer as the prop size', () => {
    expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size);
  });

  it('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
    expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe( imageURL );
  });
})
