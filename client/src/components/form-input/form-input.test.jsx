import { shallow } from 'enzyme';
import React from 'react';
import { FormInput } from './form-input.component';

describe('FormInput', () => {
  let wrapper;
  let snapshot;

  let mockHandleChange;
  beforeAll(() => {
    mockHandleChange = jest.fn();
    const mockProps = {
      handleChange: mockHandleChange
    }
    wrapper = shallow(<FormInput { ...mockProps } />);
    snapshot = wrapper.debug();
  })

  it('should render FormInput component',() => {
    expect( snapshot ).toMatchSnapshot();
  })

  it('should have a lebel when required',() => {
    const mockProps2 = {
      handleChange: mockHandleChange,
      label: 'email'
    }
    const wrapper2 = shallow(<FormInput { ...mockProps2 } />);

    expect( wrapper2.debug() ).toMatchSnapshot();
  })
})
