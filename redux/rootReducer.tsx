// Redux Toolkit
import { combineReducers } from 'redux';

// Reducers
import WindowSize from './slices/WindowSizeSlice';
import MenuTransition from './slices/MenuTransitionSlice';

const rootReducer = combineReducers({
  [WindowSize.name]: WindowSize.reducer,
  [MenuTransition.name]: MenuTransition.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
