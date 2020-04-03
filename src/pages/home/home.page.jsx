import React from 'react';
import { connect } from 'react-redux';

import Directory from '../../components/directory/directory.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { hideCart } from '../../redux/cart/cart.actions';

import { HomePageContainer } from './home.styles';

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync, hideCart } = this.props;
    hideCart();
    fetchCollectionsStartAsync();
  }

  render() {
    return (
      <HomePageContainer >
        <Directory />
      </HomePageContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch( fetchCollectionsStartAsync() ),
  hideCart: () => dispatch( hideCart() )
});

export default connect(null, mapDispatchToProps)(HomePage);
