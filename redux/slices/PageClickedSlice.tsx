// Redux Toolkit
import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

// Next Redux Wrapper
import { HYDRATE } from 'next-redux-wrapper';

// Redux Types
import { AppState } from '../store';

// Types
interface PageClickedProps {
  pageClicked: string;
}

const hydrate = createAction<AppState>(HYDRATE);

const PageClicked = createSlice({
  name: 'PageClicked',
  initialState: { pageClicked: '' } as PageClickedProps,
  reducers: {
    setPageClicked: (state, action: PayloadAction<PageClickedProps>) => {
      const { pageClicked } = action.payload;
      state.pageClicked = pageClicked;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload[PageClicked.name],
      };
    });
  },
});

export const { setPageClicked } = PageClicked.actions;

export default PageClicked;
