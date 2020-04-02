import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

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
          <CollectionItem
            key={ item.id }
            item={ item }
          />
        ))}
      </CollectionPageItems>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
