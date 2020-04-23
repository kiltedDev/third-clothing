import { shallow } from 'enzyme';
import React from 'react';
import { ContactItem } from './contact-item.component';

describe('ContactItem', () => {
  let wrapper;

  beforeAll(() => {
    const mockProps = {
      title: 'FaceSpace',
      contactInfo: 'cool-guy-82',
      linkTo: 'www.facespace.com/cool-guy-82',
      iconSize: '50px'
    }
    wrapper = shallow(<ContactItem { ...mockProps } />)
  })
  it('should render ContactItem component',() => {
    expect( wrapper.debug() ).toMatchSnapshot();
  })
})
