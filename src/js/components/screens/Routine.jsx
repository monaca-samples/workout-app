import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Bar from '../Bar';
import Drawer from '../Drawer';
import RoutineForm from '../RoutineForm';

const Routine = ({ drawerAnchor, toggleDrawer }) => {
  const [created, setCreated] = useState(false);
  const [creating, setCreating] = useState(false);

  const onCreateRoutine = () => {
    setCreating(true);
  }

  return(
    <Box sx={{ display: 'flex' }}>
      <Bar title={'Routine'} toggleDrawer={toggleDrawer}/>
      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />

      { created ?
        <Container sx={{ pt:10 }}>
          <Typography variant='h5'>
            Routine created!
          </Typography>
        </Container>
        :
        (creating ?
          <Container sx={{ pt: 10 }}>
            <RoutineForm setCreated={setCreated} />
          </Container>
          :
          <Container sx={{ pt:10 }}>
          <Typography variant='h5'>
            You don't have a routine yet, do you want to create one?
          </Typography>
          <Button
            fullWidth
            variant="contained"
            onClick={onCreateRoutine}
            sx={{ mt: 2 }}
          >
            Create Routine!
          </Button>
        </Container>
        )
      }
    </Box>
  );
}

export default Routine;
