import { takeLatest, call, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  registerUsersStart,
  registerUsersSuccess,
  registerUsersFailure,
  loginUsersStart,
  loginUsersSuccess,
  loginUsersFailure,
} from '../features/userSlice';

// Login saga

function* loginUsersSaga(action: any) {
  const { payload, onSuccess, onFailureCallback } = action.payload;
  console.log(action.payload);
  try {
    const response: AxiosResponse = yield call(axios.post, 'http://localhost:4000/api/v1/users/login', payload);

    if (typeof onSuccess === 'function') {
      yield call(onSuccess, response.data);
    }

    yield put(loginUsersSuccess(response.data));
  } catch (error: any) {
    if (typeof onFailureCallback === 'function') {
      yield call(onFailureCallback, error.message);
    }

    yield put(loginUsersFailure(error.message));
  }
}

// Registration saga
function* registerUsersSaga(action: any) {
  const { payload, onSuccess, onFailure } = action.payload;
  try {
    const response: AxiosResponse = yield call(axios.post, 'http://localhost:4000/api/v1/users/register', payload);
    if (typeof onSuccess === 'function') {
      yield call(onSuccess, response.data);
    }

    yield put(registerUsersSuccess(response.data));
  } catch (error: any) {
    if (typeof onFailure === 'function') {
      yield call(onFailure, error.message);
    }

    yield put(registerUsersFailure(error.message));
  }
}

// Watcher saga
export function* watchUsers() {
  yield takeLatest('user/registerUsersStart', registerUsersSaga);
  yield takeLatest('user/loginUsersStart', loginUsersSaga);
}
