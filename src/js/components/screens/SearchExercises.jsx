import Box from '@mui/material/Box';
import Bar from '../Bar';
import Drawer from '../Drawer';

const SearchExercises = ({ drawerAnchor, toggleDrawer }) => {
  return(
    <Box sx={{ display: 'flex' }}>
      <Bar title={'Search Exercises'} toggleDrawer={toggleDrawer}/>
      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />
    </Box>
  );
}

export default SearchExercises;
