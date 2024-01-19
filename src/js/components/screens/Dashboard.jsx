import { useState } from 'react';
import { Link } from 'react-router-dom';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Dashboard = () => {
  const [drawerAnchor, setDrawerAnchor] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerAnchor(open);
  };


  return(
    <Box sx={{ display: 'flex' }}>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open-drawer"
              onClick={ toggleDrawer(true) }
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <SwipeableDrawer
        anchor={"left"}
        open={drawerAnchor}
        onOpen={ toggleDrawer(true) }
        onClose={ toggleDrawer(false) }
      >
        <List>
          <ListItem sx={{ display: 'block' }} key={'profile'} disablePadding>
            <Link to={'/Dashboard'} style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText sx={{ color: 'black'}} primary={'Profile'} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem sx={{ display: 'block' }} key={'routine'} disablePadding>
            <Link to={'/Dashboard'} style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <FitnessCenterIcon/>
                </ListItemIcon>
                <ListItemText sx={{ color: 'black'}} primary={'Routine'} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem sx={{ display: 'block' }} key={'search'} disablePadding>
            <Link to={'/Dashboard'} style={{ textDecoration: 'none' }}>
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon/>
                </ListItemIcon>
                <ListItemText sx={{ color: 'black', mr: 2 }} primary={'Search Exercises'} />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider />
          <ListItem sx={{ display: 'block' }} key={'logout'} disablePadding>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <ListItemButton sx={{ color:'red' }}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color:'red' }}/>
                </ListItemIcon>
                <ListItemText sx={{ }} primary={'Log Out!'} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </SwipeableDrawer>
      
      <Container maxWidth="lg" sx={{ mt: 10, mb: 5 }}>
        <Grid container spacing={2}>
          {/* Weight Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Typography variant="h6">
                Weight Chart
              </Typography>
            </Paper>
          </Grid>
          {/* Routine overview */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Typography variant="h6">
                Routine Overview
              </Typography>
            </Paper>
          </Grid>
          {/* More elements... */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Typography>
                More elements...
              </Typography>
            </Paper>
          </Grid>
          {/* More elements... */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Typography>
                More elements...
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;
