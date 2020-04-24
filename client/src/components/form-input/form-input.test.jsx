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
      handleChange: mockHandleChange,
      label:'email'
    }
    wrapper = shallow(<FormInput { ...mockProps } />);
    snapshot = wrapper.debug();
  })

  it('should render FormInput component',() => {
    expect( snapshot ).toMatchSnapshot();
  })

  it('should have a label when requested',() => {
    expect( wrapper.exists( 'FormInputLabel' ) ).toBe( true );
  })

  it('should not have a label when none requested',() => {
    const mockProps2 = {
      handleChange: mockHandleChange,
      label: ''
    }
    const wrapper2 = shallow(<FormInput { ...mockProps2 } />);

    expect( wrapper2.debug()).toMatchSnapshot();
    expect( wrapper2.exists( 'FormInputLabel' ) ).toBe( false );
  })

  it('should call handleChange when change happens',() => {
    wrapper.find('FormInputContainer').simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();
  })
})
