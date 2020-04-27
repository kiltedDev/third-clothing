import { shallow } from 'enzyme';
import React from 'react';
import { SectionPreview } from './section-preview.component';

describe('SectionPreview component', () => {
  let wrapper;
  let snapshot;
  const linkUrl = '/hats';
  const items = [
    {
      id: 1,
      name: 'Witch Hat'
    },
    {
      id: 2,
      name: 'Top Hat'
    },
    {
      id: 3,
      name: 'Fascinator'
    },
    {
      id: 4,
      name: 'Biggin'
    },
    {
      id: 5,
      name: 'Pefectly Acceptable Muggle Hat'
    },
  ];
  beforeAll(() => {
    const mockProps = {
      title: 'hats',
      items: items,
      linkURL: linkUrl
    };
    wrapper = shallow(<SectionPreview { ...mockProps } />);
    snapshot = wrapper.debug();
  });

  it('should render SectionPreview component',() => {
    expect( snapshot ).toMatchSnapshot();
  });

  it('should show no more than 4 items from a section',() => {
    expect( wrapper.find( 'SectionPreviewPanel' ).children() ).toHaveLength(4);
  });
});
