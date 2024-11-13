import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShow } from '../../types';
import { fetchAllShows } from '../thunks/tvShowsThunks.ts';
import { RootState } from '../../app/store.ts';

interface tvShowsState {
  shows: IShow[],
  fetchAllLoading: boolean,
  fetchOneShowLoading: boolean,
}

const initialState: tvShowsState = {
  shows: [],
  fetchAllLoading: false,
  fetchOneShowLoading: false,
};

export const selectFetchAllShows = (state: RootState) => state.tvShows.fetchAllLoading;

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
      });
  }
});

export const tvShowsReducer = tvShowSlice.reducer;