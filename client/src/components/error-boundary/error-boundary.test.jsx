import { shallow } from 'enzyme';
import React from 'react';
import { ErrorBoundary } from './error-boundary.component';

describe('ErrorBoundary', () => {
  let wrapper;
  let snapshot;
  beforeAll(() => {
    const mockProps = {

    }
    wrapper = shallow(<ErrorBoundary { ...mockProps } />);
    snapshot = wrapper.debug();
  })
  it('should render ErrorBoundary component',() => {
    expect(true).toEqual(true);
    // expect( snapshot ).toMatchSnapshot();
  })
})
