import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SectionsOverviewContainer from '../../components/sections-overview/sections-overview.container';
import SectionPageContainer from '../section/section.container';
import { fetchSectionsStart } from '../../redux/shop/shop.actions';
import { hideCart } from '../../redux/cart/cart.actions';

const ShopPage = ({ match, fetchSectionsStart, hideCart }) => {
  useEffect( () => {
    hideCart();
    fetchSectionsStart();
  }, [ fetchSectionsStart, hideCart ]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={ `${match.path}` }
        component={ SectionsOverviewContainer }
      />
      <Route
        exact
        path={ `${match.path}/:sectionId` }
        component={ SectionPageContainer }
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchSectionsStart: () => dispatch( fetchSectionsStart() ),
  hideCart: () => dispatch( hideCart() )

})

export default connect( null, mapDispatchToProps )( ShopPage );
