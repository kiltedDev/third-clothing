import React from 'react';
import { connect } from 'react-redux';

import Directory from '../../components/directory/directory.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { hideCart } from '../../redux/cart/cart.actions';

import { HomePageContainer } from './home.styles';

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart, hideCart } = this.props;
    hideCart();
    fetchCollectionsStart();
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
  fetchCollectionsStart: () => dispatch( fetchCollectionsStart() ),
  hideCart: () => dispatch( hideCart() )
});

export default connect(null, mapDispatchToProps)(HomePage);
