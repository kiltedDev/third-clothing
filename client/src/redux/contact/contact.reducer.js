import ContactActionTypes from './contact.types'

const INITIAL_STATE = {
  contactDetails: null,
  isFetching: false,
  errorMessage: undefined
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactActionTypes.FETCH_CONTACT_DETAILS_START:
      return {
        ...state,
        isFetching: true
      }
    case ContactActionTypes.FETCH_CONTACT_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        contactDetails: action.payload
      }
    case ContactActionTypes.FETCH_CONTACT_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default contactReducer;
