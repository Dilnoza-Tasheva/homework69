import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6" to="/" component={NavLink} sx={{ flexGrow: 1, textDecoration: "none" }}>
            TV Show Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;