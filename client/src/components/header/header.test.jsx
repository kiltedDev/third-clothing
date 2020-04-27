import { shallow } from 'enzyme';
import React from 'react';
import { Header } from './header.component';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';

let wrapper;
let snapshot;
let mockSignOutStart;
beforeAll(() => {
  mockSignOutStart = jest.fn();
  const mockProps = {
    currentUser: true,
    hidden: true,
    signOutStart: mockSignOutStart
  }
  wrapper = shallow(<Header { ...mockProps } />);
  snapshot = wrapper.debug();
})

describe('Header', () => {
  it('should render Header component',() => {
    expect( snapshot ).toMatchSnapshot();
  })

  describe('user is signed in', () => {
    it('should have sign out option if user is signed in',() => {
      expect(
        wrapper
        .find('OptionLink')
        .at(2)
        .text()
      ).toBe('Sign Out');
    })

    it('should call signOutStart if Sign Out is clicked',() => {
      wrapper.find('OptionLink').at(2).simulate('click')
      expect(mockSignOutStart).toHaveBeenCalled();
    })
  })

  describe('No user is signed in', () => {
    let wrapper2;
    beforeAll(() => {
      const mockProps2 = {
        currentUser: false,
        hidden: true,
        signOutStart: mockSignOutStart
      }
      wrapper2 = shallow(<Header { ...mockProps2 } />);
    })

    it('should have Sign In option if user is signed in',() => {
      expect(
        wrapper2
        .find('OptionLink')
        .at(2)
        .text()
      ).toBe('Sign In');
    })
  })

  describe('cart is hidden', () => {
    const mockProps3 = {
      currentUser: false,
      hidden: true,
      signOutStart: mockSignOutStart
    }
    const wrapper3 = shallow(<Header { ...mockProps3 } />);
    it('should not display the cart',() => {
      expect(wrapper3.exists('CartDropdown')).toBe(false);
    });
  })

  describe('cart is not hidden', () => {
    const mockProps4 = {
      currentUser: false,
      hidden: false,
      signOutStart: mockSignOutStart
    }
    const wrapper4 = shallow(<Header { ...mockProps4 } />);
    it('should display the cart',() => {
      expect(wrapper4.exists('withRouter(Connect(CartDropdown))')).toBe(true);
    })
  })
})
