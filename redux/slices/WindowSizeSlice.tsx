// Redux Toolkit
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

// Next Redux Wrapper
import { HYDRATE } from 'next-redux-wrapper';

// Redux Types
import { AppState } from '../store';

// Types
interface WindowSizeProps {
  width: number;
  height: number;
}

const hydrate = createAction<AppState>(HYDRATE);

const WindowSize = createSlice({
  name: 'WindowSize',
  initialState: { width: 0, height: 0 } as WindowSizeProps,
  reducers: {
    setDimensions: (state, action: PayloadAction<WindowSizeProps>) => {
      const { width, height } = action.payload;
      state.width = width;
      state.height = height;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload[WindowSize.name],
      };
    });
  },
});

export const { setDimensions } = WindowSize.actions;

export default WindowSize;
