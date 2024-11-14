import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { selectFetchAllShows } from '../store/slices/tvShowSlice.ts';
import { useState } from 'react';
import { CircularProgress, Link, TextField } from '@mui/material';
import * as React from 'react';
import { fetchAllShows } from '../store/thunks/tvShowsThunks.ts';
import { NavLink } from 'react-router-dom';


const TvShowsSearchBar = () => {
  const fetchLoading = useAppSelector(selectFetchAllShows);
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const shows = useAppSelector((state) => state.tvShows.shows);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery) {
      dispatch(fetchAllShows(newQuery));
    }
  };


  return (
    <div style={{position: 'relative'}}>
      <TextField
        value={query}
        onChange={onSearch}
        label="Search for a TV show"
        variant="outlined"
        fullWidth
      />

      {fetchLoading && <CircularProgress/>}

      {query && shows.length > 0 && (
        <div style={{
          position: 'absolute', background: 'white', border: '1px solid #ddd',
          width: '100%', maxHeight: '200px', overflowY: 'auto', zIndex: 1
        }}>
          {shows.map((show) => (
            <div key={show.id} style={{padding: '10px'}}>
              <Link sx={{textDecoration: 'none'}} component={NavLink} to={`shows/${show.id}`}>{show.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TvShowsSearchBar;