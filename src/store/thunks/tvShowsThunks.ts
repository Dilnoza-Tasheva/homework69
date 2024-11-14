import { createAsyncThunk } from '@reduxjs/toolkit';
import { IShow } from '../../types';
import AxiosApi from '../../axiosApi.ts';
import axiosApi from '../../axiosApi.ts';

export const fetchAllShows = createAsyncThunk<IShow[], string> (
  'tvShows/fetchAllShows',
  async (query) => {
    const response = await AxiosApi(`/search/shows?q=${query}`);
    return response.data.map((item: {show: IShow}) => item.show);
  }
);

export const fetchOneShowById = createAsyncThunk<IShow, string> (
  'tvShows/fetchOneShowById',
  async (id) => {
    const response = await axiosApi(`/shows/${id}`);
    return response.data;
  }
);
