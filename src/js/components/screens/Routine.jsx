import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

import Bar from '../Bar';
import Drawer from '../Drawer';
import RoutineForm from '../RoutineForm';

import { userData } from '../../state/state';
import { useAtomValue } from "jotai/react";

const Routine = ({ drawerAnchor, toggleDrawer }) => {
  const user = useAtomValue(userData);

  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
  }

  // TODO: Images URLs change evry 24hours
  const getImage = (exercise) => {
    return exercise.gifUrl
  }

  const [created, setCreated] = useState(!isEmpty(user.workout));
  const [creating, setCreating] = useState(false);

  const onCreateRoutine = () => {
    setCreating(true);
  }

  const [open, setOpen] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);
  const handleOpen = (currentExercise) => () => {
    setOpen(true);
    setCurrentExercise(currentExercise);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const [loading, setLoading] = useState(false);

  return(
    <Box sx={{ display: 'flex' }}>
      <Bar title={'Routine'} toggleDrawer={toggleDrawer}/>
      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />
      {
        currentExercise ?
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              overflow: "scroll",
            }}
          >
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: "65%",
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 2,
            }}>
              
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Instructions:
              </Typography>
              {
                currentExercise.instructions.map((instruction, index) => 
                  <Typography key={index} id={index}>
                    {index}: {instruction}
                  </Typography>
                )
              }
            </Box>
          </Modal>
          :
          <></>
      }
      { created ?
        <Container sx={{ pt:10 }}>
          <Typography variant='h4' gutterBottom>
            Your Weekly Routine!
          </Typography>
          {
            Object.keys(user.workout).map((key) => (
              <>
                <Typography variant="h5" gutterBottom>
                  Day {key}
                </Typography>
                <Carousel
                  autoPlay={false}
                  animation="slide"
                  swipe={true}
                  navButtonsAlwaysInvisible={true}
                >
                  {
                    user.workout[key].map((exercise) => (
                      <Card key={exercise.id}
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <CardMedia
                          component="div"
                          sx={{
                            pt: '100%',
                          }}
                          image={getImage(exercise)}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {exercise.name}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button onClick={handleOpen(exercise)} size="small">View instructions</Button>
                        </CardActions>
                      </Card>
                    ))
                  }
                </Carousel>
              </>
            ))

          }
        </Container>
        :
        (creating ?
          <Container sx={{ pt: 10 }}>
          {
            loading ?
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <CircularProgress />
                <Typography variant="h5" sx={{ mt: 2 }}gutterBottom>Generating routine...</Typography>
                <Typography>Please wait a minute</Typography>
              </Box>
              :
              <RoutineForm setLoading={setLoading} setCreated={setCreated} />
          }
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
