import ShopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchSectionsStart = () => ({
  type: ShopActionTypes.FETCH_SECTIONS_START
});

export const fetchSectionsSuccess = sectionsMap => ({
  type: ShopActionTypes.FETCH_SECTIONS_SUCCESS,
  payload: sectionsMap
});

export const fetchSectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_SECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchSectionsStartAsync = () => {
  return dispatch => {
    const sectionRef = firestore.collection('sections');
    dispatch(fetchSectionsStart());

    sectionRef
      .get()
      .then(snapshot => {
        const sectionsMap = convertCollectionSnapshotToMap( snapshot );
        dispatch( fetchSectionsSuccess( sectionsMap ) );
      })
      .catch(error => dispatch(fetchSectionsFailure(error.message)));
  };
};
