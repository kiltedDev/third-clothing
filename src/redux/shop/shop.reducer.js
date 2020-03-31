// diverged from course here because in a RW scenario we'd be importing
// from a database and I'd like to have this structured more in that
// direction.  p sure they'll do that later anyhow.


import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;
