import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Bar from '../Bar';
import Drawer from '../Drawer';

const Routine = ({ drawerAnchor, toggleDrawer }) => {
  const [created, setCreated] = useState(false);
  const [creating, setCreating] = useState(false);

  const onCreateRoutine = () => {
    setCreating(true);
  }

  const steps = ['Basic Details', 'Advanced details'];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCreate = () => {
    alert('Creating routine...');
    setCreated(true);
  }

  const [days, setDays] = useState(0);
  const generateDaysMarks = () => {
    return [1,2,3,4,5,6,7].map((val) => {
      return {value: val, label: val};
    });
  }
  const handleSliderChange = (e) => {
    setDays(e.target.value);
  }
  const [goal, setGoal] = useState('');
  const handleChangeGoal = (event) => {
    setGoal(event.target.value);
  };
  const goals = [
    'lose weight',
    'gain muscle',
    'gain flexibility',
    'become more athletic',
  ];
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Basic details
            </Typography>
            <Typography gutterBottom>
              How many days a week do you want to workout?
            </Typography>
            <Slider
              aria-label="days-a-week"
              defaultValue={0}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              step={1}
              marks={generateDaysMarks()}
              min={1}
              max={7}
            />
            <Typography gutterBottom sx={{ mt:1 }}>
              What is your main goal?
            </Typography>
            <FormControl sx={{ mt: 1, minWidth: 120 }} size="small" fullWidth>
              <InputLabel id="goal">Goal</InputLabel>
              <Select
                id="goal"
                value={goal}
                label="Goal"
                onChange={handleChangeGoal}
              >
                <MenuItem value=""><em>None in particular</em></MenuItem>
                {
                  goals.map((goal) =>
                    <MenuItem value={goal}>{goal}</MenuItem>
                  )
                }
              </Select>
            </FormControl>
            <Typography gutterBottom sx={{ mt:1 }}> 
              Add more stuff...
            </Typography>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Advanced details
            </Typography>
            <Typography gutterBottom>
              Add more stuff...
            </Typography>
          </>
        );
      default:
        throw new Error('Unknown step');
    }
  }

  return(
    <Box sx={{ display: 'flex' }}>
      <Bar title={'Routine'} toggleDrawer={toggleDrawer}/>
      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />

      { created ?
        <Container sx={{ pt:8 }}>
          <Typography variant='h5'>
            Routine created!
          </Typography>
        </Container>
        :
        (creating ?
          <Container sx={{ pt: 8 }}>
            <Typography variant="h5">
              Creating Routine...
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep === steps.length-1?
                  <Button
                    variant="contained"
                    onClick={handleCreate}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Create
                  </Button>
                  :
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                }
                
              </Box>
          </Container>
          :
          <Container sx={{ pt:8 }}>
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
