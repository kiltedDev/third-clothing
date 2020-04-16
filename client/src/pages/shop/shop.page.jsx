import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';

import { fetchSectionsStart } from '../../redux/shop/shop.actions';
import { hideCart } from '../../redux/cart/cart.actions';

const SectionsOverviewContainer = lazy( () => import( '../../components/sections-overview/sections-overview.container') );
const SectionPageContainer = lazy( () => import( '../section/section.container') );

const ShopPage = ({ match, fetchSectionsStart, hideCart }) => {
  useEffect( () => {
    hideCart();
    fetchSectionsStart();
  }, [ fetchSectionsStart, hideCart ]);

  return (
    <div className='shop-page'>
      <ErrorBoundary>
        <Suspense fallback={ <Spinner /> }>
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
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchSectionsStart: () => dispatch( fetchSectionsStart() ),
  hideCart: () => dispatch( hideCart() )

})

export default connect( null, mapDispatchToProps )( ShopPage );
