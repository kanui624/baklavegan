// Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Next Redux Wrapper
import { createWrapper } from 'next-redux-wrapper';

// Root Reducer
import rootReducer from './rootReducer';

const makeStore = () => configureStore({ reducer: rootReducer });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);
