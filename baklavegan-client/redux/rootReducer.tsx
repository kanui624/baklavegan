// Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import orbitControl from './slices/orbitControlSlice';

const rootReducer = combineReducers({
  [orbitControl.name]: orbitControl.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
