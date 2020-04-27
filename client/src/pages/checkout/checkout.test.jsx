import { shallow } from 'enzyme';
import React from 'react';
import { CheckoutPage } from './checkout.page';

describe('CheckoutPage component', () => {
  let wrapper;
  let snapshot;
  beforeAll(() => {
    const mockProps = {
      cartItems: [],
      cartTotal: 144
    };
    wrapper = shallow(<CheckoutPage { ...mockProps } />);
    snapshot = wrapper.debug();
  });

  it('should render CheckoutPage component',() => {
    expect( snapshot ).toMatchSnapshot();
  });
});
