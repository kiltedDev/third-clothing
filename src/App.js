import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
// NOTE: used for seeding the database
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

import HomePage            from './pages/home/home.page';
import ShopPage            from './pages/shop/shop.page';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import CheckoutPage        from './pages/checkout/checkout.page';

import {
  // NOTE: used for seeding the database
  // addCollectionAndDocuments,
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // NOTE: used for seeding the database
    // const { collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser( userAuth );

      // seeding the database
      // NOTE: used for seeding the database
      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route exact path='/checkout' component={ CheckoutPage } />
          <Route
            exact
            path='/signin'
            render={() =>
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
  // NOTE: used for seeding the database
  // collectionsArray: selectCollectionsForPreview,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch( setCurrentUser( user ) )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
