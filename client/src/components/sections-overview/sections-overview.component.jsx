import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSectionsForPreview } from '../../redux/shop/shop.selectors';
import SectionPreview from '../section-preview/section-preview.component';

import './sections-overview.styles.scss';

const SectionsOverview = ({ sections }) => (
  <div className='sections-overview'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <SectionPreview key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSectionsForPreview
})

export default connect(mapStateToProps)(SectionsOverview);
