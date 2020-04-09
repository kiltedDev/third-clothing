import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';
import {
  fetchSectionsSuccess,
  fetchSectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchSectionsAsync() {
  try {
    const sectionRef = firestore.collection('sections');
    const snapshot = yield sectionRef.get();
    const sectionsMap = yield call(
      convertCollectionSnapshotToMap,
      snapshot
    );
    yield put( fetchSectionsSuccess( sectionsMap ) );
  } catch ( error ) {
    yield put( fetchSectionsFailure( error.message ) );
  }
}

export function* fetchSectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_SECTIONS_START,
    fetchSectionsAsync
  )
}

export function* shopSagas() {
  yield all([
    call( fetchSectionsStart )
  ])
}
