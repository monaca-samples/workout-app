import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Bar from "js/components/Bar";
import Drawer from "js/components//Drawer";
import WeightChart from "js/components//WeightChart";

import { userData } from "js/state/state";
import { useAtomValue } from "jotai/react";
import BmiGauge from "js/components/BmiGauge";

const Dashboard = ({ drawerAnchor, toggleDrawer, changeTheme }) => {
  const user = useAtomValue(userData);

  // Generates a readable string concatenation of all exercises in a day of the routine
  const listExercisesNames = (day) => {
    let names = "";
    for (let i = 0; i < user.workout[day].length; i++) {
      if (i === user.workout[day].length - 1) {
        names += user.workout[day][i].name;
      } else {
        names = names + user.workout[day][i].name + ", ";
      }
    }
    return names;
  };

  return (
    <Box>
      <Bar
        title={"Dashboard"}
        toggleDrawer={toggleDrawer}
        changeTheme={changeTheme}
      />

      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />

      <Container maxWidth="lg" sx={{ mt: 10, mb: 5 }}>
        <Typography variant="h5" gutterBottom>
          Welcome back, {user.name}!
        </Typography>
        <Grid container spacing={2}>
          {/* Weight Chart */}
          <Grid item xs={12} md={9} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <WeightChart
                height={user.height}
                weights={user.weights.slice(-6)}
              />
            </Paper>
          </Grid>
          {/* BMI */}
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <BmiGauge />
            </Paper>
          </Grid>
          {/* Routine overview */}
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Routine Overview
              </Typography>
              <Typography>
                Number of workouts a week: {Object.keys(user.workout).length}
              </Typography>
              {Object.keys(user.workout).map((day, index) => (
                <div key={index}>
                  <Typography sx={{ mt: 1 }}>Day {day}:</Typography>
                  <Typography>{listExercisesNames(day)}</Typography>
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
