// Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Types
interface OrbitParams {
  speed: number;
}

const initialState = { speed: -1.7 } as OrbitParams;

const orbitControl = createSlice({
  name: 'OrbitControl',
  initialState,
  reducers: {
    autoRotate(state) {
      state.speed = -1.7;
    },
    stopRotate(state) {
      state.speed = 0;
    },
    animateRotate(state) {
      state.speed = 3;
    },
  },
});

export const { autoRotate, stopRotate, animateRotate } = orbitControl.actions;

export default orbitControl;
