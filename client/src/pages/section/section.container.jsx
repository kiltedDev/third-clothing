import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsSectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import SectionPage from './section.page';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsSectionLoaded(state)
})

const SectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SectionPage);

export default SectionPageContainer;
