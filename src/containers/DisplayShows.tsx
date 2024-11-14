
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { selectFetchOneShow } from '../store/slices/tvShowSlice.ts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneShowById } from '../store/thunks/tvShowsThunks.ts';
import { CircularProgress } from '@mui/material';


const DisplayShows = () => {
  const dispatch = useAppDispatch();
  const oneShow = useAppSelector((state) => state.tvShows.selectedShow);
  const fetchOneShowLoading = useAppSelector(selectFetchOneShow);
  const {id} = useParams<{id: string}>();

  useEffect(() => {
    if (id) {
      dispatch(fetchOneShowById(id));
    }
  }, [id, dispatch]);

  if (fetchOneShowLoading) {
    return <CircularProgress/>;
  }

  if (!oneShow) {
    return <div>No information available.Try again</div>;
  }

  return (
    <div>
      <h3>{oneShow.name}</h3>
      <p><span>{oneShow.genres}</span></p>
      <p>{oneShow.summary}</p>
    </div>
  );
};

export default DisplayShows;