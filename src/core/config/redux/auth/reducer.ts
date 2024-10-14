import { createReducer } from '@reduxjs/toolkit';

import { IAuth } from './types';
import { signIn, signOut } from './actions';

const initialState: IAuth = {
  token: null,
  user: null,
};

export const authReducer = createReducer<IAuth>(
  initialState,
  (builder) => {
    builder
      .addCase(signIn, (state, action) => {
        state = {
          ...state,
          ...action.payload,
        };

        return state;
      })
      .addCase(signOut, (state) => {
        state.user = null;
        state.token = null;

        return state;
      });
  }
);
