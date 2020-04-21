import { all, call, put, takeLatest, select } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';

import { clearCart, setCartFromFirebase } from '../cart/cart.actions';
import { getUserCartRef, newUserCart } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';

export function* clearCartOnSignOut() {
  yield put( clearCart() );
}

export function* onSignOutSuccess() {
  yield takeLatest( UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut )
}

export function* updateCartInFirebase() {
  const currentUser = yield select( selectCurrentUser );
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef( currentUser.id, currentUser.activeCart );
      const cartItems = yield select( selectCartItems );
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef( user.id, user.activeCart );
  const cartSnapshot = yield cartRef.get();
  yield put( setCartFromFirebase( cartSnapshot.data().cartItems ) );
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART
    ],
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield( all([
    call( onSignOutSuccess ),
    call( onCartChange ),
    call( onUserSignIn )
  ]))
}
