import TvShowsSearchBar from './components/tvShowsSearchBar.tsx';
import { Route, Routes } from 'react-router-dom';
import DisplayShows from './containers/DisplayShows.tsx';


const App = () => {

  return (
    <>
      <TvShowsSearchBar/>
      <Routes>
        <Route path="/" element={<div>Search for a TV Show</div>}/>
        <Route path="/shows/:id" element={<DisplayShows/>}/>
      </Routes>
    </>
  );
};

export default App;
