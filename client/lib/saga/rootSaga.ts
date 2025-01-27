// rootSaga.ts

import { all } from 'redux-saga/effects';
import { watchUsers } from './userSaga';
import { contactSaga } from '../saga/contactSaga';

export function* rootSaga() {
  yield all([
    watchUsers(),
    contactSaga(),
    // Add other saga watchers here if needed
  ]);
}
