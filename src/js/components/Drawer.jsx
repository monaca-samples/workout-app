import { Link } from 'react-router-dom';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';

const Drawer = ({ drawerAnchor, toggleDrawer }) => {
  return(
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
  );
}

export default Drawer;