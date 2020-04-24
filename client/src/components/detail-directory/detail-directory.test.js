import { shallow } from 'enzyme';
import React from 'react';
import { DetailDirectory } from './detail-directory.component';

describe('DetailDirectory', () => {
  let wrapper;

  beforeAll(() => {
    const mockProps = {
      contactDetails: [{
        id: 1,
        title: 'FaceSpace',
        contactInfo: 'cool-guy-82',
        linkTo: 'www.facespace.com/cool-guy-82',
        iconSize: '50px'
      }]
    }
    wrapper = shallow(<DetailDirectory { ...mockProps } />)
  })
  it('should render DetailDirectory component',() => {
    expect( wrapper.debug() ).toMatchSnapshot();
  })
})
