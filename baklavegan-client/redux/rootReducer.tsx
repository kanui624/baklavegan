// Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import orbitControl from './slices/orbitControlSlice';

const rootReducer = combineReducers({
  orbit: orbitControl.reducer,
});

export default rootReducer;
