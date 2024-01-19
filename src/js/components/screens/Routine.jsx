import Box from '@mui/material/Box';
import Bar from '../Bar';
import Drawer from '../Drawer';

const Routine = ({ drawerAnchor, toggleDrawer }) => {
  return(
    <Box sx={{ display: 'flex' }}>
      <Bar title={'Routine'} toggleDrawer={toggleDrawer}/>
      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />
    </Box>
  );
}

export default Routine;
