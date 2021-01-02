// Redux Toolkit
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

// Next Redux Wrapper
import { HYDRATE } from 'next-redux-wrapper';

// Redux Types
import { AppState } from '../store';

// Types
interface OrbitParams {
  speed: number;
}

const hydrate = createAction<AppState>(HYDRATE);

const orbitControl = createSlice({
  name: 'orbitControl',
  initialState: { speed: -1.7 } as OrbitParams,
  reducers: {
    autoRotate: (state, action: PayloadAction<OrbitParams>) => {
      const { speed } = action.payload;
      state.speed = speed;
    },
    stopRotate: (state, action: PayloadAction<OrbitParams>) => {
      const { speed } = action.payload;
      state.speed = speed;
    },
    animateRotate: (state, action: PayloadAction<OrbitParams>) => {
      const { speed } = action.payload;
      state.speed = speed;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload[orbitControl.name],
      };
    });
  },
});

export const { autoRotate, stopRotate, animateRotate } = orbitControl.actions;

export default orbitControl;
