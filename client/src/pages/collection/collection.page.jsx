import React from 'react';
import { connect } from 'react-redux';

import SectionItem from '../../components/section-item/section-item.component';

import { selectSection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionPageItems,
  CollectionPageTitle
} from './collection.styles';

const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection;
  return(
    <CollectionPageContainer className='collection-page'>
      <CollectionPageTitle
        className='title'
        children={ title }
      />
      <CollectionPageItems className='items' >
        { items.map ( item  => (
          <SectionItem
            key={ item.id }
            item={ item }
          />
        ))}
      </CollectionPageItems>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectSection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
