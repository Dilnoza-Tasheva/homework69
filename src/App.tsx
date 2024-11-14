import TvShowsSearchBar from './components/TvShowsSearchBar/tvShowsSearchBar.tsx';
import { Route, Routes } from 'react-router-dom';
import DisplayShows from './containers/DisplayShows.tsx';
import NavBar from './components/NavBar/navBar.tsx';
import { Container } from '@mui/material';


const App = () => {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Container maxWidth="lg">
        <TvShowsSearchBar/>
        <Routes>
          <Route path="/" element={<div>Search for a TV Show</div>}/>
          <Route path="/shows/:id" element={<DisplayShows/>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;
