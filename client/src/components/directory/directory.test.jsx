import { shallow } from 'enzyme';
import React from 'react';
import { Directory } from './directory.component';

describe('Directory', () => {
  let wrapper;

  beforeAll(() => {
    const mockProps = {
      sections: [{
        id: 1
      }]
    }
    wrapper = shallow(<Directory { ...mockProps } />)
  })
  it('should render Directory component',() => {
    expect( wrapper.debug() ).toMatchSnapshot();
  })
})
