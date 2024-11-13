import { createSlice } from '@reduxjs/toolkit';
import { IShow } from '../../types';

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

export const tvShowSlice = createSlice({
  name: 'tvShow',
  initialState,
  reducers: {}
});

export const tvShowsReducer = tvShowSlice.reducer;
export const {} = tvShowSlice.actions;