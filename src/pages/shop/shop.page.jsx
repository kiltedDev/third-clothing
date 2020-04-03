import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { hideCart } from '../../redux/cart/cart.actions';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync, hideCart } = this.props;
    hideCart();
    fetchCollectionsStartAsync();
  }


  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={ `${match.path}` }
          component={ CollectionsOverviewContainer }
        />
        <Route
          exact
          path={ `${match.path}/:collectionId` }
          component={ CollectionPageContainer }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch( fetchCollectionsStartAsync() ),
  hideCart: () => dispatch( hideCart() )

})

export default connect( null, mapDispatchToProps )( ShopPage );
