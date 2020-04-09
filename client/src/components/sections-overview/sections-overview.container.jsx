import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsSectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SectionsOverview from './sections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsSectionFetching
});

const SectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SectionsOverview);

export default SectionsOverviewContainer;
