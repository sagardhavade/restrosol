import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUsersStart(state, action: PayloadAction<any>) {
      console.log("register-slice");
      state.status = 'loading';
    },
    registerUsersSuccess(state, action: PayloadAction<any>) {
      state.status = 'succeeded';
      state.user = action.payload;
    },
    registerUsersFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
    loginUsersStart(state, action: PayloadAction<any>) {
      console.log("slice");
      state.status = 'loading';
    },
    loginUsersSuccess(state, action: PayloadAction<any>) {
      state.status = 'succeeded';
      state.user = action.payload;
    },
    loginUsersFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  registerUsersStart,
  registerUsersSuccess,
  registerUsersFailure,
  loginUsersStart,
  loginUsersSuccess,
  loginUsersFailure,
} = userSlice.actions;

export default userSlice.reducer;
