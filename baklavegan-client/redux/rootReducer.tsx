// Redux Toolkit
import { combineReducers } from 'redux';

// Reducers
import MenuTransition from './slices/MenuTransitionSlice';

const rootReducer = combineReducers({
  [MenuTransition.name]: MenuTransition.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
