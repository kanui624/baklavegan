// Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Root Reducer
import rootReducer from './rootReducer';

const store = configureStore({ reducer: rootReducer });

export default store;
