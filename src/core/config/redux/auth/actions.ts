import { createAction } from '@reduxjs/toolkit';
import { IAuth } from './types';

export const signIn = createAction<Partial<IAuth>>('auth/sign-in');
export const signOut = createAction('auth/sign-out');
