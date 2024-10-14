import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { IRoot } from './index.types';
import { authReducer } from './auth/reducer';
import { IAuth } from './auth/types';

const rootReduce = combineReducers<IRoot>({
  auth: authReducer as unknown as IAuth,
});

export const rootStore = configureStore({
  reducer: rootReduce,
});
