import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShow } from '../../types';
import { fetchAllShows, fetchOneShowById } from '../thunks/tvShowsThunks.ts';
import { RootState } from '../../app/store.ts';

interface tvShowsState {
  shows: IShow[];
  selectedShow: IShow | null;
  fetchAllLoading: boolean;
  fetchOneShowLoading: boolean;
}

const initialState: tvShowsState = {
  shows: [],
  selectedShow: null,
  fetchAllLoading: false,
  fetchOneShowLoading: false,
};

export const selectFetchAllShows = (state: RootState) => state.tvShows.fetchAllLoading;
export const selectFetchOneShow = (state: RootState) => state.tvShows.fetchOneShowLoading;

export const tvShowSlice = createSlice({
  name: 'tvShow',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllShows.pending, (state) => {
        state.fetchAllLoading = true;
      })
      .addCase(fetchAllShows.fulfilled, (state, action: PayloadAction<IShow[]>) => {
        state.fetchAllLoading = false;
        state.shows = action.payload;
      })
      .addCase(fetchAllShows.rejected, (state) => {
        state.fetchAllLoading = false;
      })
      .addCase(fetchOneShowById.pending, (state) => {
        state.fetchOneShowLoading = true;
      })
      .addCase(fetchOneShowById.fulfilled, (state, action: PayloadAction<IShow>) => {
        state.fetchOneShowLoading = false;
        state.selectedShow = action.payload;
      })
      .addCase(fetchOneShowById.rejected, (state) => {
        state.fetchOneShowLoading = false;
      });
  }
});

export const tvShowsReducer = tvShowSlice.reducer;