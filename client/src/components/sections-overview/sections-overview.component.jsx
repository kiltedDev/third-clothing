import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSectionsForPreview } from '../../redux/shop/shop.selectors';
import SectionPreview from '../section-preview/section-preview.component';

import { SectionsOverviewContainer } from './sections-overview.styles';

export const SectionsOverview = ({ sections }) => (
  <SectionsOverviewContainer className='sections-overview'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <SectionPreview key={id} {...otherSectionProps} />
    ))}
  </SectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSectionsForPreview
})

export default connect(mapStateToProps)(SectionsOverview);
