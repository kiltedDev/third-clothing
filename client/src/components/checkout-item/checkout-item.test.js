import { shallow } from 'enzyme';
import React from 'react';
import { CheckoutItem } from './checkout-item.component';

describe('CheckoutItem', () => {
  let wrapper;

  beforeAll(() => {
    const mockProps = {
      cartItem: {
        imageUrl: 'www.coolimage.com',
        name: 'Really Cool Coat',
        price: 25,
        quantity: 3
      },
      clearItem: jest.fn,
      addItem: jest.fn,
      remove: jest.fn
    }
    wrapper = shallow(<CheckoutItem { ...mockProps } />)
  })
  it('should render CheckoutItem component',() => {
    expect( wrapper.debug() ).toMatchSnapshot();
  })
})
