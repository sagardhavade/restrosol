// rootSlice.ts

import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import contactReducer from './contactSlice';

const rootReducer = combineReducers({
  users: userReducer,
  contacts: contactReducer,
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
