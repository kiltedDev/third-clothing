import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.style';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
// NOTE: used for seeding the database
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

import HomePage            from './pages/home/home.page';
import ShopPage            from './pages/shop/shop.page';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import CheckoutPage        from './pages/checkout/checkout.page';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route exact path='/checkout' component={ CheckoutPage } />
          <Route
            exact
            path='/signin'
            render={ () =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default connect( mapStateToProps )( App );
