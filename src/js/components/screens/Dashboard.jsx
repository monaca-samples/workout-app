import { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Bar from '../Bar';
import Drawer from '../Drawer';
import WeightChart from '../WeightChart';

import { userData } from '../../state/state';
import { useAtomValue } from 'jotai/react';

const Dashboard = ({ drawerAnchor, toggleDrawer }) => {
  const user = useAtomValue(userData);

  return(
    <Box sx={{ display: 'flex' }}>

      <Bar title={'Dashboard'} toggleDrawer={toggleDrawer}/>

      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />

      <Container maxWidth="lg" sx={{ mt: 10, mb: 5 }}>
        <Typography variant="h5" gutterBottom>
          Welcome back, {user.name}!
        </Typography>
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
              <WeightChart />
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
