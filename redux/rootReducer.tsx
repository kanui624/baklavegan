// Redux Toolkit
import { combineReducers } from 'redux';

// Reducers
import WindowSize from './slices/WindowSizeSlice';
import MenuTransition from './slices/MenuTransitionSlice';
import AboutPageCount from './slices/AboutPageCountSlice';
import AboutPageLoaded from './slices/AboutPageLoadedSlice';
import PageClicked from './slices/PageClickedSlice';

const rootReducer = combineReducers({
  [WindowSize.name]: WindowSize.reducer,
  [MenuTransition.name]: MenuTransition.reducer,
  [AboutPageCount.name]: AboutPageCount.reducer,
  [AboutPageLoaded.name]: AboutPageLoaded.reducer,
  [PageClicked.name]: PageClicked.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
