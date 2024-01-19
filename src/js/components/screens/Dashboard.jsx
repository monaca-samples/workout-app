import { useState } from 'react';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';

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
      <IconButton
        aria-label="open drawer"
        onClick={ toggleDrawer(true) }
      >
        <MenuIcon sx={{ p:1 }}/>
      </IconButton>
      <SwipeableDrawer
        anchor={"left"}
        open={drawerAnchor}
        onOpen={ toggleDrawer(true) }
        onClose={ toggleDrawer(false) }
      >
        <List>
          {['Profile', 'Routine', 'Search Exercise'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
          <ListItem key={'logout'} disablePadding>
            <ListItemButton sx={{ color:'red' }}>
              <ListItemIcon>
                <LogoutIcon sx={{ color:'red' }}/>
              </ListItemIcon>
              <ListItemText sx={{ }} primary={'Log Out!'} />
            </ListItemButton>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </Box>
  );
}

export default Dashboard;
