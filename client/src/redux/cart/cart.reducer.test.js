import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

const initialState = {
  hidden: true,
  cartItems: []
}
const mockItem1 = {
  id: 1,
  quantity: 3
};
const mockItem2 = {
  id: 2,
  quantity: 2
};
const mockState = {
  hidden: false,
  cartItems: [
    mockItem1,
    mockItem2
  ]
}

describe('cart reducer', () => {
  it('should return the initial state',() => {
    expect(
      cartReducer( undefined, {} )
    ).toEqual(initialState);
  });

  it('should toggle hidden with toggleHidden action',() => {
    expect(
      cartReducer( initialState, {type: CartActionTypes.TOGGLE_CART_HIDDEN } ).hidden
    )
      .toBe( false );
  });

  it('should hide cart with hideCart action',() => {
    expect(
      cartReducer( mockState, {} ).hidden
    ).toBe( false );

    expect(
      cartReducer( mockState, {type: CartActionTypes.HIDE_CART } ).hidden
    ).toBe( true );
  });

  it('should increment quantity of matching item by 1 if addItem is fired', () => {
    expect(
      cartReducer(mockState, {
        type: CartActionTypes.ADD_ITEM,
        payload: mockItem1
      }).cartItems[0].quantity
    ).toBe(4);
  });

  it('should decrement quantity of matching item by 1 if removeItem is fired', () => {
    expect(
      cartReducer(mockState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: mockItem1
      }).cartItems[0].quantity
    ).toBe(2);
  });

  it('should remove all of matching item if clearItemFromCart is fired', () => {
    expect(
      cartReducer(mockState, {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem1
      }).cartItems
    ).toEqual( [ mockItem2 ] );
  });

  it('should remove all items if clearCart is fired', () => {
    expect(
      cartReducer(mockState, {
        type: CartActionTypes.CLEAR_CART
      }).cartItems
    ).toEqual( [] );
  });
});
