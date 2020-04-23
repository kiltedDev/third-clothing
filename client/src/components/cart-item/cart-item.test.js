import { shallow } from 'enzyme';
import React from 'react';
import { CartItem } from './cart-item.component';

describe('CartItem', () => {
  let wrapper;

  beforeAll(() => {
    const mockProps = {
      item: {
        imageUrl: 'www.images.com/cool-image.png',
        quantity: 3,
        price: 25,
        name: 'Really Cool Coat'
      }
    }

    wrapper = shallow(<CartItem { ...mockProps } /> );
  })

  it('renders a cart item',() => {
    expect( wrapper.debug() ).toMatchSnapshot();
  })

  it('renders the correct name for the item',() => {
    const itemName = wrapper.find('CartItemName').text()
    expect( itemName ).toEqual('Really Cool Coat');
  })

  it('renders the correct price for the item',() => {
    const itemPrice = wrapper.find('CartItemPrice').text()
    expect(itemPrice).toEqual('3 x $25');
  })
})
