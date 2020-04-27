import CartActionTypes from './cart.types';
import {
  toggleCartHidden,
  hideCart,
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart,
  updateCartInFirebase,
  setCartFromFirebase,
  checkOutCart
} from './cart.actions';

describe('cart actions', () => {
  it('should create the toggleCartHidden action',() => {
    const action = toggleCartHidden();

    expect( action.type ).toEqual( CartActionTypes.TOGGLE_CART_HIDDEN );
  });

  it('should create the hideCart action',() => {
    const action = hideCart();

    expect( action.type ).toEqual( CartActionTypes.HIDE_CART );
  });

  it('should create the addItem action',() => {
    const item = {
      id:1,
      name:'bob'
    }
    const action = addItem( item );

    expect( action.type ).toEqual( CartActionTypes.ADD_ITEM );
    expect( action.payload ).toEqual( item )
  });

  it('should create the removeItem action',() => {
    const item = {
      id:1,
      name:'bob'
    }
    const action = removeItem( item );

    expect( action.type ).toEqual( CartActionTypes.REMOVE_ITEM );
    expect( action.payload ).toEqual( item );
  });

  it('should create the clearItemFromCart action',() => {
    const item = {
      id:1,
      name:'bob'
    }
    const action = clearItemFromCart( item );

    expect( action.type ).toEqual( CartActionTypes.CLEAR_ITEM_FROM_CART );
    expect( action.payload ).toEqual( item )
  });

  it('should create the clearCart action',() => {
    const action = clearCart();

    expect( action.type ).toEqual( CartActionTypes.CLEAR_CART );
  });

  it('should create the updateCartInFirebase action',() => {
    const action = updateCartInFirebase();

    expect( action.type ).toEqual( CartActionTypes.UPDATE_CART_IN_FIREBASE );
  });

  it('should create the setCartFromFirebase action',() => {
    const cartItems = [
      {
        id:1,
        name:'bob'
      },
      {
        id:2,
        name:'bill'
      }
    ]
    const action = setCartFromFirebase( cartItems );

    expect( action.type ).toEqual( CartActionTypes.SET_CART_FROM_FIREBASE );
    expect( action.payload ).toEqual( cartItems );
  });

  it('should create the checkOutCart action',() => {
    const action = checkOutCart();

    expect( action.type ).toEqual( CartActionTypes.CHECK_OUT_CART );
  });
});
