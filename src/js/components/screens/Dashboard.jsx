import { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';

import Bar from '../Bar';
import Drawer from '../Drawer';

const Dashboard = ({ drawerAnchor, toggleDrawer }) => {

  const actualWeigths = [
    60,
    58,
    56,
    59,
  ];
  const xLabels = [
    '01/10/2023',
    '01/11/2023',
    '01/12/2023',
    '01/01/2024',
  ];

  return(
    <Box sx={{ display: 'flex' }}>

      <Bar title={'Dashboard'} toggleDrawer={toggleDrawer}/>

      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />
      
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
              <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
                <LineChart
                  margin={{
                    top: 50,
                    right: 40,
                    left: 40,
                    bottom: 30,
                  }}
                  xAxis={[{ scaleType: 'point', data: xLabels }]}
                  series={[
                    {
                      data: actualWeigths, label:'Actual weight'
                    },
                    {
                      data: [57, 57, 57, 57], label:'Ideal weight'
                    },
                  ]}
                />
              </div>
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
