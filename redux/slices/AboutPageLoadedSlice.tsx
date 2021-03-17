// Redux Toolkit
import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";

// Next Redux Wrapper
import { HYDRATE } from "next-redux-wrapper";

// Redux Types
import { AppState } from "../store";

// Types
interface AboutPageLoadedProps {
  pageLoaded: boolean;
}

const hydrate = createAction<AppState>(HYDRATE);

const AboutPageLoaded = createSlice({
  name: "AboutPageLoaded",
  initialState: { pageLoaded: false } as AboutPageLoadedProps,
  reducers: {
    loadPage: (state, action: PayloadAction<AboutPageLoadedProps>) => {
      const { pageLoaded } = action.payload;
      state.pageLoaded = pageLoaded;
    },
    unloadPage: (state, action: PayloadAction<AboutPageLoadedProps>) => {
      const { pageLoaded } = action.payload;
      state.pageLoaded = pageLoaded;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload[AboutPageLoaded.name],
      };
    });
  },
});

export const { loadPage, unloadPage } = AboutPageLoaded.actions;

export default AboutPageLoaded;
