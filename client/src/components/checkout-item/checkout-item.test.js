import { shallow } from 'enzyme';
import React from 'react';
import { CheckoutItem } from './checkout-item.component';

describe('CheckoutItem', () => {
  let wrapper;
  let mockRemoveItem;
  let mockAddItem;
  let mockClearItem;

  beforeAll(() => {
    mockRemoveItem = jest.fn();
    mockAddItem = jest.fn();
    mockClearItem = jest.fn();

    const mockProps = {
      cartItem: {
        imageUrl: 'www.coolimage.com',
        name: 'Really Cool Coat',
        price: 25,
        quantity: 3
      },
      removeItem: mockRemoveItem,
      addItem: mockAddItem,
      clearItem: mockClearItem
    }
    wrapper = shallow(<CheckoutItem { ...mockProps } />)
  });

  it('should render CheckoutItem component',() => {
    expect( wrapper.debug() ).toMatchSnapshot();
  })

  it('should call removeItem when < is clicked',() => {
    wrapper.find('.quantity .left').simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
  })

  it('should call addItem when > is clicked',() => {
    wrapper.find('.quantity .right').simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  })

  it('should call clearItem when X is clicked',() => {
    wrapper.find('RemoveButtonContainer').simulate('click');
    expect(mockClearItem).toHaveBeenCalled();
  })
})
