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
    setTarget('');
    setType('');
    setDifficulty('');
  }

  const [target, setTarget] = useState('');
  const handleChangeTarget = (event) => {
    setTarget(event.target.value);
  };
  const targets = [
    "abductors",
    "abs",
    "adductors",
    "biceps",
    "calves",
    "cardiovascular system",
    "delts",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "levator scapulae",
    "pectorals",
    "quads",
    "serratus anterior",
    "spine",
    "traps",
    "triceps",
    "upper back",
  ];

  const [bodyPart, setBodyPart] = useState('');
  const handleChangeBodyPart = (event) => {
    setBodyPart(event.target.value);
  };
  const bodyParts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];

  const [equipment, setEquipment] = useState('');
  const handleChangeEquipment = (event) => {
    setEquipment(event.target.value);
  };
  const equipments = [
    "assisted",
    "band",
    "barbell",
    "body weight",
    "bosu ball",
    "cable",
    "dumbbell",
    "elliptical machine",
    "ez barbell",
    "hammer",
    "kettlebell",
    "leverage machine",
    "medicine ball",
    "olympic barbell",
    "resistance band",
    "roller",
    "rope",
    "skierg machine",
    "sled machine",
    "smith machine",
    "stability ball",
    "stationary bike",
    "stepmill machine",
    "tire",
    "trap bar",
    "upper body ergometer",
    "weighted",
    "wheel roller",
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
                  <InputLabel id="target">Target</InputLabel>
                  <Select
                    id="target"
                    value={target}
                    label="Target"
                    onChange={handleChangeTarget}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                      targets.map((target) =>
                        <MenuItem value={target}>{target}</MenuItem>
                      )
                    }
                  </Select>
                </FormControl>
                <FormControl sx={{ mt: 1, mr: 1, minWidth: 120 }} size="small">
                  <InputLabel id="bodyPart">Body part</InputLabel>
                  <Select
                    id="bodyPart"
                    value={bodyPart}
                    label="Body Part"
                    onChange={handleChangeBodyPart}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                      bodyParts.map((bodyPart) =>
                        <MenuItem value={bodyPart}>{bodyPart}</MenuItem>
                      )
                    }
                  </Select>
                </FormControl>
                <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
                  <InputLabel id="equipment">Equipment</InputLabel>
                  <Select
                    id="equipment"
                    value={equipment}
                    label="Equipment"
                    onChange={handleChangeEquipment}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                      equipments.map((equipment) =>
                        <MenuItem value={equipment}>{equipment}</MenuItem>
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
