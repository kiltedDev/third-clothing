import { shallow } from 'enzyme';
import React from 'react';
import { SectionsOverview } from './sections-overview.component';

describe('SectionsOverview component', () => {
  let wrapper;
  let snapshot;
  beforeAll(() => {
    const mockProps = {
      sections: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    };
    wrapper = shallow(<SectionsOverview { ...mockProps } />);
    snapshot = wrapper.debug();
  });

  it('should render SectionsOverview component',() => {
    expect( snapshot ).toMatchSnapshot();
  });
});
