import React from 'react';
import { connect } from 'react-redux';

import Directory from '../../components/directory/directory.component';
import { fetchSectionsStart } from '../../redux/shop/shop.actions';
import { hideCart } from '../../redux/cart/cart.actions';

import { HomePageContainer } from './home.styles';

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchSectionsStart, hideCart } = this.props;
    hideCart();
    fetchSectionsStart();
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
  fetchSectionsStart: () => dispatch( fetchSectionsStart() ),
  hideCart: () => dispatch( hideCart() )
});

export default connect(null, mapDispatchToProps)(HomePage);
