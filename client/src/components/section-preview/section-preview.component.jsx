import React from 'react';

import SectionItem from '../section-item/section-item.component';

import {
  SectionPreviewContainer,
  SectionPreviewTitle,
  SectionPreviewPanel
} from './section-preview.styles';

export const SectionPreview = ({ title, items, linkURL }) => (
  <SectionPreviewContainer className='section-preview'>
    <SectionPreviewTitle
      className='title'
      to={ linkURL }
      children={ title }
    />
    <SectionPreviewPanel className='preview'>
      { items
        .filter((item, idx) => idx < 4)
        .map(( item ) => (
          <SectionItem key={item.id} item={ item } />
        ))
      }
    </SectionPreviewPanel>
  </SectionPreviewContainer>
);

export default SectionPreview;
