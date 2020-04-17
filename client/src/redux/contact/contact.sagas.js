import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  firestore,
  convertContactSnapshotToMap
} from '../../firebase/firebase.utils';
import {
  fetchContactDetailsSuccess,
  fetchContactDetailsFailure
} from './contact.actions';

import ContactActionTypes from './contact.types';

export function* fetchContactDetailsAsync() {
  try {
    const contactDetailRef = firestore.collection('contact-details');
    const snapshot = yield contactDetailRef.get();
    const contactDetailsMap = yield call(
      convertContactSnapshotToMap,
      snapshot
    );
    yield put( fetchContactDetailsSuccess( contactDetailsMap ) );
  } catch ( error ) {
    yield put( fetchContactDetailsFailure( error.message ) );
  }
}

export function* fetchContactDetailsStart() {
  yield takeLatest(
    ContactActionTypes.FETCH_CONTACT_DETAILS_START,
    fetchContactDetailsAsync
  )
}

export function* contactSagas() {
  yield all([
    call( fetchContactDetailsStart )
  ])
}
