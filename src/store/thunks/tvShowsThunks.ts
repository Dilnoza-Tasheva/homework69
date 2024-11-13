import { createAsyncThunk } from '@reduxjs/toolkit';
import { IShow } from '../../types';
import AxiosApi from '../../axiosApi.ts';

export const fetchAllShows = createAsyncThunk<IShow[], string> (
  'tvShows/fetchAllShows',
  async (query) => {
    const response = await AxiosApi(`/search/shows?q=${query}`);
    return response.data.map((item: {show: IShow}) => item.show);
  }
);
