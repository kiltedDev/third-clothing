import ContactActionTypes from './contact.types';

export const fetchContactDetailsStart = () => ({
  type: ContactActionTypes.FETCH_CONTACT_DETAILS_START
});


export const fetchContactDetailsSuccess = sectionsMap => ({
  type: ContactActionTypes.FETCH_CONTACT_DETAILS_SUCCESS,
  payload: sectionsMap
});

export const fetchContactDetailsFailure = errorMessage => ({
  type: ContactActionTypes.FETCH_CONTACT_DETAILS_FAILURE,
  payload: errorMessage
});
