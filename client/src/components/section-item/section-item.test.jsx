import { shallow } from 'enzyme';
import React from 'react';
import { SectionItem } from './section-item.component';

describe('SectionItem component', () => {
  let wrapper;
  let snapshot;
  let mockAddItem;
  const imageUrl = 'www.coolimage.com';
  const name = 'Boomer';

  beforeAll(() => {
    mockAddItem = jest.fn();
    const mockProps = {
      addItem: mockAddItem,
      item: {
        name: name,
        price: 25,
        imageUrl: imageUrl
      }
    };
    wrapper = shallow(<SectionItem { ...mockProps } />);
    snapshot = wrapper.debug();
  });

  it('should render SectionItem component',() => {
    expect( snapshot ).toMatchSnapshot();
  });

  it('should render the item with proper background image',() => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe( imageUrl );
  });

  it('should call addItem when clicked',() => {
    wrapper.find('AddButton').simulate('click');
    expect( mockAddItem ).toHaveBeenCalled();
  });

  it('should have proper name for NameContainer',() => {
    const testName = wrapper.find('NameContainer').text();
    expect( testName ).toBe( name );
  });
})
