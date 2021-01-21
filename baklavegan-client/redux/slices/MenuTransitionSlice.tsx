// Redux Toolkit
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

// Next Redux Wrapper
import { HYDRATE } from 'next-redux-wrapper';

// Redux Types
import { AppState } from '../store';

// Types
interface MenuTransitionProps {
  transition: boolean;
}

const hydrate = createAction<AppState>(HYDRATE);

const MenuTransition = createSlice({
  name: 'MenuTransition',
  initialState: { transition: false } as MenuTransitionProps,
  reducers: {
    enterMenu: (state, action: PayloadAction<MenuTransitionProps>) => {
      const { transition } = action.payload;
      state.transition = transition;
    },
    exitMenu: (state, action: PayloadAction<MenuTransitionProps>) => {
      const { transition } = action.payload;
      state.transition = transition;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload[MenuTransition.name],
      };
    });
  },
});

export const { enterMenu, exitMenu } = MenuTransition.actions;

export default MenuTransition;
