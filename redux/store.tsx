// Redux Toolkit
import { configureStore, ThunkAction } from '@reduxjs/toolkit';

// Redux
import { Action } from 'redux';

// Next Redux Wrapper
import { createWrapper } from 'next-redux-wrapper';

// Root Reducer
import rootReducer from './rootReducer';

const makeStore = () => configureStore({ reducer: rootReducer });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper(makeStore);
