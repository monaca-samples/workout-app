import Box from '@mui/material/Box';
import Bar from '../Bar';
import Drawer from '../Drawer';

const Profile = ({ drawerAnchor, toggleDrawer }) => {
  return(
    <Box sx={{ display: 'flex' }}>
      <Bar title={'Profile'} toggleDrawer={toggleDrawer}/>
      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />
    </Box>
  );
}

export default Profile;
