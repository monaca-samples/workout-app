import { useState } from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterListIcon from '@mui/icons-material/FilterList';

import Bar from '../Bar';
import Drawer from '../Drawer';

const SearchExercises = ({ drawerAnchor, toggleDrawer }) => {
  const [searchText, setSearchText] = useState('');
  const [exercises, setExercises] = useState([]);

  const searchTextHandler = (e) => {
    setSearchText(e.target.value)
 };

  const onSearch = () => {
    if (searchText.trim().length === 0) {
      alert("Please input something");
      return
    }

    // TODO: return actual data from API
    setExercises([]);
    for (let i = 0; i < 10; i++) {
      setExercises((prevState) => ([...prevState, {name: `${searchText} ${i}`, image: "https://source.unsplash.com/random?exercise"}]))
    }
    // reset filters
    setMuscle('');
    setType('');
    setDifficulty('');
  }

  const [muscle, setMuscle] = useState('');
  const handleChangeMuscle = (event) => {
    setMuscle(event.target.value);
  };
  const muscles = [
    'abdominals',
    'abductors',
    'adductors',
    'biceps',
    'calves',
    'chest',
    'forearms',
    'glutes',
    'hamstrings',
    'lats',
    'lower_back',
    'middle_back',
    'neck',
    'quadriceps',
    'traps',
    'triceps',
  ];

  const [type, setType] = useState('');
  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const types = [
    'cardio',
    'olympic_weightlifting',
    'plyometrics',
    'powerlifting',
    'strength',
    'stretching',
    'strongman',
  ];

  const [difficulty, setDifficulty] = useState('');
  const handleChangeDifficulty = (event) => {
    setDifficulty(event.target.value);
  };
  const difficulties = [
    'beginner',
    'intermediate',
    'expert',
  ];

  const [showFilters, setShowFilters] = useState(false);
  const onClickFilter = () => {
    setShowFilters(!showFilters);
  }

  return(
    <Box>
      <Bar title={'Search Exercises'} toggleDrawer={toggleDrawer}/>
      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />
      
      <Box sx={{ pt: 8 }}>
        <Container maxWidth="md">
          <TextField
          fullWidth
            margin='normal'
            label='Search exercise'
            onChange={searchTextHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
          />
          { showFilters ? 
              <>
                <Box>
                  <Button
                    startIcon={<FilterListIcon />}
                    onClick={onClickFilter}
                    size="small"
                  >
                    Hide filters
                  </Button>
                </Box>
                <FormControl sx={{  mt: 1, mr: 1, minWidth: 120 }} size="small">
                  <InputLabel id="muscle">Muscle</InputLabel>
                  <Select
                    id="muscle"
                    value={muscle}
                    label="Muscle"
                    onChange={handleChangeMuscle}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                      muscles.map((muscle) =>
                        <MenuItem value={muscle}>{muscle}</MenuItem>
                      )
                    }
                  </Select>
                </FormControl>
                <FormControl sx={{ mt: 1, mr: 1, minWidth: 120 }} size="small">
                  <InputLabel id="type">Type</InputLabel>
                  <Select
                    id="type"
                    value={type}
                    label="Type"
                    onChange={handleChangeType}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                      types.map((type) =>
                        <MenuItem value={type}>{type}</MenuItem>
                      )
                    }
                  </Select>
                </FormControl>
                <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
                  <InputLabel id="difficulty">Difficulty</InputLabel>
                  <Select
                    id="difficulty"
                    value={difficulty}
                    label="Difficulty"
                    onChange={handleChangeDifficulty}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                      difficulties.map((difficulty) =>
                        <MenuItem value={difficulty}>{difficulty}</MenuItem>
                      )
                    }
                  </Select>
                </FormControl>
              </>
            :
            <Button
              startIcon={<FilterListIcon />}
              onClick={onClickFilter}
              size="small"
            >
              Show filters
            </Button>
          }
          <Button
            fullWidth
            variant="contained"
            onClick={onSearch}
            sx={{ mt: 2 }}
          >
            Search
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          {exercises.map((exercise) => (
            <Grid item key={exercise.name} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image={exercise.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Exercise {exercise.name}
                  </Typography>
                  <Typography>
                    This is an exercise. The explanation is here. This is a long explanation without any meaning.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SearchExercises;
