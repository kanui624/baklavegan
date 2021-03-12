// Redux Toolkit
import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";

// Next Redux Wrapper
import { HYDRATE } from "next-redux-wrapper";

// Redux Types
import { AppState } from "../store";

// Types
interface AboutPageCountProps {
  pageCount: number;
}

const hydrate = createAction<AppState>(HYDRATE);

const AboutPageCount = createSlice({
  name: "AboutPageCount",
  initialState: { pageCount: 0 } as AboutPageCountProps,
  reducers: {
    nextPage: (state, action: PayloadAction<AboutPageCountProps>) => {
      const { pageCount } = action.payload;
      state.pageCount = pageCount;
    },
    prevPage: (state, action: PayloadAction<AboutPageCountProps>) => {
      const { pageCount } = action.payload;
      state.pageCount = pageCount;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload[AboutPageCount.name],
      };
    });
  },
});

export const { nextPage, prevPage } = AboutPageCount.actions;

export default AboutPageCount;
