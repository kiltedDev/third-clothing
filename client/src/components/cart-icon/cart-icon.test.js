import { shallow } from 'enzyme';
import React from 'react';
import { CartIcon } from './cart-icon.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions'

describe('CartIcon', () => {
  let wrapper;
  let mockToggleCartHidden;

  beforeAll(() => {
    mockToggleCartHidden = jest.fn();
    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden
    }

    wrapper = shallow(<CartIcon { ...mockProps }/> );
  })
  it('renders a cart icon',() => {
    expect( wrapper.debug() ).toMatchSnapshot();
  })

  it('calls toggleCartHidden when clicked', () => {
    wrapper.find('CartIconContainer').simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  })
  
  it('shows the correct count in the icon',() => {
    expect(wrapper.find( 'ItemCount' ).text()).toEqual("0");
  })
})
