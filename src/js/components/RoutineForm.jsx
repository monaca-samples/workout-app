import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { userData } from "js/state/state";
import { useAtom } from "jotai/react";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "js/firebase";

import { generateRoutine } from "js/routineGenerator";

import { searchApi } from "js/workoutApi";

const RoutineForm = ({ setLoading, setCreated }) => {
  const steps = ["Basic Details", "Advanced details"];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [days, setDays] = useState(1);
  const generateDaysMarks = () => {
    return [1, 2, 3, 4, 5, 6, 7].map((val) => {
      return { value: val, label: val };
    });
  };
  const handleDaysSliderChange = (e) => {
    setDays(e.target.value);
  };
  const [hours, setHours] = useState(1);
  const generateHoursMarks = () => {
    return [1, 2, 3, 4, 5].map((val) => {
      return { value: val, label: val };
    });
  };
  const handleHoursSliderChange = (e) => {
    setHours(e.target.value);
  };
  const [firstTime, setFirstTime] = useState(false);
  const handleChangeFirstTime = (event) => {
    setFirstTime(event.target.value);
  };
  const [goal, setGoal] = useState("");
  const handleChangeGoal = (event) => {
    setGoal(event.target.value);
  };
  const goals = ["lose weight", "gain muscle"];
  const [targetGroup, setTargetGroup] = useState("");
  const handleChangeTargetGroup = (event) => {
    setTargetGroup(event.target.value);
  };
  const targets = [
    "upper body",
    "lower body",
    "pecs",
    "back",
    "shoulders",
    "arms",
    "abs",
    "quadriceps",
    "hamstrings",
  ];

  const [user, setUser] = useAtom(userData);
  const docRef = doc(db, "users", `${user.email}`);
  const uploadData = async (workout) => {
    updateDoc(docRef, { workout: workout });
  };

  const handleCreate = async () => {
    setLoading(true);
    const generatedRoutine = generateRoutine(days, hours, goal);

    // populate actual routine with exercised data from API
    const actualRoutine = {};
    for (let i = 0; i < Object.keys(generatedRoutine).length; i++) {
      actualRoutine[`${i + 1}`] = [];
      for (let j = 0; j < generatedRoutine[`${i + 1}`].length; j++) {
        const exercise = await searchApi(
          "id",
          generatedRoutine[`${i + 1}`][j],
          null,
        );
        actualRoutine[`${i + 1}`].push(exercise);
      }
    }

    // save to Firestore and current state user
    setUser({ ...user, workout: actualRoutine });
    uploadData(actualRoutine);

    setLoading(false);
    setCreated(true);
  };

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
              value={days}
              onChange={handleDaysSliderChange}
              valueLabelDisplay="auto"
              step={1}
              marks={generateDaysMarks()}
              min={1}
              max={7}
            />
            <Typography gutterBottom>
              How many hours a day do you want to workout?
            </Typography>
            <Slider
              aria-label="hours-a-day"
              value={hours}
              onChange={handleHoursSliderChange}
              valueLabelDisplay="auto"
              step={1}
              marks={generateHoursMarks()}
              min={1}
              max={5}
            />
            <Typography gutterBottom sx={{ mt: 1 }}>
              Is this your first time exercising?
            </Typography>
            <FormControl sx={{ mt: 1, minWidth: 120 }} size="small" fullWidth>
              <InputLabel id="first-time">First time?</InputLabel>
              <Select
                id="first-time"
                value={firstTime}
                label="First time?"
                onChange={handleChangeFirstTime}
              >
                <MenuItem value={false}>No</MenuItem>
                <MenuItem value={true}>Yes</MenuItem>
              </Select>
            </FormControl>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h6" gutterBottom>
              Advanced details
            </Typography>
            <Typography gutterBottom sx={{ mt: 1 }}>
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
                <MenuItem value="">
                  <em>None in particular</em>
                </MenuItem>
                {goals.map((goal, index) => (
                  <MenuItem key={index} value={goal}>
                    {goal}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography gutterBottom sx={{ mt: 1 }}>
              What is your target muscle group?
            </Typography>
            <FormControl sx={{ mt: 1, minWidth: 120 }} size="small" fullWidth>
              <InputLabel id="target">Target muscle group</InputLabel>
              <Select
                id="target"
                value={targetGroup}
                label="Target muscle group"
                onChange={handleChangeTargetGroup}
              >
                <MenuItem value="">
                  <em>None in particular</em>
                </MenuItem>
                {targets.map((target, index) => (
                  <MenuItem key={index} value={target}>
                    {target}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        );
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <>
      <Typography variant="h5">Creating Routine...</Typography>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(activeStep)}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
        )}
        {activeStep === steps.length - 1 ? (
          <Button
            variant="contained"
            onClick={handleCreate}
            sx={{ mt: 3, ml: 1 }}
          >
            Create
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            Next
          </Button>
        )}
      </Box>
    </>
  );
};

export default RoutineForm;
