import React from 'react';
import { shallow } from 'enzyme';

import { CartDropdown } from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

describe('CartDropdown', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeAll(() => {
    mockHistory = {
      push: jest.fn()
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockItems,
      history: mockHistory,
      dispatch: mockDispatch
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should render CartDropdown component', () => {
    expect( wrapper.debug() ).toMatchSnapshot();
  });

  it('should call history.push when button is clicked', () => {
    wrapper.find('CartDropdownButton').simulate('click');
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockItems.length);
  });

  it('should render EmptyMessage if cartItems is empty', () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch
    };

    const newWrapper = shallow(<CartDropdown {...mockProps} />);
    expect( newWrapper.exists('EmptyMessage') ).toBe( true );
  });
});
