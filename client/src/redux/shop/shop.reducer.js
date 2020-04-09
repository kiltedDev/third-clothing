// diverged from course here because in a RW scenario we'd be importing
// from a database and I'd like to have this structured more in that
// direction.  p sure they'll do that later anyhow.


import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
  sections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // NOTE: replaced with Thunk
    case ShopActionTypes.UPDATE_SECTIONS:
      return {
        ...state,
        sections: action.payload
      }
    case ShopActionTypes.FETCH_SECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopActionTypes.FETCH_SECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: action.payload
      }
    case ShopActionTypes.FETCH_SECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;
