
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { selectFetchOneShow } from '../store/slices/tvShowSlice.ts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneShowById } from '../store/thunks/tvShowsThunks.ts';
import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';


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
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ boxShadow: 3 }}>
        {oneShow.image && (
          <CardMedia
            component="img"
            height="450"
            image={oneShow.image.original}
            alt={oneShow.name}
          />
        )}
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom >{oneShow.name}</Typography>
          <Typography variant="h5" color="primary">{oneShow.genres}</Typography>
          <Typography variant="body1" color="textSecondary" >{oneShow.summary}</Typography>
          <Box>
            <Typography variant="body2" color="textSecondary">
              Rating: {oneShow.rating?.average || 'N/a'}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DisplayShows;