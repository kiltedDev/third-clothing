import { shallow } from 'enzyme';
import React from 'react';
import { CustomButton } from './custom-button.component';

describe('CustomButton', () => {
  let wrapper;

  beforeAll(() => {
    const mockProps = {
      children: "FacePlace"
    }
    wrapper = shallow(<CustomButton { ...mockProps } />)
  })
  it('should render CustomButton component',() => {
    expect( wrapper.debug() ).toMatchSnapshot();
  })
})
