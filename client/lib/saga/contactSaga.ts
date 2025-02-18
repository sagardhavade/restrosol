// src/sagas/contactSaga.ts

import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchContactsSuccess,
  fetchContactsFailure,
  addContactSuccess,
  addContactFailure,
  updateContactSuccess,
  updateContactFailure,
  deleteContactSuccess,
  deleteContactFailure,
} from '../features/contactSlice';

interface Contact {
  id: string;
  name: string;
  email: string;
  type: string;
  status: string;
  date: string;
}

// const API_URL = 'http://localhost:4000/api/v1/contactList';
const API_URL = `${process.env.NEXT_PUBLIC_API}/contactList`;

function* fetchContactsSaga(action: any) {
  try {
    const response: AxiosResponse<Contact[]> = yield call(axios.get, API_URL);
    yield put(fetchContactsSuccess(response.data));
  } catch (error) {
    yield put(fetchContactsFailure((error as Error).message));
  }
}


// function* addContactSaga(action: any) {
//   console.log("saga");
//   const {payload} = action.payload;
//   try {
//     const response: AxiosResponse<Contact> = yield call(axios.post, API_URL, payload);
    
//     yield put(addContactSuccess(response.data));
//   } catch (error) {
//     // Dispatch the addContactFailure action with the error message
//     yield put(addContactFailure((error as Error).message));
//   }
// }
// src/sagas/contactSaga.ts

function* addContactSaga(action: any) {
  const { payload } = action; // Directly extracting payload here
  try {
    const response: AxiosResponse<Contact> = yield call(axios.post, API_URL, payload);
    yield put(addContactSuccess(response.data));
  } catch (error) {
    yield put(addContactFailure((error as Error).message));
  }
}

function* updateContactSaga(action: any) {
  try {
    const { id, status } = action.payload;
    const response: AxiosResponse<Contact> = yield call(axios.patch, `${API_URL}/${id}`, { status });
    yield put(updateContactSuccess(response.data));
  } catch (error) {
    yield put(updateContactFailure((error as Error).message));
  }
}

function* deleteContactSaga(action: any) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(deleteContactSuccess(action.payload));
  } catch (error) {
    yield put(deleteContactFailure((error as Error).message));
  }
}


// Watcher saga
export function* contactSaga() {
    yield takeLatest("contacts/fetchContacts", fetchContactsSaga);
    yield takeLatest("contacts/addContact", addContactSaga);
    yield takeLatest("contacts/updateContactSaga", updateContactSaga);
    // yield takeLatest("contacts/updateContactSaga", updateContactSaga);
    yield takeLatest("contacts/deleteContactSaga", deleteContactSaga);
  }
  