import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

// import './collection-preview.styles.scss';
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionPreviewPanel
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer className='collection-preview'>
    <CollectionPreviewTitle
      className='title'
      children={ title }
    />
    <CollectionPreviewPanel className='preview'>
      { items
        .filter((item, idx) => idx < 4)
        .map(( item ) => (
          <CollectionItem key={item.id} item={ item } />
        ))
      }
    </CollectionPreviewPanel>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
